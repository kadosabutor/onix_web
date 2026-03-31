import { Filter, ArrowUpDown, Contact, Clock, Star } from 'lucide-react';

const CRM = () => {
  return (
    <div className="p-8 max-w-7xl w-full mx-auto relative z-10">
      
      {/* Header Section */}
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-5xl font-black font-epilogue tracking-tighter text-white leading-none">Ügyfélkezelés</h2>
          <p className="mt-4 text-white/50 max-w-xl leading-relaxed">A prémium ügyfélkör menedzselése a Grove architektúrában.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container hover:bg-surface-bright transition-colors rounded-lg text-sm font-medium text-white/70">
            <Filter size={18} /> Szűrők
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container hover:bg-surface-bright transition-colors rounded-lg text-sm font-medium text-white/70">
            <ArrowUpDown size={18} /> Rendezés
          </button>
        </div>
      </header>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Érdeklődők */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white/50">Érdeklődők</h3>
            </div>
            <span className="text-[10px] font-bold bg-surface-container text-white/50 px-2 py-0.5 rounded-full">4</span>
          </div>
          
          <div className="flex flex-col gap-4">
            {/* Card 1 */}
            <div className="group bg-surface-container p-5 rounded-xl transition-all duration-300 hover:bg-surface-bright cursor-pointer border border-white/5">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-epilogue font-bold text-white leading-tight">Zöld Sziget Kft.</h4>
                <Contact className="text-white/40 group-hover:text-primary transition-colors" size={20} />
              </div>
              <p className="text-sm text-white/50 mb-6">Kovács Aladár</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Összesen</span>
                  <span className="text-sm font-bold text-primary-container">450.000 Ft</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/40">
                  <Clock size={12} />
                  <span>Ma, 10:45</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-surface-container p-5 rounded-xl transition-all duration-300 hover:bg-surface-bright cursor-pointer border border-white/5">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-epilogue font-bold text-white leading-tight">Park Center</h4>
                <Contact className="text-white/40 group-hover:text-primary transition-colors" size={20} />
              </div>
              <p className="text-sm text-white/50 mb-6">Nagy Julianna</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Összesen</span>
                  <span className="text-sm font-bold text-primary-container">120.000 Ft</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/40">
                  <Clock size={12} />
                  <span>2 napja</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Aktív Ügyfelek */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white/50">Aktív Ügyfelek</h3>
            </div>
            <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">12</span>
          </div>
          
          <div className="flex flex-col gap-4">
            {/* Card 3 */}
            <div className="group bg-surface-container p-5 rounded-xl transition-all duration-300 hover:bg-surface-bright cursor-pointer border border-white/5">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-epilogue font-bold text-white leading-tight">Flora Design Studio</h4>
                <Contact className="text-white/40 group-hover:text-emerald-400 transition-colors" size={20} />
              </div>
              <p className="text-sm text-white/50 mb-6">Tóth Gábor</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Összesen</span>
                  <span className="text-sm font-bold text-primary-container">2.840.000 Ft</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/40">
                  <Clock size={12} />
                  <span>Tegnap, 16:20</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-surface-container p-5 rounded-xl transition-all duration-300 hover:bg-surface-bright cursor-pointer border border-white/5">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-epilogue font-bold text-white leading-tight">Sky Garden Estates</h4>
                <Contact className="text-white/40 group-hover:text-emerald-400 transition-colors" size={20} />
              </div>
              <p className="text-sm text-white/50 mb-6">Varga Emese</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Összesen</span>
                  <span className="text-sm font-bold text-primary-container">1.150.000 Ft</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/40">
                  <Clock size={12} />
                  <span>3 órája</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: VIP Ügyfelek */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white/50">VIP Ügyfelek</h3>
            </div>
            <span className="text-[10px] font-bold bg-primary-container text-on-primary-container px-2 py-0.5 rounded-full">3</span>
          </div>
          
          <div className="flex flex-col gap-4">
            {/* Card 5 (VIP Highlighted) */}
            <div className="group bg-emerald-950/20 p-5 rounded-xl transition-all duration-300 hover:bg-emerald-900/30 cursor-pointer relative overflow-hidden border border-primary/20">
              <div className="absolute top-0 right-0 p-1.5 bg-primary-container text-on-primary-container rounded-bl-lg">
                <Star size={14} fill="currentColor" />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-epilogue font-bold text-white leading-tight">Azure Waterfront</h4>
                <Contact className="text-emerald-400" size={20} />
              </div>
              <p className="text-sm text-white/70 mb-6">Dr. Szabó Miklós</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-500/70 font-bold">Összesen</span>
                  <span className="text-lg font-bold text-primary-container">8.400.000 Ft</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-emerald-500/60">
                  <Clock size={12} />
                  <span>Éppen most</span>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group bg-surface-container p-5 rounded-xl transition-all duration-300 hover:bg-surface-bright cursor-pointer border border-white/5">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-epilogue font-bold text-white leading-tight">Obsidian Holdings</h4>
                <Contact className="text-white/40 group-hover:text-emerald-400 transition-colors" size={20} />
              </div>
              <p className="text-sm text-white/50 mb-6">Farkas Henrietta</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Összesen</span>
                  <span className="text-sm font-bold text-primary-container">5.200.000 Ft</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/40">
                  <Clock size={12} />
                  <span>4 napja</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Archivált */}
        <div className="flex flex-col gap-4 opacity-60">
          <div className="flex items-center justify-between px-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-700"></span>
              <h3 class="text-xs uppercase tracking-[0.2em] font-bold text-white/50">Archivált</h3>
            </div>
            <span className="text-[10px] font-bold bg-surface-container text-white/50 px-2 py-0.5 rounded-full">82</span>
          </div>
          
          <div className="flex flex-col gap-4">
            {/* Card 7 */}
            <div className="group bg-surface-container-low p-5 rounded-xl grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer border border-white/5">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-epilogue font-bold text-white/60 leading-tight">Régi Kert Bt.</h4>
                <Contact className="text-white/30" size={20} />
              </div>
              <p className="text-sm text-white/40 mb-6">Papp István</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Összesen</span>
                  <span className="text-sm font-bold text-white/50">85.000 Ft</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/30">
                  <Clock size={12} />
                  <span>2023. dec. 12.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative Blur Elements - Ezeket ide helyezzük, hogy meglegyen a prémium hangulat */}
      <div className="fixed -bottom-24 -right-24 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      <div className="fixed top-1/4 -left-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
    </div>
  );
};

export default CRM;