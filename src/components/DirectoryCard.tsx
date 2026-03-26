import { Star, MapPin, Globe, Mail, MessageCircle } from 'lucide-react';

interface DirectoryCardProps {
  data: any;
}

export default function DirectoryCard({ data }: DirectoryCardProps) {
  return (
    <div className="glass-panel p-6 flex flex-col h-full hover:-translate-y-1 transition-transform group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md mb-2 inline-block">
            {data.category}
          </span>
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
            {data.name}
          </h3>
        </div>
        <div className="flex items-center gap-1 bg-yellow-400/10 text-yellow-400 px-2 py-1 rounded-lg shrink-0">
          <Star className="w-4 h-4 fill-current" />
          <span className="font-bold text-sm">{data.rating?.toFixed(1) || '0.0'}</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-start gap-2 text-text/70 text-sm">
          <MapPin className="w-4 h-4 mt-0.5 text-primary/70 shrink-0" />
          <span>{data.city}, {data.state}<br/>{data.country}</span>
        </div>
        
        {data.hasEmail && (
          <div className="flex items-center gap-2 text-[#3FB950] text-sm">
            <Mail className="w-4 h-4 shrink-0" />
            <span className="truncate">{data.emailAddress}</span>
          </div>
        )}
        
        {data.hasWhatsapp && (
           <div className="flex items-center gap-2 text-[#58A6FF] text-sm">
             <MessageCircle className="w-4 h-4 shrink-0" />
             <span className="truncate">{data.whatsappNumber}</span>
           </div>
        )}

        {data.website && (
          <div className="flex items-center gap-2 text-text/70 text-sm">
            <Globe className="w-4 h-4 text-primary/70 shrink-0" />
            <span className="truncate">{new URL(data.website).hostname}</span>
          </div>
        )}
      </div>

      <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/5">
        <span className="text-xs text-text/50">{data.reviews || 0} Reviews</span>
        <button className="text-sm font-bold text-primary hover:text-white transition-colors">
          View Details →
        </button>
      </div>
    </div>
  );
}
