import React, { useState } from 'react';

// 1. LÉPÉS: Importáljuk a te különálló fájljaidat a pages mappából!
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Warehouse from './pages/Warehouse';
import CRM from './pages/CRM';
import Calendar from './pages/Calendar';

const MENU_ITEMS = [
  { id: 'dashboard', label: 'Dashboard 2.0', icon: '📊' },
  { id: 'projects', label: 'Projektek', icon: '📁' },
  { id: 'warehouse', label: 'Raktár Katalógus', icon: '📦' },
  { id: 'crm', label: 'CRM / Ügyfelek', icon: '👥' },
  { id: 'calendar', label: 'Naptár', icon: '📅' },
];

export default function App() {
  // Kezdésnek a Dashboard (Vezérlőpult) nyíljon meg
  const [activeTab, setActiveTab] = useState('dashboard');

  // 2. LÉPÉS: Ez a függvény dönti el, hogy melyik fájlod tartalmát mutassa a képernyőn
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'projects': return <Projects />;
      case 'warehouse': return <Warehouse />;
      case 'crm': return <CRM />;
      case 'calendar': return <Calendar />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex w-screen h-screen bg-[#0A0C10] font-sans overflow-hidden m-0 p-0">
      
      {/* Oldalsáv (Sidebar) */}
      <nav className="w-[256px] h-full bg-[#161922] flex flex-col p-6 box-border shrink-0">
        <div className="mb-12 flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00E5FF] rounded-lg"></div>
          <h1 className="text-white text-xl font-bold tracking-tight m-0">ONIX</h1>
        </div>
        
        <div className="flex flex-col gap-2 flex-1">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-4 px-4 py-2 rounded-lg text-sm transition-all duration-200 cursor-pointer border-none text-left ${
                activeTab === item.id ? 'bg-[#1F232F] text-white font-semibold' : 'bg-transparent text-[#888D9E] font-normal hover:text-white'
              }`}
            >
              <span className="text-lg">{item.icon}</span> {item.label}
            </button>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-[#1F232F] flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#1F232F]"></div>
          <div>
            <div className="text-white text-sm font-semibold">Adminisztrátor</div>
            <div className="text-[#888D9E] text-xs">admin@onix.hu</div>
          </div>
        </div>
      </nav>

      {/* FŐ TARTALOM: Itt hívjuk meg a függvényt, ami betölti a megfelelő .jsx fájlt! */}
      <main className="flex-1 p-12 overflow-y-auto flex justify-center items-start relative">
        <div className="w-full max-w-[1200px]">
          {renderContent()}
        </div>
      </main>

    </div>
  );
}