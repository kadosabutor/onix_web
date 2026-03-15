import { useState } from 'react';
import { Search, Plus, Phone, Mail, MapPin, Building2, ExternalLink, CreditCard, Clock } from 'lucide-react';

// Mock adatok az ügyfelekhez és projektjeikhez
const mockClients = [
  {
    id: 'C1',
    companyName: 'Kiss és Társa Kft.',
    contactPerson: 'Kiss Károly',
    email: 'karoly.kiss@kisstarsa.hu',
    phone: '+36 30 123 4567',
    address: '1124 Budapest, Fodor utca 12.',
    totalSpent: '12 450 000 Ft',
    status: 'Kiemelt',
    projects: [
      { id: 'P1', name: 'Kiss Család Terasz', date: '2025. Ősz', status: 'Kész', price: '4 200 000 Ft', payment: 'Fizetve' },
      { id: 'P2', name: 'Irodaház Parkosítás', date: '2026. Tavasz', status: 'Folyamatban', price: '8 250 000 Ft', payment: 'Részszámla' }
    ]
  },
  {
    id: 'C2',
    companyName: 'Nagy Invest Zrt.',
    contactPerson: 'Nagy Gábor',
    email: 'gabor.nagy@nagyinvest.hu',
    phone: '+36 20 987 6543',
    address: '2040 Budaörs, Károly király út 45.',
    totalSpent: '34 200 000 Ft',
    status: 'Aktív',
    projects: [
      { id: 'P3', name: 'Nagy Kertépítés', date: '2026. Nyár', status: 'Várakozik', price: '34 200 000 Ft', payment: 'Függőben' }
    ]
  },
  {
    id: 'C3',
    companyName: 'Szabó Magánszemély',
    contactPerson: 'Szabó Ilona',
    email: 'szabo.ilona@gmail.com',
    phone: '+36 70 555 1234',
    address: '1138 Budapest, Váci út 110.',
    totalSpent: '1 150 000 Ft',
    status: 'Inaktív',
    projects: [
      { id: 'P4', name: 'Terasz burkolás', date: '2024. Tavasz', status: 'Kész', price: '1 150 000 Ft', payment: 'Fizetve' }
    ]
  }
];

