import { BrainCircuit, TrendingUp, TrendingDown, AlertCircle, Zap, ArrowUpRight, ArrowDownRight, DownloadCloud, Activity } from 'lucide-react';

// Mock adatok a fő KPI-okhoz (Fő teljesítménymutatók)
const mockKpis = [
  {
    title: 'Várható Havi Bevétel',
    value: '24.5M Ft',
    trend: '+12.5%',
    trendType: 'positive',
    subtitle: 'Előző hónaphoz képest (21.7M Ft)'
  },
  {
    title: 'Átlagos Projekt Profitabilitás',
    value: '32.4%',
    trend: '-2.1%',
    trendType: 'negative',
    subtitle: 'Kúszó költségek miatt csökken'
  },
  {
    title: 'Erőforrás Kihasználtság',
    value: '88%',
    trend: '+4.2%',
    trendType: 'positive',
    subtitle: 'Optimális sávban (85-90%)'
  }
];

// Mock adatok az AI predikciókhoz (Szöveges insightok)
const mockInsights = [
  {
    id: 1,
    type: 'warning',
    icon: AlertCircle,
    color: 'text-warning bg-warning/10',
    title: 'Költségtúllépési Kockázat: "Nagy Kertépítés"',
    description: 'A jelenlegi gépóra-felhasználás alapján a projekt a tervezett keretet várhatóan 15%-kal túllépi. Javasolt a földmunkák ütemezésének felülvizsgálata.',
    actionText: 'Ütemterv megnyitása'
  },
  {
    id: 2,
    type: 'success',
    icon: Zap,
    color: 'text-cybermint bg-cybermint/10',
    title: 'Kapacitás Optimalizálás Lehetséges',
    description: 'Kovács Péter és csapata a jövő héten szerdán felszabadul. A "Szabó Iroda" projekt előrehozásával 2 üresjárati nap takarítható meg.',
    actionText: 'Naptár frissítése'
  },
  {
    id: 3,
    type: 'info',
    icon: Activity,
    color: 'text-cyan-400 bg-cyan-500/10',
    title: 'Anyagár Trend Értesítés',
    description: 'A kerti murva (10-20mm) piaci ára az elmúlt 30 napban 8%-ot emelkedett. Érdemes lehet előre feltölteni a raktárkészletet a következő hónap projektjeihez.',
    actionText: 'Raktár megtekintése'
  }
];

const AI = () => {
  return (
    <div className="flex flex-col gap-8 max-w-[1400px] mx-auto h-full overflow-y-auto pb-8">
      
      {/* Fejléc */}
      <header className="flex items-end justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cybermint/10 border border-cybermint/20 flex items-center justify-center text-cybermint shadow-[0_0_20px_rgba(0,208,132,0.1)]">
            <BrainCircuit size={24} />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold text-white tracking-tight">Üzleti Elemzés</h1>
            <p className="text-white/60 mt-1">AI-vezérelt pénzügyi és operatív előrejelzések.</p>
          </div>
        </div>
        
        <button className="flex items-center gap-2 px-5 py-2.5 bg-surface hover:bg-surface-hover text-white/90 border border-white/10 font-medium rounded-lg transition-colors">
          <DownloadCloud size={18} /> Jelentés Exportálása
        </button>
      </header>

      {/* KPI Kártyák (Grid) - Torta diagramok helyett tiszta adatok */}
      <div className="grid grid-cols-3 gap-6">
        {mockKpis.map((kpi, index) => (
          <div key={index} className="bg-surface rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors group">
            <h3 className="text-white/50 text-sm font-medium mb-4">{kpi.title}</h3>
            
            <div className="flex items-end gap-4 mb-2">
              <span className="font-display text-4xl font-bold text-white tracking-tight">{kpi.value}</span>
              <div className={`flex items-center gap-1 text-sm font-bold pb-1 ${
                kpi.trendType === 'positive' ? 'text-cybermint' : 'text-danger'
              }`}>
                {kpi.trendType === 'positive' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {kpi.trend}
              </div>
            </div>
            
            <p className="text-white/30 text-xs">{kpi.subtitle}</p>
          </div>
        ))}
      </div>

      {/* AI Insightok és Predikciók Listája */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-6">
          <Zap size={20} className="text-cybermint" />
          <h2 className="font-display text-xl font-bold text-white">Automatikus Észrevételek</h2>
        </div>

        <div className="flex flex-col gap-4">
          {mockInsights.map((insight) => (
            <div 
              key={insight.id} 
              className="group flex gap-6 bg-surface p-6 rounded-2xl border border-white/5 hover:bg-surface-hover transition-colors duration-200"
            >
              {/* Ikon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${insight.color}`}>
                <insight.icon size={24} />
              </div>
              
              {/* Szöveges tartalom */}
              <div className="flex-1">
                <h3 className="text-lg font-medium text-white mb-2">{insight.title}</h3>
                <p className="text-white/60 text-[15px] leading-relaxed max-w-4xl">
                  {insight.description}
                </p>
              </div>

              {/* Akció gomb */}
              <div className="flex items-center justify-end w-48">
                <button className="flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-cybermint transition-colors">
                  {insight.actionText} 
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pénzügyi Trend Táblázat (Egyszerűsített) */}
      <div className="bg-surface rounded-2xl border border-white/5 overflow-hidden mt-4">
        <div className="p-6 border-b border-white/5">
          <h3 className="font-display text-lg font-bold text-white">Következő 3 Hónap Pénzügyi Előrejelzése</h3>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 text-xs font-semibold text-white/40 uppercase tracking-wider bg-white/[0.02]">
              <th className="px-6 py-4 font-medium">Hónap</th>
              <th className="px-6 py-4 font-medium">Tervezett Költség</th>
              <th className="px-6 py-4 font-medium">Várható Bevétel</th>
              <th className="px-6 py-4 font-medium text-right">Prediktált Eredmény</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-white/5 hover:bg-surface-hover transition-colors">
              <td className="px-6 py-4 font-medium text-white">2026. Május</td>
              <td className="px-6 py-4 text-white/60">12 400 000 Ft</td>
              <td className="px-6 py-4 text-white/80">18 500 000 Ft</td>
              <td className="px-6 py-4 text-right">
                <span className="text-cybermint font-mono font-bold">+6 100 000 Ft</span>
              </td>
            </tr>
            <tr className="border-b border-white/5 hover:bg-surface-hover transition-colors bg-white/[0.01]">
              <td className="px-6 py-4 font-medium text-white">2026. Június</td>
              <td className="px-6 py-4 text-white/60">15 200 000 Ft</td>
              <td className="px-6 py-4 text-white/80">22 100 000 Ft</td>
              <td className="px-6 py-4 text-right">
                <span className="text-cybermint font-mono font-bold">+6 900 000 Ft</span>
              </td>
            </tr>
            <tr className="hover:bg-surface-hover transition-colors">
              <td className="px-6 py-4 font-medium text-white flex items-center gap-2">
                2026. Július <AlertCircle size={14} className="text-warning" />
              </td>
              <td className="px-6 py-4 text-white/60">14 800 000 Ft</td>
              <td className="px-6 py-4 text-white/80">15 200 000 Ft</td>
              <td className="px-6 py-4 text-right">
                <span className="text-warning font-mono font-bold">+400 000 Ft</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AI;