import { ExternalLink, Check, X, Mail, MessageCircle, Share2 } from 'lucide-react';

interface DataTableProps {
  data: any[];
}

export default function DataTable({ data }: DataTableProps) {
  if (data.length === 0) return null;

  return (
    <div className="bg-[#111116] border border-[#2A2B32] rounded-md shadow-2xl overflow-hidden font-mono text-sm">
      <div className="overflow-x-auto max-h-[70vh] custom-scrollbar relative">
        <table className="w-full text-left whitespace-nowrap border-collapse">
          <thead className="sticky top-0 z-10 bg-[#1A1C23] border-b border-[#2A2B32] shadow-sm">
            <tr className="text-[#8B949E] uppercase text-[10px] tracking-wider font-bold">
              <th className="px-3 py-2 border-r border-[#2A2B32] font-semibold sticky left-0 z-20 bg-[#1A1C23]">ID</th>
              <th className="px-3 py-2 border-r border-[#2A2B32] font-semibold min-w-[200px]">Organization & Location</th>
              <th className="px-3 py-2 border-r border-[#2A2B32] font-semibold text-center"><Mail className="w-3 h-3 inline mr-1"/> Email</th>
              <th className="px-3 py-2 border-r border-[#2A2B32] font-semibold text-center"><MessageCircle className="w-3 h-3 inline mr-1"/> WhatsApp</th>
              <th className="px-3 py-2 border-r border-[#2A2B32] font-semibold text-center"><Share2 className="w-3 h-3 inline mr-1"/> LinkedIn</th>
              <th className="px-3 py-2 border-r border-[#2A2B32] font-semibold text-center"><Share2 className="w-3 h-3 inline mr-1"/> Instagram</th>
              <th className="px-3 py-2 font-semibold text-right">Direct URLs</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2A2B32] bg-[#0E0F14]">
            {data.slice(0, 200).map((item, index) => (
              <tr 
                key={index} 
                className={`hover:bg-[#1C2128] transition-colors group cursor-crosshair ${
                  index % 2 === 0 ? 'bg-transparent' : 'bg-[#15161A]'
                }`}
              >
                <td className="px-3 py-1.5 border-r border-[#2A2B32] text-[#8B949E] text-[10px] sticky left-0 z-10 bg-inherit group-hover:bg-[#1C2128]">
                  {item.category.slice(0,3).toUpperCase()}-{String(index + 1).padStart(4, '0')}
                </td>
                
                <td className="px-3 py-1.5 border-r border-[#2A2B32]">
                  <div className="flex flex-col">
                    <span className="font-semibold text-white tracking-tight leading-tight">{item.name}</span>
                    <span className="text-[10px] text-[#8B949E] leading-tight">
                      {item.city}, {item.state} — {item.country} ({item.category})
                    </span>
                  </div>
                </td>

                <td className="px-3 py-1.5 border-r border-[#2A2B32] text-center">
                  {item.hasEmail ? (
                    <a href={`mailto:${item.emailAddress}`} className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#238636]/10 text-[#3FB950] hover:bg-[#238636]/30 text-[10px] border border-[#238636]/30 transition-colors">
                      <Check className="w-3 h-3" /> Email
                    </a>
                  ) : <X className="w-3 h-3 text-[#E5534B]/50 mx-auto" />}
                </td>

                <td className="px-3 py-1.5 border-r border-[#2A2B32] text-center">
                  {item.hasWhatsapp ? (
                    <a href={`https://wa.me/${item.whatsappNumber?.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#238636]/10 text-[#3FB950] hover:bg-[#238636]/30 text-[10px] border border-[#238636]/30 transition-colors">
                      <MessageCircle className="w-3 h-3" /> Chat
                    </a>
                  ) : <X className="w-3 h-3 text-[#E5534B]/50 mx-auto" />}
                </td>

                <td className="px-3 py-1.5 border-r border-[#2A2B32] text-center">
                  {item.hasLinkedin ? <Check className="w-3.5 h-3.5 text-[#58A6FF] mx-auto" /> : <X className="w-3.5 h-3.5 text-[#E5534B]/50 mx-auto" />}
                </td>

                <td className="px-3 py-1.5 border-r border-[#2A2B32] text-center">
                  {item.hasInstagram ? <Check className="w-3.5 h-3.5 text-[#D29922] mx-auto" /> : <X className="w-3.5 h-3.5 text-[#E5534B]/50 mx-auto" />}
                </td>

                <td className="px-3 py-1.5 text-right">
                   {item.website ? (
                     <a href={item.website} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#C9D1D9] rounded px-2 py-0.5 text-[10px] transition-colors">
                       Visit <ExternalLink className="w-3 h-3 ml-1" />
                     </a>
                   ) : (
                     <span className="text-[#8B949E] text-[10px] italic">Missing URL</span>
                   )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
