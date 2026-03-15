import { Plus, UserPlus, FileDown, Bell, Clock } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-12 max-w-7xl mx-auto">
      
      {/* 1. Quick Actions Sáv [cite: 35] */}
      <section className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold text-white tracking-tight">Jó reggelt!</h2>
          <p className="text-white/60 mt-1">Itt az áttekintés a mai napról.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface hover:bg-surface-hover text-white/80 rounded-lg transition-colors border border-white/5">
            <Bell size={18} /> Push Értesítés
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface hover:bg-surface-hover text-white/80 rounded-lg transition-colors border border-white/5">
            <FileDown size={18} /> Számla Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface hover:bg-surface-hover text-white/80 rounded-lg transition-colors border border-white/5">
            <UserPlus size={18} /> Új Ügyfél
          </button>
          <button className="flex items-center gap-2 px-5 py-2 bg-cybermint hover:bg-[#00e691] text-obsidian font-semibold rounded-lg transition-colors shadow-[0_0_15px_rgba(0,208,132,0.2)]">
            <Plus size={20} /> Új Projekt
          </button>
        </div>
      </section>

      {/* 2. Active Projects Sáv (Középső) [cite: 36] */}
      <section className="flex flex-col gap-4">
        <h3 className="font-display text-xl font-bold text-white">Aktív Projektek</h3>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
          {/* Projekt Kártya Példa */}
          <div className="min-w-[340px] bg-surface p-6 rounded-2xl snap-start border border-white/5 hover:bg-surface-hover transition-colors cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="font-medium text-lg text-white">Kiss Család Terasz</h4>
                <p className="text-sm text-white/40 mt-1">1124 Budapest, Fodor utca 12.</p>
              </div>
              <div className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs font-semibold tracking-wide">
                FOLYAMATBAN {/* Cián chip [cite: 116] */}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Készültség</span>
                <span className="text-white">65%</span>
              </div>
              {/* Progress Bar 6px vastag [cite: 115] */}
              <div className="h-[6px] w-full bg-obsidian rounded-full overflow-hidden">
                <div className="h-full bg-cybermint w-[65%] rounded-full" />
              </div>
            </div>
          </div>
          
           {/* További kártya példa */}
           <div className="min-w-[340px] bg-surface p-6 rounded-2xl snap-start border border-white/5 hover:bg-surface-hover transition-colors cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="font-medium text-lg text-white">Nagy Kertépítés</h4>
                <p className="text-sm text-white/40 mt-1">2040 Budaörs, Károly király út</p>
              </div>
              <div className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded text-xs font-semibold tracking-wide">
                VÁRAKOZIK {/* Narancs chip [cite: 116] */}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Készültség</span>
                <span className="text-white">30%</span>
              </div>
              <div className="h-[6px] w-full bg-obsidian rounded-full overflow-hidden">
                <div className="h-full bg-warning w-[30%] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Today's Tasks Sáv (Alsó) [cite: 37] */}
      <section className="flex flex-col gap-4">
        <h3 className="font-display text-xl font-bold text-white">Mai Teendők</h3>
        <div className="bg-surface rounded-2xl p-2 border border-white/5">
          {/* Vonalmentes ("Lose the lines") lista [cite: 37, 66] */}
          <div className="flex items-center gap-6 p-4 hover:bg-surface-hover rounded-xl transition-colors cursor-pointer group">
            <div className="flex items-center gap-2 text-white/50 group-hover:text-white/80 w-24">
              <Clock size={16} /> <span className="text-sm">08:00</span>
            </div>
            <div className="flex-1 font-medium text-white/90">
              Anyagbeszerzés és helyszíni felmérés
            </div>
            <div className="flex-1 text-sm text-white/50">
              Kiss Család Terasz
            </div>
            <div className="flex gap-2">
              {/* Résztvevők chipekben [cite: 37] */}
              <span className="px-3 py-1 bg-obsidian text-white/70 text-xs rounded-full border border-white/5">Kovács P.</span>
              <span className="px-3 py-1 bg-obsidian text-white/70 text-xs rounded-full border border-white/5">Nagy G.</span>
            </div>
          </div>

          <div className="flex items-center gap-6 p-4 hover:bg-surface-hover rounded-xl transition-colors cursor-pointer group">
            <div className="flex items-center gap-2 text-white/50 group-hover:text-white/80 w-24">
              <Clock size={16} /> <span className="text-sm">11:30</span>
            </div>
            <div className="flex-1 font-medium text-white/90">
              Földmunkagép kiszállítása
            </div>
            <div className="flex-1 text-sm text-white/50">
              Nagy Kertépítés
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-obsidian text-white/70 text-xs rounded-full border border-white/5">Tóth B.</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;