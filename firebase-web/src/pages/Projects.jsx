import { useState } from 'react';
import { Search, Filter, Plus, MoreHorizontal, MapPin, Calendar as CalendarIcon } from 'lucide-react';

// Mock adatok a táblázathoz
const mockProjects = [
  {
    id: 'PRJ-001',
    name: 'Kiss Család Terasz',
    address: '1124 Budapest, Fodor utca 12.',
    status: 'FOLYAMATBAN',
    statusColor: 'text-cyan-400 bg-cyan-500/10',
    progress: 65,
    progressColor: 'bg-cybermint',
    deadline: '2026. Ápr. 15.',
    manager: 'Kovács P.',
  },
  {
    id: 'PRJ-002',
    name: 'Nagy Kertépítés',
    address: '2040 Budaörs, Károly király út 45.',
    status: 'VÁRAKOZIK',
    statusColor: 'text-warning bg-warning/10',
    progress: 30,
    progressColor: 'bg-warning',
    deadline: '2026. Máj. 02.',
    manager: 'Tóth B.',
  },
  {
    id: 'PRJ-003',
    name: 'Szabó Iroda Parkosítás',
    address: '1138 Budapest, Váci út 110.',
    status: 'TERVEZÉS ALATT',
    statusColor: 'text-purple-400 bg-purple-500/10',
    progress: 10,
    progressColor: 'bg-purple-500',
    deadline: '2026. Jún. 10.',
    manager: 'Nagy G.',
  },
  {
    id: 'PRJ-004',
    name: 'Varga Medence Kialakítás',
    address: '2000 Szentendre, Duna korzó 5.',
    status: 'KÉSZ',
    statusColor: 'text-emerald-400 bg-emerald-500/10',
    progress: 100,
    progressColor: 'bg-emerald-500',
    deadline: '2026. Már. 10.',
    manager: 'Kovács P.',
  }
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-col gap-8 max-w-[1400px] mx-auto h-full">
      
      {/* Fejléc és Fő Akciók */}
      <header className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-white tracking-tight">Projektek</h1>
          <p className="text-white/60 mt-1">Összes aktív és lezárt kivitelezés áttekintése.</p>
        </div>
        
        <button className="flex items-center gap-2 px-5 py-2.5 bg-cybermint hover:bg-[#00e691] text-obsidian font-semibold rounded-lg transition-colors shadow-[0_0_15px_rgba(0,208,132,0.2)]">
          <Plus size={20} /> Új Projekt
        </button>
      </header>

      {/* Eszköztár (Toolbar) - Keresés és Szűrés */}
      <div className="flex items-center justify-between bg-surface p-2 rounded-xl border border-white/5">
        <div className="flex items-center px-3 w-80 bg-obsidian rounded-lg border border-white/5 focus-within:border-white/20 transition-colors">
          <Search size={18} className="text-white/40" />
          <input 
            type="text" 
            placeholder="Keresés projekt vagy cím alapján..." 
            className="w-full bg-transparent border-none text-white text-sm py-2.5 px-3 focus:outline-none placeholder:text-white/30"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-surface-hover rounded-lg transition-colors">
          <Filter size={16} /> Haladó Szűrők
        </button>
      </div>

      {/* Adattábla (Data Table) */}
      <div className="bg-surface rounded-2xl border border-white/5 overflow-hidden flex-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
            {/* Táblázat Fejléc */}
            <thead>
              <tr className="border-b border-white/5 text-xs font-semibold text-white/40 uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Projekt Neve & Címe</th>
                <th className="px-6 py-4 font-medium">Állapot</th>
                <th className="px-6 py-4 font-medium">Készültség</th>
                <th className="px-6 py-4 font-medium">Határidő</th>
                <th className="px-6 py-4 font-medium">Felelős</th>
                <th className="px-6 py-4 font-medium text-right">Műveletek</th>
              </tr>
            </thead>
            
            {/* Táblázat Törzs - "Lose the lines" koncepció */}
            <tbody className="text-sm">
              {mockProjects.map((project) => (
                <tr 
                  key={project.id} 
                  className="group border-b border-white/5 last:border-0 hover:bg-surface-hover transition-colors duration-200 cursor-pointer"
                >
                  {/* Projekt info oszlop */}
                  <td className="px-6 py-4">
                    <div className="font-medium text-white text-[15px]">{project.name}</div>
                    <div className="flex items-center gap-1.5 text-white/40 mt-1 text-xs">
                      <MapPin size={12} /> {project.address}
                    </div>
                  </td>
                  
                  {/* Állapot chip oszlop */}
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded text-[11px] font-bold tracking-wide ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </td>
                  
                  {/* Progress Bar oszlop (6px vastagság a spec alapján) */}
                  <td className="px-6 py-4 w-48">
                    <div className="flex items-center gap-3">
                      <div className="h-[6px] w-full bg-obsidian rounded-full overflow-hidden border border-white/5">
                        <div 
                          className={`h-full rounded-full ${project.progressColor}`} 
                          style={{ width: `${project.progress}%` }} 
                        />
                      </div>
                      <span className="text-white/60 text-xs font-medium w-8">{project.progress}%</span>
                    </div>
                  </td>

                  {/* Határidő oszlop */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-white/70">
                      <CalendarIcon size={14} className="text-white/40" />
                      {project.deadline}
                    </div>
                  </td>

                  {/* Felelős oszlop */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald flex items-center justify-center text-[10px] font-bold text-white border border-white/10">
                        {project.manager.split(' ')[0][0]}{project.manager.split(' ')[1][0]}
                      </div>
                      <span className="text-white/80">{project.manager}</span>
                    </div>
                  </td>

                  {/* Műveletek (Actions) oszlop */}
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-white/30 hover:text-white hover:bg-obsidian rounded-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Empty State (ha a keresés nem hoz eredményt) */}
          {mockProjects.length === 0 && (
             <div className="flex flex-col items-center justify-center py-20 text-center">
               <div className="w-16 h-16 bg-obsidian rounded-full flex items-center justify-center mb-4 border border-white/5">
                 <Search size={24} className="text-white/20" />
               </div>
               <h3 className="text-white font-medium text-lg">Nincs találat</h3>
               <p className="text-white/40 text-sm mt-1">Próbálkozz más keresési feltétellel.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;