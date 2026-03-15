import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    // Obszidián Fekete alap háttér [cite: 139]
    <div className="flex h-screen bg-obsidian text-white/80 font-sans">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;