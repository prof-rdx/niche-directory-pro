import { useState, useMemo } from 'react';
import { mockData } from './data/mockData';
import DirectoryCard from './components/DirectoryCard';
import Sidebar from './components/Sidebar';
import DownloadModal from './components/DownloadModal';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minRating, setMinRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Derive unique categories and regions for filters
  const categories = ['All', ...Array.from(new Set(mockData.map(d => d.category))).filter(Boolean)];
  const regions = ['All', ...Array.from(new Set(mockData.map(d => d.region))).filter(Boolean)];

  // Filter data
  const filteredData = useMemo(() => {
    return mockData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedRegion === 'All' || item.region === selectedRegion;
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesRating = item.rating >= minRating;
      
      return matchesSearch && matchesRegion && matchesCategory && matchesRating;
    });
  }, [searchTerm, selectedRegion, selectedCategory, minRating]);

  return (
    <div className="min-h-screen flex flex-col pt-6 pb-12 px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <header className="flex justify-between items-center mb-8 glass-panel p-4 px-6 md:px-8 max-w-7xl mx-auto w-full">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Niche<span className="text-gradient">Directory</span> <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full align-top ml-1">PRO</span>
          </h1>
          <p className="text-sm text-text/70 mt-1">13,000+ verified B2B leads across global niches.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-secondary text-[#0B0C10] font-bold py-2 px-6 rounded-lg shadow-[0_0_15px_rgba(102,252,241,0.5)] transition-all transform hover:scale-105"
        >
          Download Dataset
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <Sidebar 
            regions={regions}
            categories={categories}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            minRating={minRating}
            setMinRating={setMinRating}
          />
        </div>

        {/* Directory Grid */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          
          {/* Search Bar */}
          <div className="glass-panel p-2 flex items-center gap-3">
            <Search className="w-5 h-5 text-primary ml-3" />
            <input 
              type="text" 
              placeholder="Search companies by name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-text placeholder-text/50 p-2 text-lg"
            />
          </div>

          {/* Results Count */}
          <div className="text-sm text-text/60 font-medium">
            Showing <span className="text-primary">{filteredData.length}</span> verified leads.
          </div>

          {/* Cards Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <AnimatePresence>
              {filteredData.map((item, i) => (
                <DirectoryCard key={item.name + i} data={item} index={i} />
              ))}
            </AnimatePresence>
            
            {filteredData.length === 0 && (
              <div className="col-span-full py-20 text-center glass-panel">
                <p className="text-xl text-text/50">No businesses match your filters.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedRegion('All');
                    setSelectedCategory('All');
                    setMinRating(0);
                  }}
                  className="mt-4 text-primary underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </motion.div>

        </div>
      </main>

      {/* Hire Me Modal */}
      <AnimatePresence>
        {isModalOpen && <DownloadModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
      
    </div>
  );
}

export default App;
