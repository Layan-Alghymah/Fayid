import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const rawPort = process.env.PORT ?? "5173";
const port = Number(rawPort);
const basePath = process.env.BASE_PATH ?? "/";

// Replit dev plugins — loaded dynamically so the build never fails when they
// are not installed (i.e. on Hostinger or any non-Replit environment).
const devPlugins: ReturnType<typeof Array>[] = [];
if (process.env.NODE_ENV !== "production") {
  try {
    const { default: runtimeErrorOverlay } = await import(
      "@replit/vite-plugin-runtime-error-modal"
    );
    devPlugins.push(runtimeErrorOverlay());
  } catch {}

  if (process.env.REPL_ID !== undefined) {
    try {
      const { cartographer } = await import("@replit/vite-plugin-cartographer");
      devPlugins.push(
        cartographer({ root: path.resolve(import.meta.dirname, "..") })
      );
    } catch {}
    try {
      const { devBanner } = await import("@replit/vite-plugin-dev-banner");
      devPlugins.push(devBanner());
    } catch {}
  }
}

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss(), ...devPlugins],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(
        import.meta.dirname,
        "..",
        "..",
        "attached_assets"
      ),
      // Resolve workspace packages directly from source so npm builds work
      // without pnpm workspace linking.
      "@workspace/api-client-react": path.resolve(
        import.meta.dirname,
        "../../lib/api-client-react/src/index.ts"
      ),
      "@workspace/api-client-react.schemas": path.resolve(
        import.meta.dirname,
        "../../lib/api-client-react/src/generated/api.schemas.ts"
      ),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    // Output to dist/ — matches the Hostinger "Output directory" setting.
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
    fs: {
      strict: true,
      deny: ["**/.*"],
      // Allow Vite's dev server to read files from the workspace root so the
      // @workspace/* aliases work during local development.
      allow: [path.resolve(import.meta.dirname, "../..")],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
