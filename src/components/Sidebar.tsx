import { Filter, Star } from 'lucide-react';

interface Props {
  regions: string[];
  categories: string[];
  selectedRegion: string;
  setSelectedRegion: (r: string) => void;
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  minRating: number;
  setMinRating: (r: number) => void;
}

export default function Sidebar({
  regions,
  categories,
  selectedRegion,
  setSelectedRegion,
  selectedCategory,
  setSelectedCategory,
  minRating,
  setMinRating
}: Props) {
  return (
    <div className="glass-panel p-6 sticky top-6">
      <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
        <Filter className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-bold">Filters</h2>
      </div>

      {/* Region Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-text/80 mb-2">Region</label>
        <select 
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="w-full bg-surface border border-white/10 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-primary outline-none transition-all"
        >
          {regions.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-text/80 mb-2">Category</label>
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full bg-surface border border-white/10 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-primary outline-none transition-all"
        >
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Rating Filter className="mb-6" */}
      <div className="mb-6">
         <label className="block text-sm font-medium text-text/80 mb-2">Min Rating</label>
         <div className="flex items-center justify-between mt-2">
            {[0, 3, 4, 4.5, 5].map(rating => (
              <button
                key={rating}
                onClick={() => setMinRating(rating)}
                className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${
                  minRating === rating 
                    ? 'border-primary bg-primary/10 text-primary' 
                    : 'border-white/10 bg-surface text-text hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-1 text-xs">
                  {rating === 0 ? 'All' : rating}
                  {rating !== 0 && <Star className="w-3 h-3 fill-current" />}
                </div>
              </button>
            ))}
         </div>
      </div>

      {/* Database Stats Promo */}
      <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/20 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2" />
        <h4 className="text-primary font-bold text-sm mb-1 uppercase tracking-wide">Pro Tip</h4>
        <p className="text-xs text-text/80">Need custom scraping or a specific niche? Download the full dataset to get in touch!</p>
      </div>
    </div>
  );
}
