
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const menuItems = [
    { label: "Início", href: "#hero" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#processo" },
    { label: "Clientes", href: "#clientes" },
    { label: "Contato", href: "#contato" },
  ];
  
  const whatsappLink = "https://wa.me/5521975878855";
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 md:py-5 px-4 md:px-8
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/fbc63dd3-4839-4095-a11c-e2457b5f7a31.png" 
            alt="Dias Vertykais" 
            className="h-12 w-auto" 
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-opacity
                ${scrolled ? "text-foreground opacity-80 hover:opacity-100" : "text-white opacity-80 hover:opacity-100"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:block cta-button text-sm
            ${scrolled ? "" : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"}`}
        >
          Agende Visita Técnica
        </a>
      </div>
    </header>
  );
};

export default Header;
