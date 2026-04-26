
import React, { useState, useEffect, Suspense, useMemo } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  FileText, 
  TrendingUp, 
  Users, 
  Cpu, 
  Printer, 
  Globe, 
  ShieldCheck, 
  LayoutDashboard, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  Zap,
  Smartphone,
  Cloud,
  MessageSquare,
  MoveUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import DeleteAccount from './pages/DeleteAccount';

const AIDemoComponent = () => {
  // ... (Componente de IA permanece o mesmo, pode ser recolhido para clareza)
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generateDescription = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult('');
    try {
      // Simulação de chamada de IA com um atraso
      await new Promise(resolve => setTimeout(resolve, 1500));
      const generatedText = `Uma solução inovadora de ${input.toLowerCase()} que combina design elegante com funcionalidade robusta. Ideal para otimizar processos e impulsionar o crescimento do seu negócio, entregando resultados mensuráveis e uma experiência de usuário excepcional.`;
      setResult(generatedText);
    } catch (error) {
      console.error(error);
      setResult('Erro ao conectar com a IA. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };
  
    return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: Consultoria de RH, Bolo de Chocolate..."
          className="flex-1 bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
        />
        <button 
          onClick={generateDescription}
          disabled={loading}
          className="bg-cyan-400 hover:bg-cyan-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-900 px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <>
              Gerar com IA
              <Zap className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      
      <AnimatePresence>
        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl bg-black/20 border border-white/10 space-y-3"
          >
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Sugestão da IA</div>
            <p className="text-slate-200 leading-relaxed italic">"{result}"</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-white/10 shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Zap className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold font-display tracking-tight text-white">BizFlow</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg">Funcionalidades</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg">Como funciona</a>
            <a href="#ai-demo" className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg">Demo IA</a>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://biz-flow.cloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Abrir App
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/90 backdrop-blur-lg z-40 flex justify-center items-center"
            onClick={closeMenu}
          >
            <motion.div 
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex flex-col gap-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <a href="#features" onClick={closeMenu} className="text-2xl font-medium text-slate-100 hover:text-cyan-400 transition-colors">Funcionalidades</a>
              <a href="#how-it-works" onClick={closeMenu} className="text-2xl font-medium text-slate-100 hover:text-cyan-400 transition-colors">Como funciona</a>
              <a href="#ai-demo" onClick={closeMenu} className="text-2xl font-medium text-slate-100 hover:text-cyan-400 transition-colors">Demo IA</a>
              <a 
                href="https://biz-flow.cloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-full text-xl font-bold"
              >
                Abrir App
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Animated3DShape = () => {
  const mesh = React.useRef<THREE.Mesh>(null!);
  
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0.0 },
      u_intensity: { value: 0.3 },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.1;
      mesh.current.rotation.x = clock.getElapsedTime() * 0.05;
      (mesh.current.material as THREE.ShaderMaterial).uniforms.u_time.value = clock.getElapsedTime();
    }
  });

  return (
    <Icosahedron ref={mesh} args={[2.5, 20]}>
      <shaderMaterial
        vertexShader={`
          varying vec3 v_normal;
          varying vec3 v_position;
          void main() {
            v_normal = normal;
            v_position = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float u_time;
          uniform float u_intensity;
          varying vec3 v_normal;
          varying vec3 v_position;
          
          // 2D Random function
          float random (vec2 st) {
              return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
          }

          // 2D Noise function
          float noise (vec2 st) {
              vec2 i = floor(st);
              vec2 f = fract(st);

              float a = random(i);
              float b = random(i + vec2(1.0, 0.0));
              float c = random(i + vec2(0.0, 1.0));
              float d = random(i + vec2(1.0, 1.0));

              vec2 u = f*f*(3.0-2.0*f);
              return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
          }
          
          void main() {
            vec3 normal = normalize(v_normal);
            float n = noise(normal.xy * 4.0 + u_time * 0.2);
            
            vec3 baseColor1 = vec3(0.0, 0.8, 0.9); // Cyan
            vec3 baseColor2 = vec3(0.0, 0.5, 0.6); // Deeper Cyan/Teal
            vec3 accentColor = vec3(0.3, 1.0, 0.8); // Emerald/Mint
            
            vec3 color = mix(baseColor1, baseColor2, normal.z);
            color = mix(color, accentColor, n * 0.5);
            
            float fresnel = pow(1.0 - dot(normalize(v_position), normal), 2.0);
            
            gl_FragColor = vec4(color + fresnel * u_intensity, 1.0);
          }
        `}
        uniforms={uniforms}
        wireframe={true}
      />
    </Icosahedron>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, amount: 0.5 }}
    className="p-8 rounded-3xl bg-slate-800/50 border border-white/10 hover:border-cyan-400/50 hover:bg-slate-800 transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
      <Icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3 font-display text-white">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </motion.div>
);

