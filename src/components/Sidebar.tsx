import { Filter, Star, MapPin, Building2, CheckSquare, Square, Mail, MessageCircle } from 'lucide-react';

interface SidebarProps {
  categories: string[];
  countries: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  filters: { email: boolean; whatsapp: boolean; social: boolean };
  setFilters: React.Dispatch<React.SetStateAction<{ email: boolean; whatsapp: boolean; social: boolean }>>;
}

export default function Sidebar({ 
  categories, 
  countries, 
  selectedCategory, 
  setSelectedCategory, 
  selectedCountry,
  setSelectedCountry,
  minRating, 
  setMinRating,
  filters,
  setFilters
}: SidebarProps) {
  
  const toggleFilter = (key: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="glass-panel p-6 h-full border border-white/5">
      <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
        <Filter className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-bold uppercase tracking-wider text-white">TAM Builder</h2>
      </div>

      {/* Target Dataset Filters */}
      <div className="mb-8">
        <h3 className="text-xs font-bold text-text/50 uppercase tracking-widest mb-3 flex items-center gap-2">
          <Building2 className="w-3.5 h-3.5" /> Target Niche
        </h3>
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full bg-[#161B22] border border-[#30363D] text-[#C9D1D9] text-sm rounded-md p-2.5 outline-none focus:border-primary transition-colors appearance-none"
        >
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="mb-8">
        <h3 className="text-xs font-bold text-text/50 uppercase tracking-widest mb-3 flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5" /> Geo-Fencing
        </h3>
        <select 
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="w-full bg-[#161B22] border border-[#30363D] text-[#C9D1D9] text-sm rounded-md p-2.5 outline-none focus:border-primary transition-colors appearance-none"
        >
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Rating Filter */}
      <div className="mb-8">
        <h3 className="text-xs font-bold text-text/50 uppercase tracking-widest mb-3 flex items-center gap-2">
          <Star className="w-3.5 h-3.5" /> Minimum Rating
        </h3>
        <div className="flex flex-col gap-2">
          {[0, 4, 4.5].map(rating => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer group">
              <input 
                type="radio" 
                name="rating" 
                className="hidden" 
                checked={minRating === rating}
                onChange={() => setMinRating(rating)}
              />
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${minRating === rating ? 'border-primary' : 'border-[#30363D] group-hover:border-primary/50'}`}>
                {minRating === rating && <div className="w-2 h-2 rounded-full bg-primary" />}
              </div>
              <span className={`text-sm ${minRating === rating ? 'text-white font-medium' : 'text-[#8B949E]'}`}>
                {rating === 0 ? 'Any Rating' : `${rating}.0 & Up`}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Multi-Channel Enrichment Filters */}
      <div className="mb-8">
        <h3 className="text-xs font-bold text-text/50 uppercase tracking-widest mb-3 text-primary">
          Enrichment Signals
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 cursor-pointer group" onClick={() => toggleFilter('email')}>
            {filters.email ? <CheckSquare className="w-4 h-4 text-primary" /> : <Square className="w-4 h-4 text-[#30363D] group-hover:text-primary/50" />}
            <span className={`text-sm flex items-center gap-2 ${filters.email ? 'text-white font-medium' : 'text-[#8B949E]'}`}><Mail className="w-3.5 h-3.5" /> Has Direct Email</span>
          </li>
          <li className="flex items-center gap-3 cursor-pointer group" onClick={() => toggleFilter('whatsapp')}>
            {filters.whatsapp ? <CheckSquare className="w-4 h-4 text-[#3FB950]" /> : <Square className="w-4 h-4 text-[#30363D] group-hover:text-[#3FB950]/50" />}
            <span className={`text-sm flex items-center gap-2 ${filters.whatsapp ? 'text-white font-medium' : 'text-[#8B949E]'}`}><MessageCircle className="w-3.5 h-3.5" /> Has WhatsApp</span>
          </li>
          <li className="flex items-center gap-3 cursor-pointer group" onClick={() => toggleFilter('social')}>
            {filters.social ? <CheckSquare className="w-4 h-4 text-[#58A6FF]" /> : <Square className="w-4 h-4 text-[#30363D] group-hover:text-[#58A6FF]/50" />}
            <span className={`text-sm flex items-center gap-2 ${filters.social ? 'text-white font-medium' : 'text-[#8B949E]'}`}>Has Social (IG / LI)</span>
          </li>
        </ul>
      </div>

    </aside>
  );
}