const CRM = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState(mockClients[0]);

  // Keresés szűrése
  const filteredClients = mockClients.filter(client => 
    client.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contactPerson.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8 max-w-[1600px] mx-auto h-full">
      
      {/* Fejléc */}
      <header className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-white tracking-tight">Ügyfelek (CRM)</h1>
          <p className="text-white/60 mt-1">Megrendelők adatai, kapcsolattartók és projekt-előzmények.</p>
        </div>
        
        <button className="flex items-center gap-2 px-5 py-2.5 bg-cybermint hover:bg-[#00e691] text-obsidian font-semibold rounded-lg transition-colors shadow-[0_0_15px_rgba(0,208,132,0.2)]">
          <Plus size={20} /> Új Ügyfél
        </button>
      </header>

      {/* Kétoszlopos Fő Tartalom */}
      <div className="flex gap-6 flex-1 min-h-0">
        
        {/* Bal Oszlop: Ügyfelek Listája */}
        <aside className="w-[400px] flex flex-col gap-4 bg-surface rounded-2xl border border-white/5 p-4 flex-shrink-0">
          
          {/* Keresőmező */}
          <div className="flex items-center px-3 w-full bg-obsidian rounded-lg border border-white/5 focus-within:border-white/20 transition-colors">
            <Search size={18} className="text-white/40" />
            <input 
              type="text" 
              placeholder="Keresés név vagy cég alapján..." 
              className="w-full bg-transparent border-none text-white text-sm py-2.5 px-3 focus:outline-none placeholder:text-white/30"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Lista */}
          <div className="flex-1 overflow-y-auto pr-2 space-y-1">
            {filteredClients.map((client) => (
              <div 
                key={client.id}
                onClick={() => setSelectedClient(client)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                  selectedClient.id === client.id 
                    ? 'bg-obsidian border-white/10 shadow-md' 
                    : 'bg-transparent border-transparent hover:bg-surface-hover hover:border-white/5'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-white text-[15px] truncate pr-2">{client.companyName}</h3>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide flex-shrink-0 ${
                    client.status === 'Kiemelt' ? 'text-purple-400 bg-purple-500/10' :
                    client.status === 'Aktív' ? 'text-cybermint bg-cybermint/10' : 'text-white/40 bg-white/5'
                  }`}>
                    {client.status.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <span className="truncate">{client.contactPerson}</span>
                </div>
              </div>
            ))}
            {filteredClients.length === 0 && (
              <div className="text-center py-8 text-white/40 text-sm">Nincs találat a keresésre.</div>
            )}
          </div>
        </aside>

        {/* Jobb Oszlop: Kiválasztott Ügyfél Adatlapja */}
        <main className="flex-1 flex flex-col bg-surface rounded-2xl border border-white/5 overflow-hidden">
          {selectedClient ? (
            <div className="flex flex-col h-full overflow-y-auto">
              
              {/* Adatlap Fejléc */}
              <div className="p-8 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-obsidian border border-white/10 flex items-center justify-center text-white/20">
                      <Building2 size={32} />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-white tracking-tight">{selectedClient.companyName}</h2>
                      <div className="flex items-center gap-3 mt-2 text-sm">
                        <span className="text-white/40">Kapcsolattartó:</span>
                        <span className="text-white/80 font-medium">{selectedClient.contactPerson}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/40 text-sm mb-1">Összes Költés</div>
                    <div className="font-display text-2xl font-bold text-cybermint">{selectedClient.totalSpent}</div>
                  </div>
                </div>

                {/* Gyors elérhetőségek */}
                <div className="flex gap-6 mt-8">
                  <div className="flex items-center gap-2 text-sm text-white/60 bg-obsidian px-4 py-2 rounded-lg border border-white/5">
                    <Phone size={16} className="text-white/40" /> {selectedClient.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60 bg-obsidian px-4 py-2 rounded-lg border border-white/5">
                    <Mail size={16} className="text-white/40" /> {selectedClient.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/60 bg-obsidian px-4 py-2 rounded-lg border border-white/5">
                    <MapPin size={16} className="text-white/40" /> {selectedClient.address}
                  </div>
                </div>
              </div>

              {/* Projekt Előzmények */}
              <div className="p-8 flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-lg font-bold text-white">Projekt Előzmények</h3>
                  <button className="text-sm font-medium text-cybermint hover:text-[#00e691] transition-colors">
                    Összes megtekintése
                  </button>
                </div>

                {/* Vonalmentes lista "Zebra-csíkozással" */}
                <div className="bg-obsidian rounded-xl border border-white/5 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-xs font-semibold text-white/40 uppercase tracking-wider bg-white/[0.02]">
                        <th className="px-6 py-4 font-medium">Projekt Neve</th>
                        <th className="px-6 py-4 font-medium">Időszak</th>
                        <th className="px-6 py-4 font-medium">Költségvetés</th>
                        <th className="px-6 py-4 font-medium">Fizetés</th>
                        <th className="px-6 py-4 font-medium">Státusz</th>
                        <th className="px-6 py-4 font-medium text-right"></th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {selectedClient.projects.map((project, index) => (
                        <tr 
                          key={project.id} 
                          className={`group hover:bg-surface-hover transition-colors duration-200 cursor-pointer ${
                            index % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'
                          }`}
                        >
                          <td className="px-6 py-4 font-medium text-white text-[15px]">{project.name}</td>
                          <td className="px-6 py-4 text-white/60 flex items-center gap-2">
                            <Clock size={14} className="text-white/30" /> {project.date}
                          </td>
                          <td className="px-6 py-4 text-white/80 font-mono text-xs">{project.price}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <CreditCard size={14} className={project.payment === 'Fizetve' ? 'text-cybermint' : 'text-warning'} />
                              <span className={project.payment === 'Fizetve' ? 'text-white/80' : 'text-warning'}>
                                {project.payment}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded text-[11px] font-bold tracking-wide ${
                              project.status === 'Kész' ? 'text-emerald-400 bg-emerald-500/10' : 
                              project.status === 'Folyamatban' ? 'text-cyan-400 bg-cyan-500/10' : 'text-warning bg-warning/10'
                            }`}>
                              {project.status.toUpperCase()}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-white/30 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                              <ExternalLink size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-obsidian border border-white/5 flex items-center justify-center text-white/20 mb-4">
                <Building2 size={24} />
              </div>
              <h3 className="text-white font-medium text-lg">Nincs ügyfél kiválasztva</h3>
              <p className="text-white/40 text-sm mt-1">Válassz egy ügyfelet a bal oldali listából a részletek megtekintéséhez.</p>
            </div>
          )}
        </main>

      </div>
    </div>
  );
};

export default CRM;