import { GripVertical, User, ChevronLeft, ChevronRight, PlusCircle, Hand } from 'lucide-react';

// Dolgozók (Erőforrások) mock adatai
const mockWorkers = [
  { id: 'w1', name: 'Kovács István', role: 'Építésvezető', seed: 'Istvan', isDragging: false },
  { id: 'w2', name: 'Szabó Elena', role: 'Tájépítész', seed: 'Elena', isDragging: false },
  { id: 'w3', name: 'Nagy Gábor', role: 'Kertész', seed: 'Gabor', isDragging: true }, // Őt "húzzuk" éppen
  { id: 'w4', name: 'Tóth András', role: 'Gépkezelő', seed: 'Andras', isDragging: false },
  { id: 'w5', name: 'Kiss Katalin', role: 'Projektkoordinátor', seed: 'Katalin', isDragging: false },
];

const Calendar = () => {
  return (
    // A magasságot úgy állítjuk be, hogy pontosan kitöltse a képernyőt a fejléc (5rem = 80px) alatt
    <div className="flex flex-col lg:flex-row h-[calc(100vh-5rem)] w-full relative">
      
      {/* Bal Oldalsáv: Erőforrások (Részlegek) */}
      <section className="w-full lg:w-80 bg-surface-container-low flex flex-col border-r border-white/5 z-10">
        <div className="p-8 pb-4">
          <h1 className="text-3xl font-black text-white font-epilogue tracking-tighter mb-2">Erőforrások</h1>
          <p className="text-white/50 text-sm font-medium">Húzd a munkatársakat a naptárba a feladatok kiosztásához.</p>
        </div>
        
        <div className="flex-1 overflow-y-auto px-6 pb-12 space-y-4 no-scrollbar">
          {mockWorkers.map((worker) => (
            worker.isDragging ? (
              // "Húzás alatti" (szimulált) állapot a listában
              <div key={worker.id} className="bg-primary/10 border-2 border-dashed border-primary/40 p-4 rounded-xl scale-95 opacity-50 cursor-grabbing">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <User className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-primary font-bold font-epilogue">{worker.name}</p>
                    <p className="text-primary/60 text-xs font-medium">{worker.role}</p>
                  </div>
                </div>
              </div>
            ) : (
              // Normál állapotú dolgozó kártya
              <div key={worker.id} className="bg-surface-container hover:bg-surface-bright p-4 rounded-xl cursor-grab active:cursor-grabbing transition-all group border-l-4 border-transparent hover:border-primary border border-white/5 hover:border-white/10">
                <div className="flex items-center gap-4">
                  <img 
                    alt="Avatar" 
                    className="w-12 h-12 rounded-lg object-cover bg-surface-container-highest" 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${worker.seed}&backgroundColor=1b2028`} 
                  />
                  <div>
                    <p className="text-white font-bold font-epilogue">{worker.name}</p>
                    <p className="text-white/40 text-xs font-medium">{worker.role}</p>
                  </div>
                  <GripVertical className="ml-auto text-white/20 group-hover:text-primary transition-colors" size={20} />
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Jobb Panel: Naptár Rács */}
      <section className="flex-1 bg-background flex flex-col overflow-y-auto no-scrollbar">
        
        {/* Naptár Fejléc */}
        <div className="p-8 flex items-center justify-between sticky top-0 bg-background/90 backdrop-blur-md z-20">
          <div>
            <h2 className="text-5xl font-black text-white font-epilogue tracking-tighter">Március 2026</h2>
            <p className="text-white/30 font-medium tracking-widest uppercase text-xs mt-2">Havi tervezés és erőforrás menedzsment</p>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-low p-2 rounded-xl border border-white/5">
            <button className="p-2 hover:bg-surface-bright rounded-lg text-white/70 hover:text-white transition-all">
              <ChevronLeft size={20} />
            </button>
            <span className="text-white font-bold px-4 font-epilogue">Ma</span>
            <button className="p-2 hover:bg-surface-bright rounded-lg text-white/70 hover:text-white transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Naptár Rács (Grid) Container */}
        <div className="flex-1 grid grid-cols-7 gap-2 p-8 pt-0 min-w-[800px]">
          
          {/* Napok Feliratai */}
          <div className="text-center pb-4"><span className="text-white/40 text-xs font-black tracking-widest uppercase">Hétfő</span></div>
          <div className="text-center pb-4"><span className="text-white/40 text-xs font-black tracking-widest uppercase">Kedd</span></div>
          <div className="text-center pb-4"><span className="text-white/40 text-xs font-black tracking-widest uppercase">Szerda</span></div>
          <div className="text-center pb-4"><span className="text-white/40 text-xs font-black tracking-widest uppercase">Csütörtök</span></div>
          <div className="text-center pb-4"><span class="text-white/40 text-xs font-black tracking-widest uppercase">Péntek</span></div>
          <div className="text-center pb-4"><span className="text-white/40 text-xs font-black tracking-widest uppercase">Szombat</span></div>
          <div className="text-center pb-4"><span className="text-white/40 text-xs font-black tracking-widest uppercase">Vasárnap</span></div>

          {/* --- 1. Hét --- */}
          <div className="bg-surface-container-low rounded-xl p-4 min-h-[140px] opacity-30"><span className="text-white/40 font-bold text-sm">24</span></div>
          <div className="bg-surface-container-low rounded-xl p-4 min-h-[140px] opacity-30"><span className="text-white/40 font-bold text-sm">25</span></div>
          <div className="bg-surface-container-low rounded-xl p-4 min-h-[140px] opacity-30"><span className="text-white/40 font-bold text-sm">26</span></div>
          <div className="bg-surface-container-low rounded-xl p-4 min-h-[140px] opacity-30"><span className="text-white/40 font-bold text-sm">27</span></div>
          <div className="bg-surface-container-low rounded-xl p-4 min-h-[140px] opacity-30"><span className="text-white/40 font-bold text-sm">28</span></div>
          <div className="bg-surface-container rounded-xl p-4 min-h-[140px] border border-white/5"><span className="text-white/60 font-bold text-sm">1</span></div>
          <div className="bg-surface-container rounded-xl p-4 min-h-[140px] border border-white/5"><span className="text-white/60 font-bold text-sm">2</span></div>

          {/* --- 2. Hét --- */}
          <div className="bg-surface-container rounded-xl p-4 min-h-[140px] border border-white/5 relative">
            <span className="text-white font-bold text-sm">3</span>
            <div className="mt-3 space-y-2">
              <div className="bg-cyan-500/10 text-cyan-400 text-[10px] font-bold py-1.5 px-3 rounded-lg flex items-center gap-2 border border-cyan-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Terasz - Kiss K.
              </div>
            </div>
          </div>
          
          {/* Interaktív Drop Zone (Ide húzzuk a kártyát) */}
          <div className="bg-surface rounded-xl p-4 min-h-[140px] ring-2 ring-primary ring-offset-4 ring-offset-background relative bg-gradient-to-br from-primary/5 to-transparent shadow-[0_0_40px_-10px_rgba(0,208,132,0.3)]">
            <span className="text-primary font-black text-sm">4</span>
            <div className="mt-3 flex flex-col items-center justify-center h-2/3 border-2 border-dashed border-primary/30 rounded-lg bg-primary/5">
              <PlusCircle className="text-primary opacity-50" size={32} />
              <p className="text-[10px] text-primary/70 font-bold mt-2 uppercase tracking-tighter">Ide Húzd</p>
            </div>
          </div>
          
          <div className="bg-surface-container rounded-xl p-4 min-h-[140px] border border-white/5"><span className="text-white font-bold text-sm">5</span></div>
          <div className="bg-surface-container rounded-xl p-4 min-h-[140px] border border-white/5">
            <span className="text-white font-bold text-sm">6</span>
            <div className="mt-3 space-y-2">
              <div className="bg-primary/10 text-primary text-[10px] font-bold py-1.5 px-3 rounded-lg flex items-center gap-2 border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Burkolás - Nagy G.
              </div>
            </div>
          </div>
          <div className="bg-surface-container rounded-xl p-4 min-h-[140px] border border-white/5"><span className="text-white font-bold text-sm">7</span></div>
          <div className="bg-surface-container rounded-xl p-4 min-h-[140px] border border-white/5"><span className="text-white font-bold text-sm">8</span></div>
          <div className="bg-surface-container rounded-xl p-4 min-h-[140px] border border-white/5"><span className="text-white font-bold text-sm">9</span></div>

          {/* --- 3. Hét --- */}
          <div className="bg-surface-container rounded-xl p-4 min-h-[140px] border border-white/5"><span className="text-white font-bold text-sm">10</span></div>
          <div className="bg-surface-container rounded-xl p-4 min-h-[140px] border border-white/5"><span className="text-white font-bold text-sm">11</span></div>
          <div className="bg-surface-bright rounded-xl p-4 min-h-[140px] ring-1 ring-white/10 shadow-lg">
            <span className="text-white font-bold text-sm">12</span>
            <div className="mt-3 space-y-2">
              <div className="bg-orange-500/10 text-orange-400 text-[10px] font-bold py-1.5 px-3 rounded-lg flex items-center gap-2 border border-orange-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                Öntözőrendszer
              </div>
              <div className="bg-purple-500/10 text-purple-400 text-[10px] font-bold py-1.5 px-3 rounded-lg flex items-center gap-2 border border-purple-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Anyagszállítás
              </div>
            </div>
          </div>
          <div className="bg-surface-container rounded-xl p-4 min-h-[140px] border border-white/5"><span className="text-white font-bold text-sm">13</span></div>
          <div className="bg-surface-container rounded-xl p-4 min-h-[140px] border border-white/5"><span className="text-white font-bold text-sm">14</span></div>
          <div className="bg-surface-container rounded-xl p-4 min-h-[140px] border border-white/5"><span className="text-white font-bold text-sm">15</span></div>
          <div className="bg-surface-container rounded-xl p-4 min-h-[140px] border border-white/5"><span className="text-white font-bold text-sm">16</span></div>

          {/* --- 4-5. Hét (Üres hátterek a rács kitöltéséhez) --- */}
          {[17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map(day => (
            <div key={day} className="bg-surface-container rounded-xl p-4 min-h-[140px] border border-white/5">
              <span className="text-white/80 font-bold text-sm">{day}</span>
            </div>
          ))}

        </div>
      </section>

      {/* Lebegő, húzott kártya szimulációja (Visual Effect) */}
      <div className="fixed top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 transform rotate-3 hidden lg:block">
        <div className="bg-surface-bright/80 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-primary/50 flex items-center gap-4 w-64 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <img 
            alt="Avatar" 
            className="w-10 h-10 rounded-lg object-cover bg-surface-container" 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gabor&backgroundColor=1b2028" 
          />
          <div>
            <p className="text-white font-bold text-sm font-epilogue">Nagy Gábor</p>
            <p className="text-primary text-[10px] font-black uppercase">Hozzárendelés...</p>
          </div>
          <Hand className="ml-auto text-primary" size={20} />
        </div>
      </div>

    </div>
  );
};

export default Calendar;