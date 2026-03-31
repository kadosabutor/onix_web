import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Package, Users, CalendarDays, HardHat, BrainCircuit, Leaf } from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard 2.0', icon: LayoutDashboard, path: '/' },
  { id: 'projects', label: 'Projektek', icon: FolderKanban, path: '/projects' },
  { id: 'warehouse', label: 'Raktár Katalógus', icon: Package, path: '/warehouse' },
  { id: 'crm', label: 'CRM / Ügyfelek', icon: Users, path: '/crm' },
  { id: 'calendar', label: 'Naptár', icon: CalendarDays, path: '/calendar' },
  { id: 'team', label: 'Csapat és Erőforrások', icon: HardHat, path: '/team' },
  { id: 'ai', label: 'AI Analitika', icon: BrainCircuit, path: '/ai' },
];

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-surface-container-low flex flex-col py-6 gap-2 z-50 border-r-0">
      
      {/* Logó */}
      <div className="px-8 mb-10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
          <Leaf className="text-on-primary-container" size={18} strokeWidth={2.5} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-tighter font-epilogue">ONIX</h1>
          <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Premium Landscaping</p>
        </div>
      </div>
      
      {/* Navigáció */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 font-epilogue text-sm font-medium transition-all duration-300 group ${
                isActive 
                  ? 'text-primary-container font-bold bg-surface-container rounded-r-full' 
                  : 'text-white/50 hover:text-white/90 hover:bg-surface-container rounded-lg hover:pl-6'
              }`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Tárhely modul az alján */}
      <div className="px-8 mt-auto pt-6">
        <div className="p-4 rounded-xl bg-surface-container-highest/30">
          <p className="text-[10px] text-white/40 mb-2 uppercase tracking-tighter">Tárhely</p>
          <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[72%]"></div>
          </div>
          <p className="text-[10px] text-white/60 mt-2">7.2 / 10 GB használt</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;