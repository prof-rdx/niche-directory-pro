import { motion } from 'framer-motion';
import { X, Download, Code, Briefcase } from 'lucide-react';

interface Props {
  onClose: () => void;
}

export default function DownloadModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />
      
      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg glass-panel overflow-hidden"
      >
        {/* Decorative Gradients */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-text/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20">
            <Download className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-3">
            Want the full <span className="text-gradient">13,000+</span> dataset?
          </h2>
          
          <p className="text-text/80 mb-8 leading-relaxed">
            This directory currently shows a premium preview of my massive verified B2B dataset (Archery, Knives, Medical, etc). 
            If you need the full CSV data, or want a custom web scraper built for your specific niche, I'm available for hire!
          </p>

          <div className="space-y-4">
            <a 
              href="https://upwork.com" 
              target="_blank" 
              rel="noopener noreferrer"
               className="group flex items-center justify-between w-full p-4 bg-primary text-[#0B0C10] rounded-xl font-bold transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(102,252,241,0.3)] hover:shadow-[0_0_30px_rgba(102,252,241,0.5)]"
            >
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5" />
                <span>Hire me on Upwork</span>
              </div>
              <span className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all font-mono">→</span>
            </a>

            <a 
              href="mailto:contact@example.com"
              className="group flex items-center justify-between w-full p-4 bg-surface border border-white/10 hover:border-primary/50 text-white rounded-xl font-medium transition-all hover:bg-surface/80"
            >
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-secondary" />
                <span>Need a Custom Scraper? DM me</span>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
