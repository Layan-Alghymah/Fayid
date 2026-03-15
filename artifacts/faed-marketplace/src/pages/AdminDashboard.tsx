import { Layout } from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { useGetAdminStats, useListSuppliers, useApproveSupplier } from "@workspace/api-client-react";
import { useLocation } from "wouter";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Users, Package, ShoppingCart, CheckCircle, ShieldAlert } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  if (!user || user.role !== 'admin') {
    setLocation("/");
    return null;
  }

  const { data: stats } = useGetAdminStats();
  const { data: suppliers } = useListSuppliers();

  const approveMut = useApproveSupplier({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [`/api/admin/suppliers`] });
        queryClient.invalidateQueries({ queryKey: [`/api/admin/stats`] });
        toast({ title: "تم الاعتماد", description: "تم اعتماد المورد بنجاح" });
      }
    }
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
        <div className="flex items-center gap-3 mb-8">
          <ShieldAlert className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">لوحة إدارة المنصة (Admin)</h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {[
            { label: 'إجمالي المبيعات', val: formatPrice(stats?.totalRevenue || 0), color: 'text-primary' },
            { label: 'المستخدمين', val: stats?.totalUsers || 0, color: 'text-blue-400' },
            { label: 'المنتجات النشطة', val: stats?.totalProducts || 0, color: 'text-green-400' },
            { label: 'الطلبات', val: stats?.totalOrders || 0, color: 'text-purple-400' },
            { label: 'طلبات موردين جديدة', val: stats?.pendingSuppliers || 0, color: 'text-red-400' },
          ].map((s, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl text-center">
              <div className={`text-3xl font-black mb-2 ${s.color}`}>{s.val}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Suppliers Management */}
          <div className="glass-panel rounded-3xl p-6 border-white/5">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" /> إدارة الموردين
            </h2>
            <div className="space-y-4">
              {suppliers?.map(s => (
                <div key={s.id} className="bg-background/50 p-4 rounded-xl flex items-center justify-between border border-white/5">
                  <div>
                    <div className="font-bold">{s.businessName}</div>
                    <div className="text-xs text-muted-foreground">{s.userName} • {s.userEmail}</div>
                  </div>
                  <div>
                    {s.verificationStatus === 'pending' ? (
                      <Button 
                        size="sm" 
                        onClick={() => approveMut.mutate({ id: s.id })}
                        isLoading={approveMut.isPending}
                      >
                        اعتماد
                      </Button>
                    ) : (
                      <div className="flex items-center gap-1 text-green-500 text-sm font-bold bg-green-500/10 px-3 py-1 rounded-full">
                        <CheckCircle className="w-4 h-4" /> معتمد
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions (Placeholder) */}
          <div className="glass-panel rounded-3xl p-6 border-white/5">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" /> إدارة المحتوى (قريباً)
            </h2>
            <p className="text-muted-foreground">
              هذا القسم سيحتوي على إدارة تصنيفات المنتجات، مراجعة المنتجات المخالفة، وإدارة حملات التخفيضات الكبرى على مستوى المنصة.
            </p>
          </div>
        </div>

      </div>
    </Layout>
  );
}
