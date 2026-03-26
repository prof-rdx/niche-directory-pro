import { Server, MapPin, Star, Building2 } from 'lucide-react';

interface StatsProps {
  totalLeads: number;
  totalNiches: number;
  totalRegions: number;
}

export default function DashboardStats({ totalLeads, totalNiches, totalRegions }: StatsProps) {
  const stats = [
    { label: 'Total Verified Leads', value: totalLeads.toLocaleString(), icon: Server, color: 'text-primary' },
    { label: 'Niche Categories', value: totalNiches, icon: Building2, color: 'text-purple-400' },
    { label: 'Global Regions', value: totalRegions, icon: MapPin, color: 'text-blue-400' },
    { label: 'Avg Rating', value: '4.6', icon: Star, color: 'text-yellow-400' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((s, i) => (
        <div key={i} className="glass-panel p-5 flex items-center justify-between hover:scale-[1.02] transition-transform">
          <div>
            <p className="text-sm text-text/60 font-medium">{s.label}</p>
            <p className="text-2xl font-bold mt-1 text-white">{s.value}</p>
          </div>
          <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${s.color}`}>
            <s.icon className="w-6 h-6" />
          </div>
        </div>
      ))}
    </div>
  );
}
