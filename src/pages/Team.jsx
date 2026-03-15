import { useState } from 'react';
import { Search, ShieldAlert, Check, X, HardHat, Truck, UserPlus, MoreHorizontal } from 'lucide-react';

// Mock adatok
const mockWorkers = [
  { id: 'W1', name: 'Kovács Péter', role: 'Építésvezető', email: 'peter.kovacs@onix.hu', hourlyRate: '4 500 Ft/óra', status: 'Aktív' },
  { id: 'W2', name: 'Nagy Gábor', role: 'Gépkezelő', email: 'gabor.nagy@onix.hu', hourlyRate: '3 800 Ft/óra', status: 'Szabadságon' },
  { id: 'W3', name: 'Tóth Balázs', role: 'Segédmunkás', email: 'balazs.toth@onix.hu', hourlyRate: '2 500 Ft/óra', status: 'Aktív' },
];

const mockMachines = [
  { id: 'M1', name: 'Caterpillar 301.8', type: 'Minikotró', hourlyRate: '12 000 Ft/óra', status: 'Terepen' },
  { id: 'M2', name: 'Bobcat T590', type: 'Kompakt rakodó', hourlyRate: '15 000 Ft/óra', status: 'Szervizben' },
  { id: 'M3', name: 'Ford Transit', type: 'Teherautó', hourlyRate: 'N/A (Napidíj)', status: 'Elérhető' },
];

const mockRequests = [
  { id: 'R1', name: 'Szabó Ilona', role: 'Irodai asszisztens', email: 'szabo.ilona@gmail.com', date: 'Ma, 09:12' },
  { id: 'R2', name: 'Varga Bence', role: 'Segédmunkás', email: 'bence.v99@freemail.hu', date: 'Tegnap, 16:45' },
];

