import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, GripVertical, MapPin, HardHat, Truck } from 'lucide-react';

// Mock adatok a kezdeti állapothoz
const initialUnassigned = [
  { id: 't1', title: 'Földmunkagép kiszállítása', type: 'machine', icon: Truck, color: 'text-warning bg-warning/10' },
  { id: 't2', title: 'Helyszíni felmérés (Kiss Család)', type: 'task', icon: MapPin, color: 'text-cyan-400 bg-cyan-500/10' },
  { id: 't3', title: 'Nagy G. (Szabadságról visszatér)', type: 'person', icon: HardHat, color: 'text-purple-400 bg-purple-500/10' },
];

const initialDays = {
  'Hétfő': [{ id: 't4', title: 'Alapozás - Nagy Kertépítés', type: 'task', icon: MapPin, color: 'text-emerald-400 bg-emerald-500/10' }],
  'Kedd': [],
  'Szerda': [],
  'Csütörtök': [],
  'Péntek': [],
};

const Calendar = () => {
  const [unassigned, setUnassigned] = useState(initialUnassigned);
  const [scheduled, setScheduled] = useState(initialDays);
  const [draggedItem, setDraggedItem] = useState(null);

  // Drag & Drop Logika
  const handleDragStart = (item, sourceDay = null) => {
    setDraggedItem({ ...item, sourceDay });
  };

  const handleDrop = (e, targetDay) => {
    e.preventDefault();
    if (!draggedItem) return;

    // Ha ugyanoda húzzuk, nem csinálunk semmit
    if (draggedItem.sourceDay === targetDay) return;

    const itemToMove = { id: draggedItem.id, title: draggedItem.title, type: draggedItem.type, icon: draggedItem.icon, color: draggedItem.color };

    // Eltávolítás a forrás helyről
    if (draggedItem.sourceDay === null) {
      setUnassigned(prev => prev.filter(i => i.id !== itemToMove.id));
    } else {
      setScheduled(prev => ({
        ...prev,
        [draggedItem.sourceDay]: prev[draggedItem.sourceDay].filter(i => i.id !== itemToMove.id)
      }));
    }

    // Hozzáadás a cél helyhez
    if (targetDay === null) {
      setUnassigned(prev => [...prev, itemToMove]);
    } else {
      setScheduled(prev => ({
        ...prev,
        [targetDay]: [...prev[targetDay], itemToMove]
      }));
    }
    setDraggedItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Engedélyezi a drop-ot
  };

  return (
    <div className="flex flex-col gap-8 max-w-[1600px] mx-auto h-full">
      
      {/* Fejléc */}
      <header className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-white tracking-tight">Naptár & Erőforrások</h1>
          <p className="text-white/60 mt-1">Heti beosztás és drag-and-drop kapacitástervezés.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-surface p-1 rounded-lg border border-white/5">
            <button className="p-2 text-white/60 hover:text-white hover:bg-surface-hover rounded-md transition-colors">
              <ChevronLeft size={20} />
            </button>
            <span className="font-medium text-white px-2">2026. Ápr. 13 - 19.</span>
            <button className="p-2 text-white/60 hover:text-white hover:bg-surface-hover rounded-md transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-cybermint hover:bg-[#00e691] text-obsidian font-semibold rounded-lg transition-colors shadow-[0_0_15px_rgba(0,208,132,0.2)]">
            <Plus size={20} /> Új Bejegyzés
          </button>
        </div>
      </header>

      {/* Fő tartalom: 2 oszlopos elrendezés */}
      <div className="flex gap-6 flex-1 min-h-0">
        
        {/* Bal Sáv: Kiosztatlan Erőforrások */}
        <aside 
          className="w-80 flex flex-col gap-4 bg-surface rounded-2xl border border-white/5 p-4"
          onDrop={(e) => handleDrop(e, null)}
          onDragOver={handleDragOver}
        >
          <h2 className="font-display text-lg font-bold text-white mb-2">Kiosztatlan Elemek</h2>
          <div className="flex-1 overflow-y-auto space-y-3 pr-2">
            {unassigned.length === 0 && (
              <p className="text-white/30 text-sm text-center py-8">Minden erőforrás kiosztva.</p>
            )}
            {unassigned.map(item => (
              <div 
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(item, null)}
                className="group flex items-center gap-3 p-3 bg-obsidian rounded-xl border border-white/5 hover:border-white/20 hover:bg-surface-hover transition-all cursor-grab active:cursor-grabbing"
              >
                <div className="text-white/20 group-hover:text-white/40">
                  <GripVertical size={16} />
                </div>
                <div className={`p-2 rounded-lg ${item.color}`}>
                  <item.icon size={16} />
                </div>
                <span className="text-sm font-medium text-white/90 truncate">{item.title}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* Jobb Sáv: Heti Naptár Grid ("Lose the lines" megközelítés) */}
        <div className="flex-1 grid grid-cols-5 gap-4">
          {Object.entries(scheduled).map(([day, items]) => (
            <div 
              key={day} 
              className="flex flex-col gap-4"
              onDrop={(e) => handleDrop(e, day)}
              onDragOver={handleDragOver}
            >
              {/* Nap fejléce */}
              <div className="bg-surface rounded-xl p-3 border border-white/5 text-center">
                <h3 className="font-medium text-white">{day}</h3>
                <p className="text-xs text-white/40 mt-1">Ápr. {day === 'Hétfő' ? '13' : day === 'Kedd' ? '14' : day === 'Szerda' ? '15' : day === 'Csütörtök' ? '16' : '17'}.</p>
              </div>

              {/* Nap tartalma (Drop Zone) */}
              <div className="flex-1 bg-surface/30 rounded-xl border border-white/[0.02] p-2 space-y-3 transition-colors hover:bg-surface/50">
                {items.length === 0 && (
                  <div className="h-full w-full flex items-center justify-center">
                    <span className="text-white/10 text-sm font-medium">Üres</span>
                  </div>
                )}
                {items.map(item => (
                  <div 
                    key={item.id}
                    draggable
                    onDragStart={() => handleDragStart(item, day)}
                    className="group flex flex-col gap-2 p-3 bg-surface rounded-xl border border-white/5 hover:border-white/20 transition-all cursor-grab active:cursor-grabbing shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className={`p-1.5 rounded-md ${item.color}`}>
                        <item.icon size={14} />
                      </div>
                      <div className="text-white/20 group-hover:text-white/40">
                        <GripVertical size={14} />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-white/90 leading-tight">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Calendar;