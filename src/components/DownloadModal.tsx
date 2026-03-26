import { X, ExternalLink, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  datasetName?: string;
}

export default function DownloadModal({ isOpen, onClose, datasetName = "Complete Database" }: DownloadModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-panel w-full max-w-md p-6 relative bg-[#1A1C23] border border-primary/20"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-text/50 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30 shadow-[0_0_15px_rgba(35,134,54,0.3)]">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Access {datasetName}</h2>
              <p className="text-text/70 text-sm mt-3 leading-relaxed">
                This premium dataset is exclusively available for direct clients. Connect directly on LinkedIn to discuss data extraction, enrichment, and B2B lead generation services.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://linkedin.com/in/muhammad-ahmad-7728702b0"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#0A66C2] hover:bg-[#004182] text-white p-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-lg shadow-[#0A66C2]/20"
              >
                <ExternalLink className="w-6 h-6" />
                Connect on LinkedIn for Access
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-center">
              <p className="text-xs text-text/40">
                Securely encrypted. Over 150k+ B2B leads successfully delivered to agencies worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
