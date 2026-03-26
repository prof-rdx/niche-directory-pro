import { Target, Users, Mail } from 'lucide-react';

export default function ValueProps() {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-white mb-4 italic tracking-tight opacity-90 border-b border-white/10 pb-2">
        Elite Lead Generation Capabilities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Archery/Knives Niche Data Breakdown */}
        <div className="glass-panel p-4 bg-gradient-to-br from-[#12141D] to-[#1E2330] border-l-4 border-l-primary relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all"></div>
          <h3 className="text-sm text-text/60 font-medium mb-2">TAM Extraction Volumes</h3>
          <ul className="text-sm font-semibold text-white space-y-1.5">
            <li className="flex justify-between items-center"><span>🏹 Archery</span> <span className="text-primary text-[10px] tracking-wider">2,450+ VERIFIED</span></li>
            <li className="flex justify-between items-center"><span>🔪 Knives</span> <span className="text-primary text-[10px] tracking-wider">1,800+ VERIFIED</span></li>
            <li className="flex justify-between items-center"><span>🧂 Pink Salt</span> <span className="text-primary text-[10px] tracking-wider">530+ VERIFIED</span></li>
            <li className="flex justify-between items-center"><span>🏥 Surgery Equip</span> <span className="text-primary text-[10px] tracking-wider">1,120+ VERIFIED</span></li>
          </ul>
        </div>

        {/* Use Case 1 */}
        <div className="glass-panel p-4 flex flex-col justify-center hover:-translate-y-1 transition-transform">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
            <Mail className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-white text-sm">Multi-Channel Sequences</h3>
          <p className="text-xs text-text/60 mt-1 line-clamp-2">Feed 10k+ physical businesses directly into exact multi-channel (Email, WhatsApp, LinkedIn) pipelines.</p>
        </div>

        {/* Use Case 2 */}
        <div className="glass-panel p-4 flex flex-col justify-center hover:-translate-y-1 transition-transform">
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
            <Users className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-white text-sm">B2B Lookalike Matches</h3>
          <p className="text-xs text-text/60 mt-1 line-clamp-2">Seed hyper-local geographical coordinates to Facebook/Google for ultra-targeted ad mirroring.</p>
        </div>

        {/* Use Case 3 */}
        <div className="glass-panel p-4 flex flex-col justify-center hover:-translate-y-1 transition-transform">
          <div className="w-8 h-8 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center mb-3">
            <Target className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-white text-sm">Hyper-Local TAM Indexing</h3>
          <p className="text-xs text-text/60 mt-1 line-clamp-2">Filter down by exact state or municipal region to find untouched market gaps before competitors do.</p>
        </div>

      </div>
    </div>
  );
}
