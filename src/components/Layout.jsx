import Sidebar from './Sidebar';
import { Search, Bell, MessageSquare, Plus } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-background font-sans text-on-surface selection:bg-primary/30">
      <Sidebar />
      
      <main className="flex-1 ml-64 min-h-screen flex flex-col overflow-hidden">
        
        {/* TopAppBar */}
        <header className="flex justify-between items-center w-full h-16 px-8 sticky top-0 bg-surface/70 backdrop-blur-xl z-40">
          <div className="flex items-center flex-1">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                className="w-full bg-surface-container-highest border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20 text-white outline-none" 
                placeholder="Keresés a projektek között..." 
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-epilogue font-bold text-sm active:scale-95 transition-all hover:brightness-110">
              <Plus size={18} strokeWidth={3} /> Új Projekt
            </button>
            <div className="flex items-center gap-4 text-white/70">
              <button className="hover:text-primary-container transition-all"><Bell size={20} /></button>
              <button className="hover:text-primary-container transition-all"><MessageSquare size={20} /></button>
            </div>
            <div className="h-8 w-[1px] bg-white/10"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs font-bold text-white">Kiss Gábor</p>
                <p className="text-[10px] text-white/50">Adminisztrátor</p>
              </div>
              <img 
                className="w-9 h-9 rounded-full object-cover border border-primary/20 p-0.5" 
                alt="Profilkép" 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gabor&backgroundColor=1b2028" 
              />
            </div>
          </div>
        </header>

        {/* Tényleges oldaltartalom */}
        <div className="flex-1 w-full">
          {children}
        </div>
        
      </main>
    </div>
  );
};

export default Layout;