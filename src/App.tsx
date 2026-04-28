// BDJ Product Katalog
import { useState, useMemo, ReactNode, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import 'react-phone-number-input/style.css';
import { 
  Search,
  Filter,
  ChevronRight,
  ChevronDown,
  Zap,
  Weight,
  Maximize,
  ArrowRight,
  Info,
  Package,
  Cpu,
  Droplets,
  Settings2,
  FileText,
  X,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  Loader2,
  Cable,
  Route,
  Cylinder,
  Gauge,
  Globe,
  User,
  Building2,
  Hash,
  MapPin
} from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import { products, Product } from './data/products';
import { cn } from './lib/utils';
import { Language, translations } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('PL');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'selection' | 'catalog'>(() => {
    try {
      const saved = localStorage.getItem('bdj_viewMode');
      return (saved as 'selection' | 'catalog') || 'selection';
    } catch (e) {
      return 'selection';
    }
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string | null>(() => {
    try {
      return localStorage.getItem('bdj_selectedGroup');
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('bdj_viewMode', viewMode);
    } catch (e) {
      // Ignore storage errors
    }
  }, [viewMode]);

  useEffect(() => {
    try {
      if (selectedGroup) {
        localStorage.setItem('bdj_selectedGroup', selectedGroup);
      } else {
        localStorage.removeItem('bdj_selectedGroup');
      }
    } catch (e) {
      // Ignore storage errors
    }
  }, [selectedGroup]);

  const [cableFilter, setCableFilter] = useState<number | null>(null);
  const [ductFilter, setDuctFilter] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', company: '', taxId: '', email: '', phone: '', country: '', message: '' });

  const t = translations[lang];
  const groups = ['Maszyny', 'Akcesoria', 'Kompresory'];

  const DUCT_VALUES = [5, 7, 10, 12, 14, 16, 20, 32, 40, 50];
  const getProductName = (p: Product) => (p.nameLocalized?.[lang] ?? p.name);
  const isMultiTube = (range: string) => range.toLowerCase().includes('multi') || range.toLowerCase().includes('tube');

  const MACHINE_COMPRESSORS: Record<string, string[]> = {
    'bdj-next':                   ['atmos-pdh76', 'atmos-pdp20', 'atmos-pb82', 'kaeser-m17a', 'acc-compressor'],
    'bdj-budget':                 ['atmos-pdh76', 'atmos-pdp20', 'atmos-pb82', 'kaeser-m17a', 'acc-compressor'],
    'bdj-budget-easy-set':        ['atmos-pdh76', 'atmos-pdp20', 'atmos-pb82', 'kaeser-m17a', 'acc-compressor'],
    'bdj-budget-plus':            ['atmos-pdh76', 'atmos-pdp20', 'atmos-pb82', 'kaeser-m17a', 'acc-compressor'],
    'bdj-budget-plus-easy-set':   ['atmos-pdh76', 'atmos-pdp20', 'atmos-pb82', 'kaeser-m17a', 'acc-compressor'],
    'bdj-mini':                   ['atmos-pdh76', 'atmos-pdp20', 'atmos-pb82', 'kaeser-m17a', 'acc-compressor'],
    'bdj-mini-counter':           ['atmos-pdh76', 'atmos-pdp20', 'atmos-pb82', 'kaeser-m17a', 'acc-compressor'],
    'bdj-extended':               ['atmos-pdh76', 'atmos-pdp50', 'atmos-pdp20', 'atmos-pb82', 'kaeser-m17a', 'acc-compressor'],
    'bdj-max':                    ['kaeser-m82a', 'acc-compressor'],
    'bdj-hydro-belt-cable':       ['kaeser-m82a', 'acc-compressor'],
    'bdj-hydro-chain-cable':      ['kaeser-m82a', 'acc-compressor'],
    'bdj-hydro-chain-multi-tube': ['kaeser-m82a', 'acc-compressor'],
  };

  const parseRange = (rangeStr: string): { min: number, max: number, values?: number[] } | null => {
    if (!rangeStr) return null;
    const s = rangeStr.toLowerCase();
    if (s.includes('n/a') || s.includes('wszystkie') || s.includes('multi tube') || s.includes('zależnie') || s.includes('all') || s.includes('model')) return null;
    
    const cleanStr = rangeStr.replace(/mm/gi, '').trim();
    
    // Case: "4 - 16" or "0,5 – 6"
    if (cleanStr.includes('-') || cleanStr.includes('–')) {
      const parts = cleanStr.split(/[-–]/).map(p => parseFloat(p.replace(',', '.').trim()));
      if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
        return { min: Math.min(parts[0], parts[1]), max: Math.max(parts[0], parts[1]) };
      }
    }
    
    // Case: "5, 7, 10, 12, 14, 16"
    if (cleanStr.includes(',')) {
      const values = cleanStr.split(',').map(v => parseFloat(v.replace(',', '.').trim())).filter(v => !isNaN(v));
      if (values.length > 0) {
        return { min: Math.min(...values), max: Math.max(...values), values };
      }
    }
    
    // Case: single value "10"
    const val = parseFloat(cleanStr.replace(',', '.').trim());
    if (!isNaN(val)) {
      return { min: val, max: val };
    }
    
    return null;
  };

  const handleInquirySubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after some time or on close
  };

  const closeModals = () => {
    setSelectedProduct(null);
    setActiveImage(null);
    setIsInquiryOpen(false);
    setIsSubmitted(false);
    setFormData({ firstName: '', lastName: '', company: '', taxId: '', email: '', phone: '', country: '', message: '' });
  };

  const filteredProducts = useMemo(() => {
    const search = searchQuery.toLowerCase().trim();
    return products.filter((p) => {
      const matchesSearch = !search ||
                           p.name.toLowerCase().includes(search) ||
                           (p.nameLocalized?.[lang] ?? '').toLowerCase().includes(search) ||
                           p.description[lang].toLowerCase().includes(search) ||
                           (p.subName[lang] && p.subName[lang].toLowerCase().includes(search));
      
      if (!matchesSearch) return false;

      if (selectedGroup) {
        const isAccOrComp = p.group === 'Akcesoria' || p.group === 'Kompresory';
        if (selectedGroup === 'Akcesoria') {
          if (!isAccOrComp) return false;
        } else if (p.group !== selectedGroup) {
          return false;
        }
      }

      if (cableFilter !== null) {
        const range = parseRange(p.specs.cableRange);
        if (range && (cableFilter < range.min || cableFilter > range.max)) {
          return false;
        }
      }

      if (ductFilter !== null) {
        const range = parseRange(p.specs.ductRange);
        if (range && (ductFilter < range.min || ductFilter > range.max)) {
          return false;
        }
      }
      
      return true;
    });
  }, [searchQuery, selectedGroup, cableFilter, ductFilter]);

  return (
    <div className="min-h-screen bg-white text-brand-dark font-sans selection:bg-brand-primary/20">
      {/* Logo Header */}
      <div className="py-1 md:py-2 flex justify-center bg-white sticky top-0 z-40 shadow-sm border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-3 items-center">
          <div className="flex justify-start">
            {/* Empty for balance */}
          </div>
          
          <div className="flex justify-center">
            <div className="relative h-10 md:h-16 flex items-center justify-center">
              <img 
                src="https://bluedragonjet.com/wp-content/uploads/2026/01/cropped-logo-strona.png" 
                alt="Blue Dragon Jet Logo"
                className="h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-brand-dark hover:border-brand-primary transition-all group"
              >
                <Globe className="w-4 h-4 text-zinc-400 group-hover:text-brand-primary" />
                <span className="text-xs font-bold">{lang}</span>
                <ChevronDown className={cn("w-3 h-3 text-zinc-400 transition-transform", isLangOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsLangOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-32 bg-white border border-zinc-100 rounded-2xl shadow-2xl z-20 overflow-hidden"
                    >
                      {(['PL', 'EN', 'DE', 'ES'] as Language[]).map((l) => (
                        <button
                          key={l}
                          onClick={() => {
                            setLang(l);
                            setIsLangOpen(false);
                          }}
                          className={cn(
                            "w-full px-4 py-3 text-left text-xs font-bold transition-colors flex items-center justify-between",
                            lang === l 
                              ? "bg-brand-primary/5 text-brand-primary" 
                              : "text-zinc-500 hover:bg-zinc-50 hover:text-brand-dark"
                          )}
                        >
                          {l === 'PL' ? 'Polski' : l === 'EN' ? 'English' : l === 'DE' ? 'Deutsch' : 'Español'}
                          {lang === l && <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {viewMode === 'selection' ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center min-h-[60vh]"
            >
              <div className="mb-16 text-center">
                <h2 className="text-xs font-black uppercase tracking-[0.6em] text-brand-primary mb-4">{t.catalog}</h2>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-dark">{t.selectCategory}</h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                <motion.button
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedGroup('Maszyny');
                    setViewMode('catalog');
                  }}
                  className="group relative bg-white border-2 border-zinc-100 rounded-[2rem] p-8 text-center transition-all hover:border-brand-primary shadow-xl shadow-zinc-200/50 flex flex-col items-center gap-6"
                >
                  <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center group-hover:bg-brand-primary/5 transition-all duration-500 overflow-hidden border border-zinc-100">
                    <img 
                      src="https://bluedragonjet.com/wp-content/uploads/2025/03/001-scaled.jpg" 
                      alt="BDJ Next" 
                      className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-brand-dark mb-1">{t.machines}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed max-w-[200px]">{t.machinesDesc}</p>
                  </div>
                  <div className="mt-2 w-10 h-10 rounded-full bg-white border border-zinc-100 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedGroup('Akcesoria');
                    setViewMode('catalog');
                  }}
                  className="group relative bg-white border-2 border-zinc-100 rounded-[2rem] p-8 text-center transition-all hover:border-brand-primary shadow-xl shadow-zinc-200/50 flex flex-col items-center gap-6"
                >
                  <div className="w-24 h-24 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                    <Settings2 className="w-12 h-12 text-brand-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-brand-dark mb-1">{t.accessories}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed max-w-[200px]">{t.accessoriesDesc}</p>
                  </div>
                  <div className="mt-2 w-10 h-10 rounded-full bg-white border border-zinc-100 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="catalog"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-8 md:mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="text-left">
                  <button 
                    onClick={() => setViewMode('selection')}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-brand-primary transition-colors mb-4 -ml-1"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" /> {t.backToSelection}
                  </button>
                  <h2 className="text-xs font-black uppercase tracking-[0.6em] text-brand-primary mb-4">{t.catalog}</h2>
                  <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-dark">
                    {selectedGroup === 'Maszyny' ? t.machines : t.accessories}
                  </h1>
                </div>

                <div className="relative w-full md:w-80">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input 
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-zinc-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-brand-dark placeholder:text-zinc-400"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-8 md:gap-12">
                {/* Filters Row - Only for Machines */}
                {selectedGroup === 'Maszyny' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Cable Filter */}
                    <div className="bg-white border border-zinc-100 p-6 md:p-8 rounded-3xl md:rounded-[2rem] shadow-xl shadow-zinc-200/30 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Cable className="w-24 h-24 rotate-12" />
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex justify-between items-end mb-6 md:mb-8">
                          <div>
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-1 block">
                              {t.filterCable}
                            </label>
                            <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-brand-dark flex items-baseline gap-2">
                              {cableFilter ? cableFilter : t.any}
                              {cableFilter && <span className="text-sm font-bold text-zinc-400">mm</span>}
                            </h3>
                          </div>
                          {cableFilter && (
                            <button 
                              onClick={() => setCableFilter(null)}
                              className="text-[10px] font-bold uppercase tracking-widest text-brand-primary hover:text-brand-dark transition-colors"
                            >
                              {t.all}
                            </button>
                          )}
                        </div>

                        <div className="relative py-4">
                          <input 
                            type="range" 
                            min="0" 
                            max="25" 
                            step="0.5"
                            value={cableFilter || 0}
                            onChange={(e) => {
                              const val = parseFloat(e.target.value);
                              setCableFilter(val === 0 ? null : val);
                            }}
                            className="range-input w-full"
                          />
                          <div className="flex justify-between mt-4 px-1">
                            {[0, 5, 10, 15, 20, 25].map((v) => (
                              <span key={v} className="text-[9px] font-bold text-zinc-300 font-mono">{v}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Duct Filter */}
                    <div className="bg-white border border-zinc-100 p-6 md:p-8 rounded-3xl md:rounded-[2rem] shadow-xl shadow-zinc-200/30 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Cylinder className="w-24 h-24 -rotate-12" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex justify-between items-end mb-6 md:mb-8">
                          <div>
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-1 block">
                              {t.filterDuct}
                            </label>
                            <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-brand-dark flex items-baseline gap-2">
                              {ductFilter ? ductFilter : t.any}
                              {ductFilter && <span className="text-sm font-bold text-zinc-400">mm</span>}
                            </h3>
                          </div>
                          {ductFilter && (
                            <button 
                              onClick={() => setDuctFilter(null)}
                              className="text-[10px] font-bold uppercase tracking-widest text-brand-primary hover:text-brand-dark transition-colors"
                            >
                              {t.all}
                            </button>
                          )}
                        </div>

                        <div className="relative py-4">
                          <input
                            type="range"
                            min="0"
                            max={DUCT_VALUES.length}
                            step="1"
                            value={ductFilter ? DUCT_VALUES.indexOf(ductFilter) + 1 : 0}
                            onChange={(e) => {
                              const idx = parseInt(e.target.value);
                              setDuctFilter(idx === 0 ? null : DUCT_VALUES[idx - 1]);
                            }}
                            className="range-input w-full"
                          />
                          <div className="flex justify-between mt-4 px-1">
                            {[0, 5, 10, 16, 20, 32, 40, 50].map((v) => (
                              <span key={v} className="text-[9px] font-bold text-zinc-300 font-mono">{v}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Product Grid */}
                <section className="flex-1">
                  <div className="mb-12 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                    <button 
                      onClick={() => {
                        setSelectedGroup(null);
                        setCableFilter(null);
                        setDuctFilter(null);
                        setSearchQuery('');
                      }}
                      className={cn(
                        "px-6 py-2.5 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all border shrink-0",
                        !selectedGroup 
                          ? "bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/30 glow-blue" 
                          : "bg-white border-zinc-200 text-zinc-500 hover:text-brand-dark hover:border-zinc-300"
                      )}
                    >
                      {t.all}
                    </button>
                    {groups.map((group) => (
                      <button 
                        key={group}
                        onClick={() => {
                          setSelectedGroup(group);
                          setCableFilter(null);
                          setDuctFilter(null);
                          setSearchQuery('');
                        }}
                        className={cn(
                          "px-6 py-2.5 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all border shrink-0",
                          selectedGroup === group 
                            ? "bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/30 glow-blue" 
                            : "bg-white border-zinc-200 text-zinc-500 hover:text-brand-dark hover:border-zinc-300"
                        )}
                      >
                        {t.groups[group as keyof typeof t.groups]}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                      {filteredProducts.map((product) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          whileHover={{ y: -8 }}
                          className="group relative bg-white border border-zinc-100 rounded-3xl overflow-hidden hover:border-brand-primary/50 transition-all cursor-pointer shadow-xl shadow-zinc-200/50"
                          onClick={() => setSelectedProduct(product)}
                        >
                          <div className="aspect-[4/3] overflow-hidden relative bg-white">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-60" />
                          </div>
                          
                          <div className="p-8">
                            <h3 className="text-2xl font-black mb-1 group-hover:text-brand-primary transition-colors uppercase tracking-tight text-brand-dark">
                              {getProductName(product)}
                            </h3>
                            {product.subName[lang] && (
                              <p className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-3">
                                {product.subName[lang]}
                              </p>
                            )}
                            <p className="text-sm text-zinc-500 line-clamp-2 mb-8 leading-relaxed">
                              {product.description[lang]}
                            </p>
                            
                            <div className="grid grid-cols-3 gap-4 mb-8">
                              {!isMultiTube(product.specs.cableRange) && (
                              <div className="space-y-2">
                                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                                  <Cable className="w-4 h-4 text-brand-primary" />
                                </div>
                                <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-bold block">{t.cable}</span>
                                <p className="text-[10px] font-mono text-brand-dark leading-none">{product.specs.cableRange}</p>
                              </div>
                              )}
                              <div className="space-y-2">
                                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                                  <Cylinder className="w-4 h-4 text-brand-primary" />
                                </div>
                                <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-bold block">{t.duct}</span>
                                <p className="text-[10px] font-mono text-brand-dark leading-none">{product.specs.ductRange}</p>
                              </div>
                              <div className="space-y-2">
                                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                                  <Route className="w-4 h-4 text-brand-primary" />
                                </div>
                                <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-bold block">{t.distance}</span>
                                <p className="text-[10px] font-mono text-brand-dark leading-none">{product.specs.blowingDistance[lang]}</p>
                              </div>
                            </div>

                            <button className="w-full py-4 bg-brand-primary text-white text-xs font-bold rounded-2xl transition-all flex items-center justify-center gap-2 uppercase tracking-widest border border-brand-primary shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/90">
                              {t.details} <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </section>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModals}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
            >
              <button 
                onClick={closeModals}
                className="absolute top-8 right-8 z-20 p-3 bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors text-brand-dark border border-zinc-200 backdrop-blur-xl"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="overflow-y-auto no-scrollbar">
                <AnimatePresence mode="wait">
                  {!isInquiryOpen ? (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      {/* Visual Section: Image + Gallery */}
                      <div className="flex flex-col md:flex-row border-b border-zinc-100">
                        <div className="md:w-3/5 p-8 md:p-12 bg-white flex flex-col gap-8">
                          <div 
                            className="relative aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-inner cursor-zoom-in group border border-zinc-100"
                            onClick={() => setIsZoomed(true)}
                          >
                            <img 
                              src={activeImage || selectedProduct.image} 
                              alt={selectedProduct.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-6 right-6 p-3 bg-white/80 backdrop-blur-md border border-zinc-200 rounded-xl text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">
                              <Maximize className="w-6 h-6" />
                            </div>
                          </div>

                          {/* Mini Gallery */}
                          {selectedProduct.gallery && selectedProduct.gallery.length > 0 && (
                            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                              {selectedProduct.gallery.map((img, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setActiveImage(img)}
                                  className={cn(
                                    "w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-white p-2",
                                    (activeImage === img || (!activeImage && img === selectedProduct.image))
                                      ? "border-brand-primary shadow-lg shadow-brand-primary/20" 
                                      : "border-zinc-100 opacity-60 hover:opacity-100 hover:border-zinc-300"
                                  )}
                                >
                                  <img src={img} alt={`${selectedProduct.name} view ${idx}`} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                                </button>
                              ))}
                            </div>
                          )}

                          <div className="mt-4 pt-8 border-t border-zinc-200/60">
                            <p className="text-zinc-600 leading-relaxed text-base md:text-lg font-medium">
                              {selectedProduct.description[lang]}
                            </p>
                          </div>
                        </div>

                        <div className="md:w-2/5 p-10 md:p-16 flex flex-col justify-center bg-white">
                          <div className="mb-10">
                            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.5em] mb-4 block">
                              {selectedProduct.category} Series
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 text-brand-dark leading-none">
                              {getProductName(selectedProduct)}
                            </h2>
                            {selectedProduct.subName[lang] && (
                              <p className="text-sm md:text-base font-bold text-brand-primary uppercase tracking-widest mb-6">
                                {selectedProduct.subName[lang]}
                              </p>
                            )}
                          </div>

                          {/* Quick Specs Summary - Visible on Mobile/Tablet */}
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 md:hidden">
                            {!isMultiTube(selectedProduct.specs.cableRange) && (
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                              <div className="flex items-center gap-2 mb-2">
                                <Cable className="w-3.5 h-3.5 text-brand-primary" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">{t.cable}</span>
                              </div>
                              <p className="text-xs font-black text-brand-dark">{selectedProduct.specs.cableRange}</p>
                            </div>
                            )}
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                              <div className="flex items-center gap-2 mb-2">
                                <Cylinder className="w-3.5 h-3.5 text-brand-primary" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">{t.duct}</span>
                              </div>
                              <p className="text-xs font-black text-brand-dark">{selectedProduct.specs.ductRange}</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                              <div className="flex items-center gap-2 mb-2">
                                <Route className="w-3.5 h-3.5 text-brand-primary" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">{t.distance}</span>
                              </div>
                              <p className="text-xs font-black text-brand-dark">{selectedProduct.specs.blowingDistance[lang]}</p>
                            </div>
                          </div>

                          <div className="space-y-6 mb-12">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 border-b border-zinc-100 pb-3">
                              {t.keyFeatures}
                            </h4>
                            <ul className="grid grid-cols-1 gap-4">
                              {selectedProduct.features[lang].map((feature, i) => (
                                <li key={i} className="text-sm text-zinc-600 flex items-start gap-3">
                                  <Zap className="w-4 h-4 text-brand-primary mt-0.5 shrink-0 fill-brand-primary/20" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Zalecane kompresory */}
                          {MACHINE_COMPRESSORS[selectedProduct.id] && (
                            <div className="mb-12">
                              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 border-b border-zinc-100 pb-3 mb-6">
                                {t.recommendedCompressors}
                              </h4>
                              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                                {MACHINE_COMPRESSORS[selectedProduct.id].map(cid => {
                                  const comp = products.find(p => p.id === cid);
                                  if (!comp) return null;
                                  return (
                                    <button
                                      key={cid}
                                      onClick={() => { setSelectedProduct(comp); setActiveImage(null); }}
                                      className="flex-shrink-0 w-36 text-left bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden hover:border-brand-primary hover:shadow-lg transition-all group"
                                    >
                                      <div className="h-20 bg-white flex items-center justify-center p-2 border-b border-zinc-100">
                                        <img src={comp.image} alt={comp.name} className="h-full w-full object-contain group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                                      </div>
                                      <div className="p-3">
                                        <p className="text-[10px] font-black text-brand-dark leading-tight line-clamp-2 mb-1">{comp.name}</p>
                                        <p className="text-[9px] text-brand-primary font-bold">{comp.specs.maxPressure[lang]}</p>
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button
                              onClick={() => setIsInquiryOpen(true)}
                              className="flex-1 py-5 bg-brand-primary hover:opacity-90 text-white font-bold rounded-2xl transition-all uppercase tracking-[0.2em] text-xs shadow-2xl shadow-brand-primary/40 glow-blue"
                            >
                              {t.inquiry}
                            </button>
                            <button 
                              onClick={() => {
                                document.getElementById('specs-section')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="flex-1 py-5 bg-white border border-zinc-200 text-brand-dark hover:border-brand-primary hover:text-brand-primary font-bold rounded-2xl transition-all uppercase tracking-[0.2em] text-xs md:hidden"
                            >
                              {t.specs}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Specs Table Section */}
                      <div id="specs-section" className="p-10 md:p-20 bg-white border-t border-zinc-100">
                        <div className="max-w-4xl mx-auto">
                          <h3 className="text-2xl font-black uppercase tracking-tighter mb-12 text-brand-dark flex items-center gap-4">
                            <FileText className="w-8 h-8 text-brand-primary" />
                            {t.specs}
                          </h3>
                          
                          <div className="overflow-hidden border border-zinc-200 rounded-3xl bg-white shadow-sm">
                            <table className="w-full text-left border-collapse">
                              <thead className="hidden sm:table-header-group">
                                <tr className="bg-zinc-50 border-b border-zinc-100">
                                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-800">Parametr</th>
                                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-800">Wartość</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-zinc-100">
                                {!isMultiTube(selectedProduct.specs.cableRange) && <TableRow label={t.cable} value={selectedProduct.specs.cableRange} icon={<Cable className="w-4 h-4" />} />}
                                <TableRow label={t.duct} value={selectedProduct.specs.ductRange} icon={<Cylinder className="w-4 h-4" />} />
                                <TableRow label={t.distance} value={selectedProduct.specs.blowingDistance[lang]} icon={<Route className="w-4 h-4" />} />
                                <TableRow label={t.pressure} value={selectedProduct.specs.maxPressure[lang]} icon={<Gauge className="w-4 h-4" />} />
                                <TableRow label={t.weight} value={selectedProduct.specs.weight} icon={<Weight className="w-4 h-4" />} />
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="inquiry"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="p-10 md:p-20 min-h-[600px] flex flex-col items-center justify-center"
                    >
                      {!isSubmitted ? (
                        <div className="w-full max-w-lg">
                          <button 
                            onClick={() => setIsInquiryOpen(false)}
                            className="mb-8 text-xs font-bold text-zinc-400 uppercase tracking-widest hover:text-brand-primary transition-colors flex items-center gap-2"
                          >
                            <ArrowRight className="w-4 h-4 rotate-180" /> {lang === 'PL' ? 'Powrót' : 'Back'}
                          </button>
                          
                          <div className="mb-10">
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-brand-dark">
                              {t.inquiry}
                            </h2>
                            <p className="text-zinc-500">
                              {lang === 'PL' ? 'Wypełnij formularz dla modelu' : 'Fill the form for model'} <span className="text-brand-primary font-bold">{getProductName(selectedProduct)}</span>.
                            </p>
                          </div>

                          <form onSubmit={handleInquirySubmit} className="space-y-6">
                            {/* Imię i Nazwisko */}
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">{t.formFirstName}</label>
                                <div className="relative">
                                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                  <input
                                    required
                                    type="text"
                                    placeholder={t.formFirstName}
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-brand-dark"
                                  />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">{t.formLastName}</label>
                                <div className="relative">
                                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                  <input
                                    required
                                    type="text"
                                    placeholder={t.formLastName}
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-brand-dark"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Nazwa firmy */}
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">{t.formCompany}</label>
                              <div className="relative">
                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                <input
                                  required
                                  type="text"
                                  placeholder={t.formCompany}
                                  value={formData.company}
                                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-brand-dark"
                                />
                              </div>
                            </div>

                            {/* NIP / VAT */}
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">{t.formTaxId}</label>
                              <div className="relative">
                                <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                <input
                                  required
                                  type="text"
                                  placeholder="NIP / VAT"
                                  value={formData.taxId}
                                  onChange={(e) => setFormData({...formData, taxId: e.target.value})}
                                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-brand-dark"
                                />
                              </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">{t.formEmail}</label>
                              <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                <input
                                  required
                                  type="email"
                                  placeholder="twoj@email.com"
                                  value={formData.email}
                                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-brand-dark"
                                />
                              </div>
                            </div>

                            {/* Telefon */}
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">{t.formPhone}</label>
                              <div className="bg-white border border-zinc-200 rounded-2xl px-4 py-3 focus-within:border-brand-primary focus-within:ring-4 focus-within:ring-brand-primary/10 transition-all">
                                <PhoneInput
                                  international
                                  defaultCountry="PL"
                                  value={formData.phone}
                                  onChange={(val) => setFormData({ ...formData, phone: val || '' })}
                                  className="phone-input-custom"
                                />
                              </div>
                            </div>

                            {/* Kraj */}
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">{t.formCountry}</label>
                              <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                <input
                                  required
                                  type="text"
                                  placeholder={t.formCountry}
                                  value={formData.country}
                                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-brand-dark"
                                />
                              </div>
                            </div>

                            {/* Wiadomość */}
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">{t.formMessage}</label>
                              <div className="relative">
                                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-zinc-400" />
                                <textarea
                                  rows={4}
                                  placeholder="..."
                                  value={formData.message}
                                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-brand-dark resize-none"
                                />
                              </div>
                            </div>

                            <button 
                              disabled={isSubmitting}
                              type="submit"
                              className="w-full py-5 bg-brand-primary hover:opacity-90 disabled:opacity-50 text-white font-bold rounded-2xl transition-all uppercase tracking-[0.2em] text-xs shadow-2xl shadow-brand-primary/40 flex items-center justify-center gap-3"
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="w-5 h-5 animate-spin" /> {t.formSubmit}...
                                </>
                              ) : (
                                <>{t.formSubmit} <ArrowRight className="w-4 h-4" /></>
                              )}
                            </button>
                          </form>
                        </div>
                      ) : (
                        <motion.div 
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="text-center max-w-md"
                        >
                          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                            <CheckCircle className="w-12 h-12 text-green-500" />
                          </div>
                          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-brand-dark">
                            {t.formSuccess}
                          </h2>
                          <p className="text-zinc-500 mb-10 leading-relaxed">
                            {t.formSuccessMsg}
                          </p>
                          <button 
                            onClick={closeModals}
                            className="px-10 py-4 bg-brand-dark text-white font-bold rounded-2xl transition-all uppercase tracking-widest text-xs hover:bg-brand-primary"
                          >
                            {t.formClose}
                          </button>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && selectedProduct && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-7xl h-full flex items-center justify-center"
            >
              <button 
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={activeImage || selectedProduct.image} 
                alt={selectedProduct.name}
                className="max-w-full max-h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

function TableRow({ label, value, icon }: { label: string, value: string, icon?: ReactNode }) {
  return (
    <tr className="hover:bg-zinc-50 transition-colors flex flex-col sm:table-row border-b border-zinc-100 sm:border-none">
      <td className="px-6 sm:px-8 py-4 sm:py-5 text-xs font-black text-zinc-600 uppercase tracking-tight">
        <div className="flex items-center gap-3">
          {icon && <div className="text-brand-primary shrink-0">{icon}</div>}
          <span className="truncate">{label}</span>
        </div>
      </td>
      <td className="px-6 sm:px-8 py-4 sm:py-5 text-xs font-mono font-black text-brand-primary bg-zinc-50/50 sm:bg-transparent">
        {value}
      </td>
    </tr>
  );
}
