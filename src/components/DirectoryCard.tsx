import { motion } from 'framer-motion';
import { MapPin, Star, Users, ExternalLink, Phone } from 'lucide-react';

interface Props {
  data: {
    name: string;
    category: string;
    address: string;
    rating: number;
    reviews: number;
    website: string;
    phone: string;
    region: string;
  };
  index: number;
}

export default function DirectoryCard({ data, index }: Props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="glass-panel p-5 hover:border-primary/50 transition-colors group relative overflow-hidden"
    >
      {/* Decorative gradient blob */}
      <div className="absolute -right-10 -top-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />

      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors pr-8">
            {data.name}
          </h3>
          <span className="inline-block px-2 py-1 bg-surface border border-white/5 rounded text-xs text-text/80 font-medium">
            {data.category || 'Business'}
          </span>
          <span className="inline-block px-2 py-1 bg-surface border border-white/5 rounded text-xs text-text/80 font-medium ml-2">
            {data.region}
          </span>
        </div>
      </div>

      <div className="space-y-2 text-sm text-text/70 mb-4">
        {data.address && (
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
            <span className="line-clamp-2">{data.address.replace('Address: ', '')}</span>
          </div>
        )}
        
        <div className="flex items-center gap-6">
          {data.rating > 0 && (
             <div className="flex items-center gap-1.5 font-medium text-white">
               <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
               {data.rating}
             </div>
          )}
          {data.reviews > 0 && (
             <div className="flex items-center gap-1.5">
               <Users className="w-4 h-4 text-secondary" />
               {data.reviews} reviews
             </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-3 border-t border-white/10 mt-auto">
        {data.website ? (
          <a
            href={data.website.startsWith('http') ? data.website : `https://${data.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-primary hover:text-[#0B0C10] py-2 rounded-lg transition-colors font-medium text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Website
          </a>
        ) : (
          <button disabled className="flex-1 flex items-center justify-center gap-2 bg-white/5 opacity-50 cursor-not-allowed py-2 rounded-lg font-medium text-sm">
            No Website
          </button>
        )}
        
        {data.phone ? (
          <a
             href={`tel:${data.phone}`}
             className="flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-white"
             title={`Call ${data.phone}`}
          >
            <Phone className="w-4 h-4 text-primary" />
          </a>
        ) : null}
      </div>
    </motion.div>
  );
}
