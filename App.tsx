import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ShieldCheck, Building2, AlertTriangle, Globe, CheckCircle2, Info, MapPin } from 'lucide-react';
import { CopyableField } from './components/CopyableField';
import { AnimatePresence, motion } from 'framer-motion';

// --- Types ---
interface SlideData {
  id: number;
  title: string;
  content: React.ReactNode;
  bgImage?: string;
}

// --- Main Component ---
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides: SlideData[] = [
    // Slide 1: Portada
    {
      id: 0,
      title: "Bienvenida",
      bgImage: "https://picsum.photos/id/10/1920/1080", // Nature/Texture placeholder
      content: (
        <div className="h-full flex flex-col justify-center items-center text-center px-6">
          <div className="mb-8 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl">
            <Globe size={64} className="text-brand-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2 tracking-tight">
            WAY OF LIFE LLC
          </h1>
          <p className="text-xl text-gray-500 font-medium uppercase tracking-widest mb-8">
            Albuquerque, USA 🇺🇸
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full border-t-4 border-brand-primary">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Guía de Pagos Internacionales</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Cómo abonar tus servicios desde Europa de forma sencilla, segura y en tu propia moneda.
            </p>
            <div className="space-y-2 text-left">
                <div className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={20} className="text-green-500" /> <span>Sin complicaciones</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={20} className="text-green-500" /> <span>100% Seguro</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={20} className="text-green-500" /> <span>En Euros (EUR) 💶</span>
                </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 2: La Ficha de Pago
    {
      id: 1,
      title: "Datos Bancarios",
      content: (
        <div className="h-full flex flex-col px-6 py-8 max-w-3xl mx-auto overflow-y-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-lg text-brand-primary">
                <Building2 size={32} />
            </div>
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Datos para tu Transferencia</h2>
                <p className="text-gray-500 text-sm md:text-base">Introduce estos datos EXACTOS en tu banca online.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                Configuración del Envío
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="text-xs text-gray-500 uppercase">Moneda de envío</span>
                    <p className="text-lg font-bold text-gray-900">💶 EUROS (EUR)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <span className="text-xs text-gray-500 uppercase">País de Destino</span>
                    <p className="text-lg font-bold text-gray-900">🇺🇸 Estados Unidos</p>
                </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border-l-4 border-brand-primary p-4 md:p-6">
             <h3 className="font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                Datos del Beneficiario y Banco
            </h3>
            
            <div className="space-y-6">
                {/* Sección SWIFT / Banco Receptor */}
                <div className="p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                    <h4 className="text-sm font-bold text-blue-900 mb-3 uppercase tracking-wide">A. Banco Receptor (Receiving Bank)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                        <CopyableField label="Código SWIFT / BIC" value="CHASUS33" highlight={true} />
                        <div className="mb-4">
                            <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1">Nombre del Banco</p>
                            <p className="text-base font-medium text-gray-800">JP Morgan Chase Bank, N.A.</p>
                            <p className="text-xs text-gray-500 mt-1 italic">(Si tu banco autocompleta este nombre, es correcto)</p>
                        </div>
                        <div className="md:col-span-2 mt-2">
                            <div className="flex gap-2 text-xs text-gray-600">
                                <MapPin size={14} className="shrink-0 mt-0.5" />
                                <span>383 Madison Avenue, Floor 23, New York, NY 10017, USA</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección Beneficiario Final */}
                <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">B. Beneficiario Final (Beneficiary)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        <CopyableField label="Nombre del Beneficiario" value="Choice Financial Group" />
                        <CopyableField label="Número de Cuenta" value="707567692" />
                        <div className="md:col-span-2">
                            <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1">Dirección del Beneficiario</p>
                            <div className="flex gap-2 text-sm text-gray-700 bg-gray-50 p-2 rounded border border-gray-200">
                                <MapPin size={16} className="shrink-0 mt-0.5 text-gray-400" />
                                <span>4501 23rd Ave S, Fargo, ND 58104, USA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 rounded-lg text-sm text-amber-800 border border-amber-100">
            <Info className="shrink-0 mt-0.5" size={18} />
            <p><strong>Nota importante:</strong> Aunque la cuenta es de "Way of Life LLC", el titular bancario oficial es <strong>Choice Financial Group</strong>. Usa los datos tal cual aparecen arriba.</p>
          </div>
        </div>
      )
    },
    // Slide 3: El Paso de Oro
    {
      id: 2,
      title: "Referencia Obligatoria",
      content: (
        <div className="h-full flex flex-col justify-center items-center px-6 py-8 max-w-3xl mx-auto text-center">
            <div className="mb-6 text-brand-accent animate-bounce">
                <AlertTriangle size={64} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¡IMPORTANTE! 
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Para que el dinero llegue a <strong>Way of Life LLC</strong>, es <strong>OBLIGATORIO</strong> que pegues el siguiente código en el apartado <strong>"Concepto"</strong>, <strong>"Referencia"</strong> o <strong>"Memo"</strong>.
            </p>

            <div className="w-full max-w-2xl">
                <CopyableField 
                    label="Copia esto en el 'Concepto' (incluye las barras / /):" 
                    value="/FFC/202270698409/WAY OF LIFE LLC/Albuquerque, USA" 
                    isCode={true}
                    highlight={true}
                />
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl shadow-md text-left max-w-xl">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <ShieldCheck size={20} className="text-green-600"/>
                    ¿Qué significa esto?
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                    <strong>FFC</strong> = "For Final Credit".
                </p>
                <p className="text-sm text-gray-600">
                    Le indica al banco receptor (JP Morgan) que el dinero debe ir a la cuenta final de Way of Life LLC. <strong>Si olvidas este código, la transferencia será rechazada automáticamente.</strong>
                </p>
            </div>
        </div>
      )
    },
    // Slide 4: Cierre
    {
      id: 3,
      title: "Finalizar",
      content: (
        <div className="h-full flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Tienes alguna duda?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-md">
            Estamos aquí para ayudarte. Si tu banco te pide algún dato extra, contáctanos inmediatamente.
          </p>
          
          <div className="bg-brand-dark text-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Presentado por</p>
            <h3 className="text-2xl font-bold mb-4">Way of Life LLC</h3>
            <div className="h-px w-full bg-gray-700 my-4"></div>
            <div className="flex items-center justify-center gap-2 text-gray-300 text-sm">
                <span>Banking with Mercury 🇺🇸</span>
            </div>
          </div>

          <button 
            onClick={() => { setCurrentSlide(0); setDirection(-1); }}
            className="mt-12 text-brand-primary hover:underline font-medium"
          >
            Volver al inicio
          </button>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden flex flex-col relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Header / Progress */}
      <div className="relative z-20 bg-white/80 backdrop-blur-md border-b border-gray-200 h-16 flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-md flex items-center justify-center text-white font-bold text-sm">
                WL
            </div>
            <span className="font-semibold text-gray-700 hidden md:block">Way of Life LLC</span>
        </div>
        <div className="flex gap-2">
            {slides.map((s, idx) => (
                <div 
                    key={s.id} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-brand-primary' : 'w-2 bg-gray-300'}`}
                />
            ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 w-full h-full overflow-y-auto no-scrollbar"
          >
            <div className="min-h-full w-full max-w-5xl mx-auto pt-8 pb-24">
                {slides[currentSlide].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Footer (Fixed) */}
      <div className="relative z-20 bg-white border-t border-gray-200 p-4 md:p-6 flex items-center justify-between max-w-screen mx-auto w-full">
        <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors font-medium
                ${currentSlide === 0 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
        >
            <ChevronLeft size={20} />
            <span className="hidden md:inline">Anterior</span>
        </button>

        <span className="text-sm font-medium text-gray-400">
            {currentSlide + 1} / {slides.length}
        </span>

        <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all shadow-lg font-medium
                ${currentSlide === slides.length - 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                    : 'bg-brand-primary text-white hover:bg-blue-900 hover:scale-105'
                }`}
        >
            <span className="hidden md:inline">Siguiente</span>
            <span className="md:hidden">Siguiente</span>
            <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}