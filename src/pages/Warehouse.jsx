import { useState } from 'react';
import { Search, Filter, Plus, Package, AlertTriangle, ArrowDownToLine, MoreHorizontal, CheckCircle2, XCircle } from 'lucide-react';

// Mock adatok a raktárkészlethez
const mockInventory = [
  {
    id: 'MAT-001',
    name: 'Kerti murva 10-20mm',
    category: 'Ömlesztett anyag',
    sku: 'BULK-M-1020',
    stock: 120,
    unit: 'tonna',
    price: '8 500 Ft',
    status: 'Készleten'
  },
  {
    id: 'MAT-002',
    name: 'Smaragdtuja (Thuja occidentalis) 120cm',
    category: 'Növényzet',
    sku: 'PLNT-SM-120',
    stock: 15,
    unit: 'db',
    price: '6 500 Ft',
    status: 'Kritikus'
  },
  {
    id: 'MAT-003',
    name: 'Barabás Téglakő (Antik sárga)',
    category: 'Burkolat',
    sku: 'PAV-BRB-ANT',
    stock: 0,
    unit: 'raklap',
    price: '72 000 Ft',
    status: 'Kifogyott'
  },
  {
    id: 'MAT-004',
    name: 'KPE cső 32mm (Öntözőrendszer)',
    category: 'Szerelvény',
    sku: 'PIPE-KPE-32',
    stock: 450,
    unit: 'méter',
    price: '320 Ft',
    status: 'Készleten'
  },
  {
    id: 'MAT-005',
    name: 'Geotextília 150g/m2',
    category: 'Szigetelés / Fólia',
    sku: 'GEO-150-M',
    stock: 25,
    unit: 'tekercs',
    price: '18 500 Ft',
    status: 'Készleten'
  }
];

const Warehouse = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Keresés szűrése
  const filteredInventory = mockInventory.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8 max-w-[1400px] mx-auto h-full">
      
      {/* Fejléc és Statisztikák */}
      <header className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-white tracking-tight">Raktár Katalógus</h1>
          <p className="text-white/60 mt-1">Anyagok, növények és eszközök készletnyilvántartása.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface hover:bg-surface-hover text-white/80 rounded-lg transition-colors border border-white/5">
            <ArrowDownToLine size={18} /> Készlet Export
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-cybermint hover:bg-[#00e691] text-obsidian font-semibold rounded-lg transition-colors shadow-[0_0_15px_rgba(0,208,132,0.2)]">
            <Plus size={20} /> Új Termék
          </button>
        </div>
      </header>

      {/* Eszköztár (Kereső és Szűrők) */}
      <div className="flex items-center justify-between bg-surface p-2 rounded-xl border border-white/5">
        <div className="flex items-center px-3 w-96 bg-obsidian rounded-lg border border-white/5 focus-within:border-white/20 transition-colors">
          <Search size={18} className="text-white/40" />
          <input 
            type="text" 
            placeholder="Keresés név, cikkszám vagy kategória alapján..." 
            className="w-full bg-transparent border-none text-white text-sm py-2.5 px-3 focus:outline-none placeholder:text-white/30"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-surface-hover rounded-lg transition-colors">
            <Package size={16} /> Kategóriák
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-surface-hover rounded-lg transition-colors border-l border-white/5 pl-6 ml-2">
            <Filter size={16} /> Szűrők
          </button>
        </div>
      </div>

      {/* Adattábla */}
      <div className="bg-surface rounded-2xl border border-white/5 overflow-hidden flex-1">
        <div className="overflow-x-auto h-full">
          <table className="w-full text-left border-collapse relative">
            
            {/* Táblázat Fejléc (Sticky, hogy görgetésnél felül maradjon) */}
            <thead className="sticky top-0 bg-surface z-10">
              <tr className="border-b border-white/5 text-xs font-semibold text-white/40 uppercase tracking-wider shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]">
                <th className="px-6 py-4 font-medium">Termék Megnevezése</th>
                <th className="px-6 py-4 font-medium">Cikkszám & Kategória</th>
                <th className="px-6 py-4 font-medium">Készlet Info</th>
                <th className="px-6 py-4 font-medium">Nettó Egységár</th>
                <th className="px-6 py-4 font-medium">Státusz</th>
                <th className="px-6 py-4 font-medium text-right">Műveletek</th>
              </tr>
            </thead>
            
            {/* Táblázat Törzs */}
            <tbody className="text-sm">
              {filteredInventory.map((item) => (
                <tr 
                  key={item.id} 
                  className="group border-b border-white/5 last:border-0 hover:bg-surface-hover transition-colors duration-200 cursor-pointer"
                >
                  {/* Termék oszlop */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-obsidian border border-white/5 flex items-center justify-center text-white/20">
                        <Package size={18} />
                      </div>
                      <div className="font-medium text-white text-[15px]">{item.name}</div>
                    </div>
                  </td>
                  
                  {/* Cikkszám és Kategória */}
                  <td className="px-6 py-4">
                    <div className="text-white/80 font-mono text-xs mb-1">{item.sku}</div>
                    <div className="text-white/40 text-xs">{item.category}</div>
                  </td>
                  
                  {/* Készlet */}
                  <td className="px-6 py-4">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-lg font-bold ${
                        item.stock === 0 ? 'text-danger' : 
                        item.stock <= 20 ? 'text-warning' : 'text-white'
                      }`}>
                        {item.stock}
                      </span>
                      <span className="text-white/40 text-xs">{item.unit}</span>
                    </div>
                  </td>

                  {/* Egységár */}
                  <td className="px-6 py-4 text-white/80 font-mono text-sm">
                    {item.price} <span className="text-white/30 text-xs font-sans">/ {item.unit}</span>
                  </td>

                  {/* Státusz Chip */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      {item.status === 'Készleten' && <CheckCircle2 size={14} className="text-cybermint" />}
                      {item.status === 'Kritikus' && <AlertTriangle size={14} className="text-warning" />}
                      {item.status === 'Kifogyott' && <XCircle size={14} className="text-danger" />}
                      
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wide ${
                        item.status === 'Készleten' ? 'text-cybermint bg-cybermint/10' : 
                        item.status === 'Kritikus' ? 'text-warning bg-warning/10' : 'text-danger bg-danger/10'
                      }`}>
                        {item.status.toUpperCase()}
                      </span>
                    </div>
                  </td>

                  {/* Műveletek */}
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-white/30 hover:text-white hover:bg-obsidian rounded-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Empty State */}
          {filteredInventory.length === 0 && (
             <div className="flex flex-col items-center justify-center py-20 text-center">
               <div className="w-16 h-16 bg-obsidian rounded-full flex items-center justify-center mb-4 border border-white/5">
                 <Search size={24} className="text-white/20" />
               </div>
               <h3 className="text-white font-medium text-lg">Nincs találat</h3>
               <p className="text-white/40 text-sm mt-1">Nincs a keresésnek megfelelő termék a raktárban.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Warehouse;