import { 
  Download, Plus, Package, AlertTriangle, Rocket, TrendingUp, 
  Layers, Sprout, LayoutGrid, Wrench, Trees, Edit2, ChevronLeft, ChevronRight 
} from 'lucide-react';

const mockInventory = [
  {
    id: 'MAT-001',
    name: 'Kerti murva 10-20mm',
    sku: 'BULK-M-1020',
    category: 'Ömlesztett anyag',
    unit: 'tonna',
    price: '8 500 Ft',
    icon: Layers
  },
  {
    id: 'MAT-002',
    name: 'Smaragdtuja (Thuja occidentalis) 120cm',
    sku: 'PLNT-SM-120',
    category: 'Növényzet',
    unit: 'db',
    price: '6 500 Ft',
    icon: Sprout
  },
  {
    id: 'MAT-003',
    name: 'Barabás Téglakő (Antik sárga)',
    sku: 'PAV-BRB-ANT',
    category: 'Burkolat',
    unit: 'raklap',
    price: '72 000 Ft',
    icon: LayoutGrid
  },
  {
    id: 'MAT-004',
    name: 'KPE cső 32mm (Öntözőrendszer)',
    sku: 'PIPE-KPE-32',
    category: 'Szerelvény',
    unit: 'méter',
    price: '320 Ft',
    icon: Wrench
  },
  {
    id: 'MAT-005',
    name: 'Prémium Fenyőmulcs (Vöröses)',
    sku: 'MUL-PRE-050',
    category: 'Talajtakaró',
    unit: 'zsák (50L)',
    price: '2 850 Ft',
    icon: Trees
  }
];

const Warehouse = () => {
  return (
    <div className="p-10 max-w-7xl w-full mx-auto relative min-h-full">
      
      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
        <div>
          <h1 className="text-5xl font-black font-epilogue tracking-tighter text-white mb-2">Raktár Katalógus</h1>
          <p className="text-white/60 text-lg max-w-lg">Anyagok, növények és eszközök törzsadatbázisa az ONIX rendszerében.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-3 bg-surface text-white/80 font-bold rounded-lg hover:bg-surface-bright transition-all flex items-center gap-x-2">
            <Download size={18} strokeWidth={2.5} />
            Készlet Export
          </button>
          <button className="px-6 py-3 bg-primary text-on-primary-container font-black rounded-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-x-2 shadow-[0_0_20px_rgba(0,208,132,0.2)]">
            <Plus size={20} strokeWidth={3} />
            Új alapanyag
          </button>
        </div>
      </section>

      {/* Stats Bento (Secondary visual element) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 relative z-10">
        <div className="bg-surface p-6 rounded-xl flex flex-col justify-between h-32 hover:bg-surface-bright transition-colors cursor-default group">
          <div className="flex justify-between items-start">
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Összes tétel</span>
            <Package className="text-primary/50 group-hover:text-primary transition-colors" size={20} />
          </div>
          <p className="text-3xl font-black font-epilogue">1,284</p>
        </div>
        
        <div className="bg-surface p-6 rounded-xl flex flex-col justify-between h-32 hover:bg-surface-bright transition-colors cursor-default group">
          <div className="flex justify-between items-start">
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Alacsony készlet</span>
            <AlertTriangle className="text-red-500/50 group-hover:text-red-500 transition-colors" size={20} />
          </div>
          <p className="text-3xl font-black font-epilogue text-red-500">12</p>
        </div>
        
        <div className="bg-surface p-6 rounded-xl flex flex-col justify-between h-32 hover:bg-surface-bright transition-colors cursor-default group">
          <div className="flex justify-between items-start">
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Aktív projektek</span>
            <Rocket className="text-primary/50 group-hover:text-primary transition-colors" size={20} />
          </div>
          <p className="text-3xl font-black font-epilogue">24</p>
        </div>
        
        <div className="bg-surface p-6 rounded-xl flex flex-col justify-between h-32 hover:bg-surface-bright transition-colors cursor-default group">
          <div className="flex justify-between items-start">
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Havi forgalom</span>
            <TrendingUp className="text-primary/50 group-hover:text-primary transition-colors" size={20} />
          </div>
          <p className="text-3xl font-black font-epilogue">2.4M Ft</p>
        </div>
      </div>

      {/* Catalog Table */}
      <div className="bg-background overflow-hidden relative z-10">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-white/30 uppercase text-[10px] font-black tracking-[0.2em]">
                <th className="px-6 py-4 font-bold">Anyag megnevezése</th>
                <th className="px-6 py-4 font-bold">Cikkszám & Kategória</th>
                <th className="px-6 py-4 font-bold">Egység</th>
                <th className="px-6 py-4 font-bold text-right">Egységár</th>
                <th className="px-6 py-4 font-bold w-20"></th>
              </tr>
            </thead>
            <tbody className="divide-y-0">
              {mockInventory.map((item, index) => (
                <tr key={item.id} className="odd:bg-background even:bg-surface hover:!bg-surface-bright transition-colors group cursor-pointer">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-x-4">
                      {/* Változó háttér az ikonnak, hogy mindig látszódjon a sor hátterén */}
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-primary transition-colors bg-surface group-odd:bg-surface group-even:bg-background group-hover:!bg-background">
                        <item.icon size={20} />
                      </div>
                      <span className="font-bold text-white/90">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex flex-col">
                      <span className="text-xs font-mono text-white/50">{item.sku}</span>
                      <span className="text-[11px] text-primary font-bold">{item.category}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-white/70 text-sm">{item.unit}</td>
                  <td className="px-6 py-6 text-right font-black text-white/90">{item.price}</td>
                  <td className="px-6 py-6 text-right">
                    <button className="p-2 text-white/20 hover:text-white/80 transition-colors opacity-0 group-hover:opacity-100">
                      <Edit2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination-ish Footer */}
        <div className="mt-8 flex items-center justify-between text-white/30 text-xs font-bold uppercase tracking-widest px-2">
          <p>1-5 / 1,284 tétel megjelenítése</p>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 hover:text-white transition-colors disabled:opacity-20" disabled>
              <ChevronLeft size={16} /> Előző
            </button>
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              Következő <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Visual Accent Element (Abstract Gradient) */}
      <div className="fixed -bottom-32 -right-32 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </div>
  );
};

export default Warehouse;