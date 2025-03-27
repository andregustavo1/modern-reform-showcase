
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
          <h1 className="text-xl font-bold tracking-tighter">
            DIAS <span className="text-muted-foreground">VERTYKAIS</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground opacity-80 hover:opacity-100 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block cta-button text-sm"
        >
          Agende Visita Técnica
        </a>
      </div>
    </header>
  );
};

export default Header;
