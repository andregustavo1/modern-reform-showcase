import { useEffect } from "react";
import Header from "../components/Header";
import AnimatedSection from "../components/ui/AnimatedSection";
import { 
  Home, 
  Shield, 
  Clock, 
  PaintBucket, 
  User, 
  FileText, 
  CheckCircle, 
  Wrench,
  Droplet,
  Building,
  Ruler,
  FileCheck,
  ArrowRight
} from "lucide-react";

const Index = () => {
  // WhatsApp URL
  const whatsappLink = "https://wa.me/5521975878855";

  // Animation on scroll effect
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(".animate-on-scroll");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    scrollAnimElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      scrollAnimElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Service cards data
  const services = [
    {
      icon: <Building size={28} />,
      title: "Reforma de Fachada",
      description: "Recuperação estrutural e estética de fachadas condominiais"
    },
    {
      icon: <Droplet size={28} />,
      title: "Hidrojateamento",
      description: "Limpeza profunda que remove sujeira, fungos e poluentes"
    },
    {
      icon: <Shield size={28} />,
      title: "Impermeabilização",
      description: "Proteção contra infiltração em lajes, piscinas e áreas úmidas"
    },
    {
      icon: <PaintBucket size={28} />,
      title: "Pintura de Garagem",
      description: "Tratamento e pintura especializada para pavimentos"
    },
    {
      icon: <Wrench size={28} />,
      title: "Teste de Percussão",
      description: "Diagnóstico de áreas deterioradas em fachadas"
    },
    {
      icon: <Wrench size={28} />,
      title: "Manutenção de Telhados",
      description: "Reparos e substituições em coberturas e telhados"
    },
    {
      icon: <Ruler size={28} />,
      title: "Instalação de Drenos",
      description: "Sistemas de drenagem para áreas propensas a acúmulo de água"
    },
  ];

  // Differential cards data
  const differentials = [
    {
      icon: <User size={32} />,
      title: "Visita Técnica Gratuita",
      description: "Diagnóstico inicial sem custo, com profissionais qualificados para avaliar as necessidades do seu imóvel."
    },
    {
      icon: <FileText size={32} />,
      title: "Orçamento Detalhado",
      description: "Proposta clara e transparente, detalhando materiais, mão de obra e cronograma de execução."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Equipe Especializada",
      description: "Profissionais com experiência e certificações nas mais modernas técnicas de manutenção predial."
    },
    {
      icon: <Shield size={32} />,
      title: "Serviços Completos",
      description: "Solução integral, desde o diagnóstico até a execução e acompanhamento pós-serviço."
    }
  ];

  // Work process steps
  const workProcess = [
    {
      number: 1,
      title: "Visita Técnica",
      description: "Avaliação detalhada das necessidades e condições do imóvel."
    },
    {
      number: 2,
      title: "Diagnóstico",
      description: "Análise técnica completa com registro fotográfico e identificação de patologias."
    },
    {
      number: 3,
      title: "Orçamento",
      description: "Proposta detalhada com escopo do trabalho, materiais e prazos."
    },
    {
      number: 4,
      title: "Execução",
      description: "Realização do serviço com equipe especializada e supervisão constante."
    },
    {
      number: 5,
      title: "Finalização",
      description: "Entrega com vistoria final e garantia documentada dos serviços."
    }
  ];

  // Client testimonials data
  const clients = [
    {
      name: "GOLDEN GATE CLUB CONDOMINIUM",
      description: "O Golden Gate Club Condominium um dos condomínios mais luxuosos de Nova Iguaçu, com 2 blocos de 22 pavimentos.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070"
    },
    {
      name: "BORA BORA HILLS FREGUESIA",
      description: "Bora Bora um lindíssimo empreendimento em Jacarepaguá com 7 pavimentos e 3 blocos.",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=2070"
    },
    {
      name: "EDIFÍCIO METRÓPOLIS",
      description: "O Edifício METRÓPOLIS é um centro comercial em Nova Iguaçu com 20 pavimentos.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
    },
    {
      name: "EDIFÍCIO POTIGUARA 325",
      description: "O Condomínio Edifício Potiguara 325 é um charmoso condomínio na Freguesia com 8 pavimentos.",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070"
    },
    {
      name: "EDIFÍCIO PALAZZO VENETO",
      description: "Um condomínio que carrega a tradicional característica do bairro Recreio dos Bandeirantes com 3 pavimentos de pura elegância.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070"
    },
    {
      name: "RESIDENCIAL PORTAL DO BOSQUE",
      description: "Um condomínio residencial em Jardim Sulacap com 2 blocos de 12 pavimentos.",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2070"
    },
    {
      name: "EDIFÍCIO QUARTO CENTENÁRIO",
      description: "Um condomínio no bairro da Tijuca, bairro nobre da zona norte com 10 pavimentos.",
      image: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=2070"
    },
    {
      name: "EDIFÍCIO FÁBIO RIBEIRO",
      description: "O Condomínio Edifício Fábio Ribeiro na Tijuca com 11 pavimentos de muita elegância.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070"
    },
    {
      name: "EDIFÍCIO COSENZA",
      description: "Condomínio residencial com 10 pavimentos na nossa nobre Tijuca.",
      image: "https://images.unsplash.com/photo-1560448075-57d0285fc80b?q=80&w=2070"
    },
    {
      name: "EDIFÍCIO MARIA JOSÉ",
      description: "O Condomínio Edifício Maria José no nosso querido Bairro do Méier com 6 pavimentos.",
      image: "https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=2070"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070')] 
            bg-cover bg-center opacity-50"
          ></div>
        </div>
        
        <div className="container-custom relative z-20 text-white mt-16">
          <AnimatedSection className="max-w-3xl mx-auto text-center" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Reformas Prediais com Excelência
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10">
              Soluções Completas para Manutenção e Estética Predial
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-flex items-center gap-2 text-base"
            >
              Agende Visita Técnica Gratuita
              <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="sobre" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-2 md:order-1">
              <h2 className="section-title">Expertise em Manutenção Predial</h2>
              <p className="text-muted-foreground mb-6">
                A Dias Vertykais oferece soluções abrangentes para manutenção e conservação predial, 
                atendendo condomínios e edifícios com profissionalismo e qualidade reconhecidos no mercado.
              </p>
              <p className="text-muted-foreground mb-8">
                Nossa missão é prolongar a vida útil e valorizar o patrimônio de nossos clientes, 
                através de serviços especializados que garantem proteção, segurança e estética para as edificações.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <User className="shrink-0 text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Técnicos Especializados</h3>
                    <p className="text-sm text-muted-foreground">Equipe certificada e constantemente atualizada</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="shrink-0 text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Qualidade Garantida</h3>
                    <p className="text-sm text-muted-foreground">Materiais de primeira linha e técnicas avançadas</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="shrink-0 text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Soluções Personalizadas</h3>
                    <p className="text-sm text-muted-foreground">Projetos adaptados à necessidade de cada cliente</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="shrink-0 text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Atendimento Rápido</h3>
                    <p className="text-sm text-muted-foreground">Resposta ágil e cumprimento de prazos</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="order-1 md:order-2" delay={200}>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070" 
                  alt="Equipe de profissionais da Dias Vertykais" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section id="diferenciais" className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Nossos Diferenciais</h2>
            <p className="text-muted-foreground">
              Razões para confiar na Dias Vertykais para cuidar do seu patrimônio
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => (
              <AnimatedSection key={index} className="card" delay={index * 100}>
                <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-primary">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="servicos" className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Serviços Especializados</h2>
            <p className="text-muted-foreground">
              Conheça as soluções completas que oferecemos para manutenção e conservação do seu imóvel
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection 
                key={index} 
                className="card flex items-start gap-4" 
                delay={index * 100}
              >
                <div className="bg-primary/5 rounded-xl p-3">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Work Process Section */}
      <section id="processo" className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Nosso Processo de Trabalho</h2>
            <p className="text-muted-foreground">
              Metodologia estruturada para garantir excelência em todas as etapas do serviço
            </p>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            {workProcess.map((step, index) => (
              <AnimatedSection 
                key={index} 
                className="timeline-item" 
                delay={index * 150}
              >
                {index < workProcess.length - 1 && <div className="timeline-connector"></div>}
                <div className="timeline-bullet">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="font-medium text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section id="clientes" className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Empresas que Confiam em Nosso Trabalho</h2>
            <p className="text-muted-foreground">
              Clientes satisfeitos com a qualidade e eficiência dos nossos serviços
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.slice(0, 6).map((client, index) => (
              <AnimatedSection 
                key={index} 
                className="card overflow-hidden flex flex-col h-full"
                delay={index * 100}
              >
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{client.name}</h3>
                <p className="text-muted-foreground">{client.description}</p>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {clients.slice(6).map((client, index) => (
              <AnimatedSection 
                key={`extra-${index}`} 
                className="card overflow-hidden flex flex-col h-full"
                delay={(index + 6) * 100}
              >
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{client.name}</h3>
                <p className="text-muted-foreground">{client.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contato" className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="section-title">Entre em Contato</h2>
              <p className="text-muted-foreground mb-10">
                Estamos prontos para atender às suas necessidades e oferecer as melhores soluções para seu imóvel.
              </p>
              
              <div className="space-y-6">
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium">(21) 97587-8855</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:diasvertykais@gmail.com" 
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <p className="font-medium">diasvertykais@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.google.com/maps/search/Av.+Gerem%C3%A1rio+Dantas,+906+Sala+124+-+Pechincha,+Jacarepagu%C3%A1+-+RJ/@-22.9332019,-43.3600764,17z/data=!3m1!4b1?entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Endereço</p>
                    <p className="font-medium">Av. Geremário Dantas, 906 Sala 124</p>
                    <p className="text-sm text-muted-foreground">Pechincha, Jacarepaguá - RJ</p>
                  </div>
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="h-full min-h-[400px] rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1799189805615!2d-43.360076400000004!3d-22.933201899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd8f64a3c2fbd%3A0xd982d2d8c034e1ac!2sAv.%20Gerem%C3%A1rio%20Dantas%2C%20906%20-%20Pechincha%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022743-010!5e0!3m2!1spt-BR!2sbr!4v1716765122563!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Last CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Transforme Sua Propriedade Hoje
            </h2>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100"
            >
              Agende Visita Gratuita
              <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-black text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/logo-white.png" 
                  alt="Dias Vertykais" 
                  className="h-16 w-auto filter invert" 
                />
              </div>
              <p className="text-gray-400 max-w-md">
                Reforma Predial LTDA. Especialistas em reforma e estética predial, 
                oferecendo soluções completas para manutenção de fachadas, impermeabilização, 
                pintura e serviços técnicos especializados.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
                  <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
                  <li><a href="#processo" className="text-gray-400 hover:text-white transition-colors">Processo</a></li>
                  <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Contato</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href={whatsappLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      (21) 97587-8855
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:diasvertykais@gmail.com" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      diasvertykais@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2025 Dias Vertykais Reforma Predial. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