const LandingPage = () => {
  const features = [
    { icon: FileText, title: "Documentos Profissionais", description: "Emita faturas, recibos e orçamentos em segundos. Personalize com seu logo e envie via WhatsApp." },
    { icon: TrendingUp, title: "Fluxo de Caixa", description: "Controle entradas e saídas. Categorize despesas e visualize a saúde financeira em tempo real." },
    { icon: Cpu, title: "Inteligência Artificial", description: "Use Gemini para otimizar descrições de produtos e a sua comunicação comercial." },
    { icon: Smartphone, title: "App PWA & Offline", description: "Instale no celular e use mesmo sem internet. Sincronização automática assim que conectar." },
    { icon: Printer, title: "Impressão Bluetooth", description: "Conecte-se a impressoras térmicas e imprima talões de venda na hora para seus clientes." },
    { icon: Globe, title: "Multi-Moeda e Idioma", description: "Suporte para MZN, AOA, BRL, USD e EUR. Disponível em 5 idiomas para alcance global." },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-cyan-300 selection:text-black">
      <Navbar />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Suspense fallback={null}>
              <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
              <Animated3DShape />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
          </Canvas>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold font-display leading-tight tracking-tighter">
              Transforme seu celular num <span className="text-cyan-400">escritório digital.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Simplifique a administração da sua empresa. Elimine papel e planilhas com a plataforma completa para freelancers e microempreendedores.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://biz-flow.cloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group"
              >
                Começar Grátis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/258840636794" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800/50 border-2 border-slate-700 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display">Tudo o que você precisa, em um só lugar</h2>
            <p className="text-lg text-slate-400">Uma plataforma integrada que cobre desde a emissão de documentos até a análise financeira avançada.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display">Comece em 3 passos simples</h2>
            <p className="text-lg text-slate-400">Migrar para o digital nunca foi tão fácil. Veja como o BizFlow funciona na prática.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { title: "Crie sua Conta", desc: "Registe-se em segundos e configure os dados e o logo da sua empresa." },
              { title: "Registe Produtos", desc: "Adicione seus itens ou serviços para agilizar a faturação e o controle." },
              { title: "Emita e Envie", desc: "Gere faturas profissionais e envie diretamente para o WhatsApp do cliente." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="text-7xl font-black text-cyan-400/20 font-display mb-4">0{i + 1}</div>
                <h3 className="text-2xl font-bold mb-4 font-display text-white">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="ai-demo" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-950 border border-white/10 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden">
                <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500/10 blur-[100px] rounded-full"></div>
                <div className="relative z-10 space-y-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-display">Experimente nossa IA agora</h2>
                        <p className="text-slate-400">Digite um produto ou serviço e veja como a IA do BizFlow cria uma descrição profissional.</p>
                    </div>
                    <AIDemoComponent />
                </div>
            </div>
        </div>
      </section>

      <footer className="pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1 space-y-6">
              <h4 className="font-bold text-white">Produto</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#features" className="hover:text-cyan-400 transition-colors">Funcionalidades</a></li>
                <li><a href="https://biz-flow.cloud/pricing" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Preços</a></li>
                <li><a href="https://biz-flow.cloud/pages" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">BizFlow Pages</a></li>
                <li><a href="https://chat.whatsapp.com/HCqTa1jG2cU3sufJww1EPT?mode=gi_t" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Comunidade</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1 space-y-6">
              <h4 className="font-bold text-white">Suporte</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li>WhatsApp: <a href="https://wa.me/258840636794" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">+258 840 636 794</a></li>
                <li><Link to="/privacy" className="hover:text-cyan-400 transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/terms" className="hover:text-cyan-400 transition-colors">Termos de Uso</Link></li>
                <li><Link to="/delete-account" className="text-red-500 hover:text-red-400 transition-colors font-medium">Eliminar Conta</Link></li>
              </ul>
            </div>
            <div className="col-span-4 md:col-span-2 space-y-6">
               <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Zap className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold font-display text-white">BizFlow</span>
              </div>
              <p className="text-slate-400 max-w-sm">
                A plataforma definitiva para quem quer crescer de forma organizada e profissional.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-medium">
            <p>© {new Date().getFullYear()} BizFlow. Todos os direitos reservados.</p>
            <span className="flex items-center gap-1.5">
                Feito com ❤️ para empreendedores
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
      </Routes>
    </HashRouter>
  );
}
