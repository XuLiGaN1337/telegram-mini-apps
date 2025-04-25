
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="p-4 text-center text-sm text-cyan-400/80 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20">
      © {currentYear} MOTOTyumen FREE RIDERS
    </footer>
  );
};
