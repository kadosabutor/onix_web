import { 
  PlusSquare, UserPlus, FileDown, BellRing, ArrowRight, MapPin, AlertTriangle, Package
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-10 space-y-12 max-w-[1600px] mx-auto w-full">
      
      {/* Welcome Section */}
      <section>
        <h1 className="text-5xl font-display font-black tracking-tight text-white mb-2">Jó reggelt, Ákos!</h1>
        <p className="text-on-surface-variant text-lg">Itt a mai áttekintés a folyamatban lévő kertépítési munkálatokról.</p>
      </section>

      {/* Quick Actions Row */}
      <section className="flex flex-wrap gap-4 items-center">
        <button className="flex items-center gap-2 bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-bold hover:scale-[0.98] transition-all">
          <PlusSquare size={20} /> + Új Projekt
        </button>
        <button className="flex items-center gap-2 bg-transparent text-white border border-white/10 hover:bg-white/5 px-6 py-3 rounded-lg font-medium transition-all">
          <UserPlus size={20} /> Új Ügyfél
        </button>
        <button className="flex items-center gap-2 bg-transparent text-white border border-white/10 hover:bg-white/5 px-6 py-3 rounded-lg font-medium transition-all">
          <FileDown size={20} /> Számla Export
        </button>
        <button className="flex items-center gap-2 bg-transparent text-white border border-white/10 hover:bg-white/5 px-6 py-3 rounded-lg font-medium transition-all">
          <BellRing size={20} /> Push Értesítés
        </button>
      </section>

      {/* Active Projects Section (Horizontal Scroll) */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">Aktív Projektek</h2>
          <a className="text-primary font-medium flex items-center gap-1 hover:underline cursor-pointer">
            Összes megtekintése <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="snapping-container no-scrollbar flex gap-6 overflow-x-auto pb-4 -mx-2 px-2">
          
          {/* Project Card 1 */}
          <div className="snapping-card min-w-[400px] bg-surface p-8 rounded-xl flex flex-col justify-between aspect-[1.4/1] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 bg-primary-container/10 text-primary-container text-xs font-bold rounded-full uppercase tracking-widest">Folyamatban</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">Obsidian Villa - Kertépítés</h3>
              <p className="text-white/50 text-sm flex items-center gap-2">
                <MapPin size={16} /> Budapest, XII. kerület, Galgóczy u. 44.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-white font-medium">Haladás</span>
                <span className="text-primary font-bold">72%</span>
              </div>
              <div className="w-full bg-white/5 h-[6px] rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[72%] rounded-full shadow-[0_0_12px_rgba(0,208,132,0.4)]"></div>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="snapping-card min-w-[400px] bg-surface p-8 rounded-xl flex flex-col justify-between aspect-[1.4/1] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-bold rounded-full uppercase tracking-widest">Várakozik</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">Modern Loft - Tetőterasz</h3>
              <p className="text-white/50 text-sm flex items-center gap-2">
                <MapPin size={16} /> Szentendre, Duna-part 12.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-white font-medium">Haladás</span>
                <span className="text-orange-400 font-bold">45%</span>
              </div>
              <div className="w-full bg-white/5 h-[6px] rounded-full overflow-hidden">
                <div className="bg-orange-400 h-full w-[45%] rounded-full shadow-[0_0_12px_rgba(251,146,60,0.4)]"></div>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="snapping-card min-w-[400px] bg-surface p-8 rounded-xl flex flex-col justify-between aspect-[1.4/1] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-full uppercase tracking-widest">Folyamatban</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">Zen Kert - Minimál</h3>
              <p className="text-white/50 text-sm flex items-center gap-2">
                <MapPin size={16} /> Telki, Pipacs utca 2.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-white font-medium">Haladás</span>
                <span className="text-cyan-400 font-bold">88%</span>
              </div>
              <div className="w-full bg-white/5 h-[6px] rounded-full overflow-hidden">
                <div className="bg-cyan-400 h-full w-[88%] rounded-full shadow-[0_0_12px_rgba(34,211,238,0.4)]"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Today's Tasks Section */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">Mai Teendők</h2>
          <span className="text-white/40 text-sm font-medium">2026. Március 21. Szombat</span>
        </div>
        
        <div className="overflow-hidden bg-surface-container-low rounded-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-white/30 text-[10px] uppercase tracking-widest">
                <th className="py-4 px-8 font-bold">Időpont</th>
                <th className="py-4 px-8 font-bold">Feladat</th>
                <th className="py-4 px-8 font-bold">Projekt</th>
                <th className="py-4 px-8 font-bold text-right">Résztvevők</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              
              <tr className="bg-transparent hover:bg-white/[0.02] transition-colors group">
                <td className="py-6 px-8 text-white font-medium">08:30</td>
                <td className="py-6 px-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-white font-semibold">Tuják ültetése és tápanyagpótlás</span>
                  </div>
                </td>
                <td className="py-6 px-8 text-primary/80 hover:text-primary cursor-pointer font-medium underline-offset-4 hover:underline">Obsidian Villa</td>
                <td className="py-6 px-8">
                  <div className="flex justify-end -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-surface-container-low object-cover" alt="Team member" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Peti" />
                    <img className="w-8 h-8 rounded-full border-2 border-surface-container-low object-cover" alt="Team member" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gabi" />
                    <div className="w-8 h-8 rounded-full border-2 border-surface-container-low bg-surface-container-high flex items-center justify-center text-[10px] text-white font-bold">+2</div>
                  </div>
                </td>
              </tr>

              <tr className="bg-surface-container/50 hover:bg-white/[0.02] transition-colors group">
                <td className="py-6 px-8 text-white font-medium">11:00</td>
                <td className="py-6 px-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="text-white font-semibold">Öntözőrendszer finomhangolása</span>
                  </div>
                </td>
                <td className="py-6 px-8 text-primary/80 hover:text-primary cursor-pointer font-medium underline-offset-4 hover:underline">Modern Loft</td>
                <td className="py-6 px-8">
                  <div className="flex justify-end -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-surface-container-low object-cover" alt="Team member" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bence" />
                    <img className="w-8 h-8 rounded-full border-2 border-surface-container-low object-cover" alt="Team member" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Laci" />
                  </div>
                </td>
              </tr>

              <tr className="bg-transparent hover:bg-white/[0.02] transition-colors group">
                <td className="py-6 px-8 text-white font-medium">14:15</td>
                <td className="py-6 px-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-white font-semibold">Gyepszőnyeg fektetés</span>
                  </div>
                </td>
                <td className="py-6 px-8 text-primary/80 hover:text-primary cursor-pointer font-medium underline-offset-4 hover:underline">Zen Kert</td>
                <td className="py-6 px-8">
                  <div className="flex justify-end -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-surface-container-low object-cover" alt="Team member" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anna" />
                    <img className="w-8 h-8 rounded-full border-2 border-surface-container-low object-cover" alt="Team member" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Tomi" />
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>

      {/* Bento Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-high p-6 rounded-xl space-y-4">
          <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Havi Bevétel</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-white">4.2M Ft</span>
            <span className="text-primary text-sm font-bold mb-1">+12%</span>
          </div>
        </div>
        
        <div className="bg-surface-container-high p-6 rounded-xl space-y-4">
          <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Aktív Alvállalkozók</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-white">18 fő</span>
            <span className="text-white/30 text-sm font-medium mb-1">4 csapatban</span>
          </div>
        </div>
        
        <div className="bg-primary-container p-6 rounded-xl space-y-4 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-on-primary-container/60 text-xs font-bold uppercase tracking-widest">Anyagkészlet</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-on-primary-container">Alacsony</span>
              <AlertTriangle className="text-on-primary-container mb-1" size={24} />
            </div>
            <p className="text-on-primary-container/80 text-sm mt-2 font-medium underline cursor-pointer hover:text-on-primary-container">Rendelés most</p>
          </div>
          <div className="absolute -right-6 -bottom-6 opacity-20 text-on-primary-container">
            <Package size={140} />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;