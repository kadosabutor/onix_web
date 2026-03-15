import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, CalendarDays, FolderKanban, HardHat, Package, BrainCircuit } from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Vezérlőpult 2.0', icon: LayoutDashboard, path: '/' }, // [cite: 24]
  { id: 'crm', label: 'Ügyfelek', icon: Users, path: '/crm' }, // [cite: 25]
  { id: 'calendar', label: 'Naptár', icon: CalendarDays, path: '/calendar' }, // [cite: 26]
  { id: 'projects', label: 'Projektek', icon: FolderKanban, path: '/projects' }, // 
  { id: 'team', label: 'Csapat & Erőforrások', icon: HardHat, path: '/team' }, // [cite: 28]
  { id: 'warehouse', label: 'Raktár Katalógus', icon: Package, path: '/warehouse' }, // [cite: 29]
  { id: 'ai', label: 'Üzleti Elemzés', icon: BrainCircuit, path: '/ai' }, // [cite: 30]
];

const Sidebar = () => {
  return (
    <aside className="w-[256px] bg-surface flex flex-col border-r border-white/5 h-full">
      <div className="p-6">
        <h1 className="font-display text-2xl font-bold text-white tracking-tight">Onix.</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group relative
              ${isActive ? 'bg-white/5 text-white' : 'text-white/60 hover:text-white hover:bg-surface-hover'}`
            }
          >
            {({ isActive }) => (
              <>
                {/* Kibernetikus Menta csík az aktív elemhez  */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-cybermint rounded-r-full" />
                )}
                <item.icon size={20} className={isActive ? 'text-cybermint' : 'text-white/50 group-hover:text-white/80'} />
                <span className="font-medium text-[15px]">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Profil kártya az oldalsáv alján [cite: 815, 817] */}
      <div className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3 px-2 py-2 cursor-pointer hover:bg-surface-hover rounded-lg transition-colors">
          <div className="w-8 h-8 rounded-full bg-emerald flex items-center justify-center text-sm font-bold text-white">
            OM
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium text-white truncate">Irodavezető</p>
            <p className="text-xs text-white/40 truncate">office@onix.hu</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;