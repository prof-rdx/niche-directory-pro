import { Database, Eye } from 'lucide-react';

interface DatasetVaultProps {
  onView: (datasetName: string) => void;
}

export default function DatasetVault({ onView }: DatasetVaultProps) {
  const datasets = [
    { name: "Sports Wear", records: "12,450+", desc: "Direct manufacturing contacts in Pakistan's primary sports hub.", tag: "SPORTS" },
    { name: "Knives", records: "1,800+", desc: "High-end tactical and kitchen knife retailers.", tag: "KNIVES" },
    { name: "Pink Salt", records: "3,200+", desc: "Australian and US wholesale distributor indices.", tag: "SALT" },
    { name: "Surgery Equip", records: "5,100+", desc: "B2B medical supply chains globally.", tag: "MEDICAL" },
    { name: "Archery", records: "1,450+", desc: "Archery retail chains and distributors in EU & USA.", tag: "ARCHERY" }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Database className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-bold text-white tracking-tight">Available Premium Datasets</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {datasets.map((ds, idx) => (
          <div key={idx} className="glass-panel p-5 relative overflow-hidden group border border-[#2A2B32] hover:border-primary/50 transition-colors flex flex-col">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/20 transition-all"></div>
            
            <span className="text-[10px] font-bold tracking-wider text-primary mb-2">{ds.tag}</span>
            <h3 className="text-md font-bold text-white leading-tight mb-2">{ds.name}</h3>
            <p className="text-xs text-text/60 mb-4 flex-grow">{ds.desc}</p>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex flex-col">
                <span className="text-[10px] text-text/50 uppercase tracking-widest">Records</span>
                <span className="text-sm font-bold text-white">{ds.records}</span>
              </div>
              
              <button 
                onClick={() => onView(ds.name)}
                className="flex items-center gap-1.5 bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md text-xs font-bold transition-colors border border-primary/20"
              >
                <Eye className="w-3 h-3" /> View Data
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
