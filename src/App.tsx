import { useState, useMemo } from 'react';
import { mockData } from './data/mockData';
import DirectoryCard from './components/DirectoryCard';
import Sidebar from './components/Sidebar';
import DownloadModal from './components/DownloadModal';
import DataTable from './components/DataTable';
import DashboardStats from './components/DashboardStats';
import DatasetVault from './components/DatasetVault';
import { AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedNiche, setSelectedNiche] = useState('All');
  const [minRating, setMinRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDataset, setActiveDataset] = useState('Complete Database');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('table');
  const [filters, setFilters] = useState({ email: false, whatsapp: false, social: false });

  // Derive unique categories and countries for filters
  const categories = ['All', ...Array.from(new Set(mockData.map(d => d.category))).filter(Boolean)];
  const countries = ['All', ...Array.from(new Set(mockData.map(d => d.country))).filter(Boolean)];

  // Filter data
  const filteredData = useMemo(() => {
    return mockData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = selectedCountry === 'All' || item.country === selectedCountry;
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesNiche = selectedNiche === 'All' || item.niche === selectedNiche;
      const matchesRating = item.rating >= minRating;
      const matchesEmail = !filters.email || item.hasEmail;
      const matchesWhatsapp = !filters.whatsapp || item.hasWhatsapp;
      const matchesSocial = !filters.social || (item.hasLinkedin || item.hasInstagram);
      
      return matchesSearch && matchesCountry && matchesCategory && matchesNiche && matchesRating && matchesEmail && matchesWhatsapp && matchesSocial;
    });
  }, [searchTerm, selectedCountry, selectedCategory, selectedNiche, minRating, filters]);

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
          onClick={() => {
            setActiveDataset('Complete Database');
            setIsModalOpen(true);
          }}
          className="bg-primary hover:bg-secondary text-[#0B0C10] font-bold py-2 px-6 rounded-lg shadow-[0_0_15px_rgba(102,252,241,0.5)] transition-all transform hover:scale-105"
        >
          Download Dataset
        </button>
      </header>

      {/* Dashboard Stats */}
      <DashboardStats 
        totalLeads={mockData.length} 
        totalNiches={categories.length - 1} 
        totalRegions={countries.length - 1} 
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <Sidebar 
            countries={countries}
            categories={categories}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            minRating={minRating}
            setMinRating={setMinRating}
            filters={filters}
            setFilters={setFilters}
          />
        </div>

        {/* Main Interface */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          
          {/* Specific Target Datasets */}
          <DatasetVault onView={(name) => {
            setSelectedNiche(name);
            setSelectedCountry('All');
            setSelectedCategory('All');
          }} />

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

          {/* Results Count & View Toggle */}
          <div className="flex justify-between items-center">
            <div className="text-sm text-text/60 font-medium">
              Showing <span className="text-primary">{filteredData.length}</span> verified leads.
            </div>
            
            <div className="flex bg-white/5 rounded-lg border border-white/10 p-1">
               <button 
                 onClick={() => setViewMode('grid')}
                 className={`px-3 py-1.5 text-sm rounded-md transition-colors ${viewMode === 'grid' ? 'bg-primary text-[#0B0C10] font-medium' : 'text-text/60 hover:text-white'}`}
               >
                 Cards
               </button>
               <button 
                 onClick={() => setViewMode('table')}
                 className={`px-3 py-1.5 text-sm rounded-md transition-colors ${viewMode === 'table' ? 'bg-primary text-[#0B0C10] font-medium' : 'text-text/60 hover:text-white'}`}
               >
                 Table
               </button>
            </div>
          </div>

          {/* Render Table OR Cards Grid */}
          {filteredData.length === 0 ? (
            <div className="col-span-full py-20 text-center glass-panel">
              <p className="text-xl text-text/50">No businesses match your filters.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCountry('All');
                  setSelectedCategory('All');
                  setMinRating(0);
                  setFilters({ email: false, whatsapp: false, social: false });
                }}
                className="mt-4 text-primary underline"
              >
                Clear all filters
              </button>
            </div>
          ) : viewMode === 'table' ? (
            <DataTable data={filteredData} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence>
                {filteredData.slice(0, 100).map((item, i) => (
                  <DirectoryCard key={item.name + i} data={item} />
                ))}
              </AnimatePresence>
              
              {filteredData.length > 100 && (
                 <div className="col-span-full text-center p-4 text-text/50">
                   Showing 100 of {filteredData.length} cards. Switch to Table View or use Search to explore more.
                 </div>
              )}
            </div>
          )}

        </div>
      </main>

      {/* Hire Me Modal */}
      <DownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        datasetName={activeDataset} 
      />
      
    </div>
  );
}

export default App;