const Team = () => {
  const [activeTab, setActiveTab] = useState('workers'); // 'workers', 'machines', 'requests'
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-col gap-8 max-w-[1400px] mx-auto h-full">
      
      {/* Fejléc */}
      <header className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-white tracking-tight">Csapat & Erőforrások</h1>
          <p className="text-white/60 mt-1">Dolgozók, munkagépek és hozzáférések központi kezelése.</p>
        </div>
        
        <button className="flex items-center gap-2 px-5 py-2.5 bg-cybermint hover:bg-[#00e691] text-obsidian font-semibold rounded-lg transition-colors shadow-[0_0_15px_rgba(0,208,132,0.2)]">
          <UserPlus size={20} /> Új Hozzáadása
        </button>
      </header>

      {/* Navigáció és Kereső sáv */}
      <div className="flex items-center justify-between bg-surface p-2 rounded-xl border border-white/5">
        
        {/* Fülek (Tabs) */}
        <div className="flex items-center gap-1 bg-obsidian p-1 rounded-lg border border-white/5">
          <button 
            onClick={() => setActiveTab('workers')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'workers' ? 'bg-surface text-white shadow-sm' : 'text-white/50 hover:text-white/80'
            }`}
          >
            <HardHat size={16} /> Dolgozók
          </button>
          <button 
            onClick={() => setActiveTab('machines')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'machines' ? 'bg-surface text-white shadow-sm' : 'text-white/50 hover:text-white/80'
            }`}
          >
            <Truck size={16} /> Munkagépek
          </button>
          <button 
            onClick={() => setActiveTab('requests')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
              activeTab === 'requests' ? 'bg-surface text-white shadow-sm' : 'text-white/50 hover:text-white/80'
            }`}
          >
            <ShieldAlert size={16} /> Csatlakozási Kérelmek
            {/* Értesítés pötty */}
            {mockRequests.length > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full"></span>
            )}
          </button>
        </div>

        {/* Kereső */}
        <div className="flex items-center px-3 w-72 bg-obsidian rounded-lg border border-white/5 focus-within:border-white/20 transition-colors">
          <Search size={16} className="text-white/40" />
          <input 
            type="text" 
            placeholder="Keresés..." 
            className="w-full bg-transparent border-none text-white text-sm py-2 px-3 focus:outline-none placeholder:text-white/30"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Tartalmi Rész (Adattáblák és Listák) */}
      <div className="bg-surface rounded-2xl border border-white/5 overflow-hidden flex-1">
        
        {/* DOLGOZÓK TAB */}
        {activeTab === 'workers' && (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-xs font-semibold text-white/40 uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Név & Elérhetőség</th>
                <th className="px-6 py-4 font-medium">Munkakör</th>
                <th className="px-6 py-4 font-medium">Óradíj (Költség)</th>
                <th className="px-6 py-4 font-medium">Státusz</th>
                <th className="px-6 py-4 font-medium text-right">Műveletek</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {mockWorkers.map((worker) => (
                <tr key={worker.id} className="group border-b border-white/5 last:border-0 hover:bg-surface-hover transition-colors duration-200 cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="font-medium text-white text-[15px]">{worker.name}</div>
                    <div className="text-white/40 mt-1 text-xs">{worker.email}</div>
                  </td>
                  <td className="px-6 py-4 text-white/80">{worker.role}</td>
                  <td className="px-6 py-4 text-white/80 font-mono text-xs">{worker.hourlyRate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded text-[11px] font-bold tracking-wide ${
                      worker.status === 'Aktív' ? 'text-cybermint bg-cybermint/10' : 'text-warning bg-warning/10'
                    }`}>
                      {worker.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-white/30 hover:text-white hover:bg-obsidian rounded-lg transition-all opacity-0 group-hover:opacity-100">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* MUNKAGÉPEK TAB */}
        {activeTab === 'machines' && (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-xs font-semibold text-white/40 uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Gép Megnevezése</th>
                <th className="px-6 py-4 font-medium">Típus</th>
                <th className="px-6 py-4 font-medium">Óradíj (Költség)</th>
                <th className="px-6 py-4 font-medium">Státusz</th>
                <th className="px-6 py-4 font-medium text-right">Műveletek</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {mockMachines.map((machine) => (
                <tr key={machine.id} className="group border-b border-white/5 last:border-0 hover:bg-surface-hover transition-colors duration-200 cursor-pointer">
                  <td className="px-6 py-4 font-medium text-white text-[15px]">{machine.name}</td>
                  <td className="px-6 py-4 text-white/80">{machine.type}</td>
                  <td className="px-6 py-4 text-white/80 font-mono text-xs">{machine.hourlyRate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded text-[11px] font-bold tracking-wide ${
                      machine.status === 'Terepen' ? 'text-cyan-400 bg-cyan-500/10' : 
                      machine.status === 'Szervizben' ? 'text-danger bg-danger/10' : 'text-emerald-400 bg-emerald-500/10'
                    }`}>
                      {machine.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-white/30 hover:text-white hover:bg-obsidian rounded-lg transition-all opacity-0 group-hover:opacity-100">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* CSATLAKOZÁSI KÉRELMEK TAB (Specifikáció: Primer Zöld és Szekunder Piros gombok) */}
        {activeTab === 'requests' && (
          <div className="flex flex-col">
            {mockRequests.length === 0 ? (
              <div className="p-8 text-center text-white/40 text-sm">Nincsenek függőben lévő kérelmek.</div>
            ) : (
              mockRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between px-6 py-4 border-b border-white/5 last:border-0 hover:bg-surface-hover transition-colors duration-200">
                  
                  {/* Kérelmező Adatai */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-obsidian border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">
                      {request.name.split(' ')[0][0]}{request.name.split(' ')[1][0]}
                    </div>
                    <div>
                      <div className="font-medium text-white text-[15px]">{request.name}</div>
                      <div className="flex items-center gap-2 text-white/40 mt-1 text-xs">
                        <span>{request.role}</span>
                        <span>•</span>
                        <span>{request.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* Időbélyeg és Akció Gombok */}
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-white/30">{request.date}</span>
                    
                    <div className="flex items-center gap-2">
                      {/* Szekunder Piros (Elutasít) */}
                      <button className="flex items-center gap-1.5 px-3 py-1.5 text-danger bg-danger/10 hover:bg-danger hover:text-white rounded-lg transition-colors text-sm font-medium">
                        <X size={16} /> Elutasít
                      </button>
                      
                      {/* Primer Zöld (Elfogad) */}
                      <button className="flex items-center gap-1.5 px-3 py-1.5 text-obsidian bg-cybermint hover:bg-[#00e691] rounded-lg transition-colors text-sm font-bold shadow-[0_0_10px_rgba(0,208,132,0.15)]">
                        <Check size={16} strokeWidth={3} /> Elfogad
                      </button>
                    </div>
                  </div>
                  
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default Team;