import { MapPin, Filter, ChevronDown, Edit2, MoreVertical, ChevronLeft, ChevronRight, TrendingUp, AlertTriangle, Package } from 'lucide-react';

const Projects = () => {
  return (
    <div className="p-10 max-w-7xl w-full mx-auto">
      
      {/* Hero Header */}
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-black font-epilogue tracking-tighter text-white mb-2">Projektek</h2>
          <p className="text-white/60 text-lg">Összes aktív és lezárt kivitelezés áttekintése.</p>
        </div>
        <div className="flex gap-2 bg-surface-container-low p-1 rounded-xl border border-white/5">
          <button className="px-6 py-2 rounded-lg text-sm font-bold bg-primary-container text-on-primary-container shadow-lg shadow-primary/10 transition-all">Folyamatban</button>
          <button className="px-6 py-2 rounded-lg text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 transition-all">Várakozik</button>
          <button className="px-6 py-2 rounded-lg text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 transition-all">Kész</button>
        </div>
      </div>

      {/* Filters & Stats */}
      <div className="grid grid-cols-12 gap-6 mb-10">
        <div className="col-span-12 lg:col-span-8 flex items-center gap-4">
          <div className="flex-1 bg-surface-container/70 backdrop-blur-xl border border-white/5 p-4 rounded-2xl flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <Filter className="text-primary/70" size={18} />
              <span className="text-sm font-semibold text-white/80">Haladó Szűrők</span>
              <ChevronDown className="text-white/30 group-hover:translate-y-0.5 transition-transform" size={16} />
            </div>
            <div className="h-6 w-[1px] bg-white/10"></div>
            <div className="flex gap-3">
              <span className="px-3 py-1 bg-white/5 rounded-full text-[11px] text-white/50 border border-white/5">Dátum: 2026</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-[11px] text-white/50 border border-white/5">Helyszín: Budapest</span>
            </div>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-4 flex gap-4">
          <div className="flex-1 bg-surface-container/70 backdrop-blur-xl border border-white/5 p-4 rounded-2xl flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Aktív munkaerő</p>
            <p className="text-2xl font-black font-epilogue text-white">14 / 18 <span className="text-xs font-normal text-primary ml-2">+2 ma</span></p>
          </div>
          <div className="flex-1 bg-surface-container/70 backdrop-blur-xl border border-white/5 p-4 rounded-2xl flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Havi készültség</p>
            <p className="text-2xl font-black font-epilogue text-white">82% <span className="text-xs font-normal text-primary ml-2">↑ 4%</span></p>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="rounded-3xl overflow-hidden bg-surface-container-low shadow-2xl shadow-black/40 border border-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high/50 border-b border-white/5">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Projekt neve & Címe</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Állapot</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Készültség</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Határidő</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 text-center">Felelős</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 text-right">Műveletek</th>
              </tr>
            </thead>
            <tbody className="divide-y-0">
              
              {/* Row 1 */}
              <tr className="even:bg-surface odd:bg-background group transition-colors hover:bg-white/[0.03]">
                <td className="px-8 py-6">
                  <div>
                    <p className="text-white font-bold text-base group-hover:text-primary transition-colors">Kiss Család Terasz</p>
                    <p className="text-white/40 text-xs mt-1 flex items-center gap-1.5">
                      <MapPin size={12} /> 1124 Budapest, Fodor utca 12.
                    </p>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">FOLYAMATBAN</span>
                </td>
                <td className="px-6 py-6 min-w-[140px]">
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold text-white/80">65%</span>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-container rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <p className="text-sm font-medium text-white/70">2026. Ápr. 15.</p>
                </td>
                <td className="px-6 py-6">
                  <div className="flex justify-center">
                    <div className="relative group/avatar cursor-pointer">
                      <img className="w-8 h-8 rounded-full border-2 border-surface-container object-cover" alt="Kovács P." src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kovacs" />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover/avatar:opacity-100 transition-opacity whitespace-nowrap">Kovács P.</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 hover:bg-white/5 rounded-lg text-white/30 hover:text-white transition-all"><Edit2 size={16} /></button>
                    <button className="p-2 hover:bg-white/5 rounded-lg text-white/30 hover:text-white transition-all"><MoreVertical size={16} /></button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="even:bg-surface odd:bg-background group transition-colors hover:bg-white/[0.03]">
                <td className="px-8 py-6">
                  <div>
                    <p className="text-white font-bold text-base group-hover:text-primary transition-colors">Nagy Kertépítés</p>
                    <p className="text-white/40 text-xs mt-1 flex items-center gap-1.5">
                      <MapPin size={12} /> 2040 Budaörs, Károly király út 45.
                    </p>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20">VÁRAKOZIK</span>
                </td>
                <td className="px-6 py-6 min-w-[140px]">
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold text-white/80">30%</span>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-400 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <p className="text-sm font-medium text-white/70">2026. Máj. 02.</p>
                </td>
                <td className="px-6 py-6">
                  <div className="flex justify-center">
                    <div className="relative group/avatar cursor-pointer">
                      <img className="w-8 h-8 rounded-full border-2 border-surface-container object-cover" alt="Tóth B." src="https://api.dicebear.com/7.x/avataaars/svg?seed=Toth" />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover/avatar:opacity-100 transition-opacity whitespace-nowrap">Tóth B.</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 hover:bg-white/5 rounded-lg text-white/30 hover:text-white transition-all"><Edit2 size={16} /></button>
                    <button className="p-2 hover:bg-white/5 rounded-lg text-white/30 hover:text-white transition-all"><MoreVertical size={16} /></button>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="even:bg-surface odd:bg-background group transition-colors hover:bg-white/[0.03]">
                <td className="px-8 py-6">
                  <div>
                    <p className="text-white font-bold text-base group-hover:text-primary transition-colors">Szabó Iroda Parkosítás</p>
                    <p className="text-white/40 text-xs mt-1 flex items-center gap-1.5">
                      <MapPin size={12} /> 1138 Budapest, Váci út 110.
                    </p>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">TERVEZÉS ALATT</span>
                </td>
                <td className="px-6 py-6 min-w-[140px]">
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold text-white/80">10%</span>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <p className="text-sm font-medium text-white/70">2026. Jún. 10.</p>
                </td>
                <td className="px-6 py-6">
                  <div className="flex justify-center">
                    <div className="relative group/avatar cursor-pointer">
                      <img className="w-8 h-8 rounded-full border-2 border-surface-container object-cover" alt="Nagy G." src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nagy" />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover/avatar:opacity-100 transition-opacity whitespace-nowrap">Nagy G.</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 hover:bg-white/5 rounded-lg text-white/30 hover:text-white transition-all"><Edit2 size={16} /></button>
                    <button className="p-2 hover:bg-white/5 rounded-lg text-white/30 hover:text-white transition-all"><MoreVertical size={16} /></button>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-8 py-4 bg-surface-container-high/30 flex justify-between items-center border-t border-white/5">
          <p className="text-xs text-white/40">Megjelenítve: <span className="text-white font-medium">1-3</span> / 28 projekt</p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-white/40 cursor-not-allowed"><ChevronLeft size={16} /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-container text-on-primary-container font-bold text-xs">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/60 text-xs transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/60 text-xs transition-colors">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/60 transition-colors"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* Dashboard Summary Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-surface-container-low p-6 rounded-3xl group cursor-pointer hover:bg-surface-container-high transition-all border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="text-primary p-2 bg-primary/10 rounded-xl h-10 w-10" />
            <span className="text-[10px] font-bold text-primary">AKTÍV</span>
          </div>
          <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1">Munkadíj Egyenleg</h4>
          <p className="text-2xl font-black font-epilogue text-white">4.2M Ft</p>
        </div>
        
        <div className="bg-surface-container-low p-6 rounded-3xl group cursor-pointer hover:bg-surface-container-high transition-all border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <AlertTriangle className="text-amber-500 p-2 bg-amber-500/10 rounded-xl h-10 w-10" />
            <span className="text-[10px] font-bold text-amber-500">FIGYELEM</span>
          </div>
          <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1">Késő Feladatok</h4>
          <p className="text-2xl font-black font-epilogue text-white">3 elem</p>
        </div>
        
        <div className="bg-surface-container-low p-6 rounded-3xl group cursor-pointer hover:bg-surface-container-high transition-all border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <Package className="text-cyan-500 p-2 bg-cyan-500/10 rounded-xl h-10 w-10" />
            <span className="text-[10px] font-bold text-cyan-500">LOGISZTIKA</span>
          </div>
          <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1">Alapanyag várható</h4>
          <p className="text-2xl font-black font-epilogue text-white">Holnap</p>
        </div>
      </div>

      <footer className="mt-16 text-center">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">© 2026 ONIX Premium Landscaping SaaS — Digital Blueprinting v4.0</p>
      </footer>

    </div>
  );
};

export default Projects;