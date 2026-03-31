"use client"

import { useEffect, useRef, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { GradientWave } from "@/components/ui/gradient-wave"
import { Check, Monitor, Wifi, CreditCard, FileText, ShieldCheck, Calendar, Video, Receipt, Lightbulb } from "lucide-react"

// Custom hook for intersection observer animations
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
      }
    }, { threshold: 0.1, ...options })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isInView }
}

// Animated section wrapper
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useInView()
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const scrollToCalendly = () => {
    const el = document.getElementById("calendly")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  // Initialize Cal.com embed — cotizacion-seguro-en-exceso
  useEffect(() => {
    const initCal = () => {
      const win = window as any

      ;(function (C: any, A: string, L: string) {
        let p = function (a: any, ar: any) { a.q.push(ar) }
        let d = C.document
        C.Cal = C.Cal || function (...args: any[]) {
          let cal = C.Cal
          let ar = args
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            d.head.appendChild(d.createElement("script")).src = A
            cal.loaded = true
          }
          if (ar[0] === L) {
            const api: any = function (...a: any[]) { p(api, a) }
            const namespace = ar[1]
            api.q = api.q || []
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api
              p(cal.ns[namespace], ar)
              p(cal, ["initNamespace", namespace])
            } else {
              p(cal, ar)
            }
            return
          }
          p(cal, ar)
        }
      })(win, "https://app.cal.com/embed/embed.js", "init")

      win.Cal("init", "cotizacion-seguro-en-exceso", { origin: "https://app.cal.com" })

      win.Cal.ns["cotizacion-seguro-en-exceso"]("inline", {
        elementOrSelector: "#my-cal-inline-cotizacion-seguro-en-exceso",
        config: {
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
        },
        calLink: "seguro-en-exceso-w2dgw1/cotizacion-seguro-en-exceso",
      })

      win.Cal.ns["cotizacion-seguro-en-exceso"]("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#002E6F" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    }

    const timer = setTimeout(initCal, 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToCandidate = () => {
    const el = document.getElementById("candidato")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen font-sans overflow-x-hidden">

      {/* FLOATING BUTTON */}
      <button
        onClick={scrollToCalendly}
        className="fixed bottom-6 right-6 z-50 shadow-lg px-5 py-3 rounded-full text-white text-sm font-semibold transition-all hover:scale-105 hover:shadow-xl animate-pulse"
        style={{ backgroundColor: "#1565c0" }}
        aria-label="Agendar Cita"
      >
        Agendar Cita
      </button>

      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden min-h-screen flex flex-col" style={{ backgroundColor: "#0a1a3a" }}>
        <GradientWave
          colors={["#0a1a3a", "#0d2a5c", "#1565c0", "#0a2040", "#0a1a3a"]}
          shadowPower={4}
          darkenTop={false}
          noiseFrequency={[0.0001, 0.0002]}
          deform={{ incline: 0.15, noiseAmp: 120, noiseFlow: 1.5 }}
        />
        <nav className="relative z-10 px-6 py-5 md:px-12 flex items-center justify-between animate-fade-in">
          <div className="flex items-center gap-2">
            <img src="/images/logo-ebya.png" alt="EB&A Logo" className="h-8 w-auto" />
          </div>
        </nav>

        <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center px-6 md:px-12 pb-16 gap-12">
          <div className="flex-1 flex flex-col justify-center pt-8 md:pt-0">
            <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <span className="text-xs px-3 py-1 rounded-full text-white/80" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                Beneficio para Colaboradores
              </span>
            </div>
            <p className="text-2xl uppercase tracking-widest mb-4 animate-slide-up font-semibold" style={{ color: "#60a5fa", animationDelay: "0.2s" }}>
              Seguro en Exceso
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-balance mb-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              Ya conoces el seguro.<br />
              <span style={{ color: "#60a5fa" }}>Es momento de protegerte.</span>
            </h1>
            <div className="flex flex-wrap gap-4 mt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <button
                onClick={scrollToCalendly}
                className="px-8 py-4 text-base font-semibold text-white rounded-lg transition-all hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "#1565c0" }}
              >
                Agendar Cita
              </button>
              <button
                onClick={scrollToCandidate}
                className="px-8 py-4 text-base font-medium rounded-lg transition-all hover:bg-white/20"
                style={{ color: "#bfdbfe", border: "1px solid rgba(191,219,254,0.3)" }}
              >
                Saber más
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative w-full max-w-md aspect-square">
              <div className="w-full h-full rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 24px 64px rgba(0,0,0,0.3)" }}>
                <img src="/images/family-hero.png" alt="Padre jugando con su hijo - Familia protegida" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 z-10">
                {[
                  { value: "100%", label: "en línea" },
                  { value: "30", label: "minutos" },
                  { value: "24hrs", label: "Póliza en" },
                ].map(({ value, label }, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center justify-center py-4 px-3 rounded-2xl backdrop-blur-lg" style={{ backgroundColor: "rgba(45, 65, 100, 0.5)", border: "1px solid rgba(255,255,255,0.25)", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
                    {i === 2 ? (
                      <>
                        <span className="text-sm text-white/90 font-medium">{label}</span>
                        <span className="text-2xl md:text-3xl font-extrabold text-white leading-none mt-1">{value}</span>
                      </>
                    ) : (
                      <>
                        <span className="text-2xl md:text-3xl font-extrabold text-white leading-none">{value}</span>
                        <span className="text-sm mt-1 text-white/90 font-medium">{label}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ¿ERES CANDIDATO? */}
      <section id="candidato" style={{ backgroundColor: "#ffffff" }} className="px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: "#0a1a3a" }}>¿Eres candidato?</h2>
          </AnimatedSection>
          <div className="grid gap-4">
            {[
              "Tienes entre 25 y 65 años",
              "Formas parte de la póliza colectiva de tu empresa",
              "Te encuentras en buen estado de salud, sin enfermedades crónicas*",
            ].map((item, i) => (
              <AnimatedSection key={item} delay={i * 100}>
                <div className="flex items-start gap-4 p-4 rounded-lg transition-all hover:shadow-md hover:scale-[1.02]" style={{ backgroundColor: "#f8fafc" }}>
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1565c0" }}>
                    <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </span>
                  <span className="text-base leading-relaxed" style={{ color: "#374151" }}>{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={400}>
            <p className="text-sm mt-6 p-4 rounded-lg" style={{ color: "#6b7280", backgroundColor: "#fef3c7" }}>
              *Si cuentas con alguna condición preexistente, aún puedes aplicar — tu caso se evalúa a través de un proceso de selección médica personalizado. Agenda tu cita y te orientamos sin compromiso.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 — ¿QUIÉNES PUEDEN CONTRATAR? */}
      <section style={{ backgroundColor: "#f1f5f9" }} className="px-6 py-16 md:px-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0a1a3a" }}>¿Quiénes pueden contratar?</h2>
            <p className="text-lg leading-relaxed" style={{ color: "#475569" }}>
              Pueden contratar todos los miembros registrados en la póliza colectiva de su empresa: <strong>titular, cónyuge e hijos dependientes</strong>, siempre que cumplan con los requisitos de candidato y se encuentren activos en la póliza colectiva.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4 — COBERTURAS */}
      <section style={{ backgroundColor: "#ffffff" }} className="px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-lg uppercase tracking-widest mb-3 font-semibold" style={{ color: "#1565c0" }}>Protección completa</p>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0a1a3a" }}>Coberturas del Seguro en Exceso</h2>
              <p className="text-base mt-4 max-w-2xl mx-auto" style={{ color: "#64748b" }}>Tu póliza incluye coberturas estándar y opciones personalizables para adaptarse a tus necesidades.</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={100}>
              <div className="rounded-xl overflow-hidden h-full transition-all hover:shadow-lg" style={{ border: "1px solid #e2e8f0" }}>
                <div className="p-6" style={{ backgroundColor: "#0a1a3a" }}>
                  <h3 className="text-xl font-bold text-white">Coberturas Estándar</h3>
                  <p className="text-sm mt-1" style={{ color: "#93c5fd" }}>Incluidas en todos los planes</p>
                </div>
                <div className="p-6">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left text-sm font-medium pb-4" style={{ color: "#64748b" }}>Cobertura</th>
                        <th className="text-center text-sm font-medium pb-4" style={{ color: "#64748b" }}>Incluida</th>
                      </tr>
                    </thead>
                    <tbody>
                      {["Gastos Hospitalarios","Honorarios Médicos","Auxiliares de Diagnóstico","Medicamentos","Ambulancia","Asistencia Telefónica 24/7","Asistencia en Viaje"].map((item) => (
                        <tr key={item} className="transition-colors hover:bg-slate-50" style={{ borderBottom: "1px solid #f1f5f9" }}>
                          <td className="py-3 text-sm" style={{ color: "#374151" }}>{item}</td>
                          <td className="py-3 text-center"><Check className="w-5 h-5 mx-auto" style={{ color: "#1565c0" }} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="rounded-xl overflow-hidden h-full transition-all hover:shadow-lg" style={{ border: "2px solid #1565c0" }}>
                <div className="p-6" style={{ backgroundColor: "#1565c0" }}>
                  <h3 className="text-xl font-bold text-white">Personaliza tu Plan</h3>
                  <p className="text-sm mt-1 text-blue-100">Adapta tu cobertura a tus necesidades</p>
                </div>
                <div className="p-6" style={{ backgroundColor: "#f8fafc" }}>
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left text-sm font-medium pb-4" style={{ color: "#64748b" }}>Cobertura Adicional</th>
                        <th className="text-right text-sm font-medium pb-4" style={{ color: "#64748b" }}>Opciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Red Hospitalaria", value: "Óptima / Premium", desc: "Elige tu red de hospitales" },
                        { name: "Tabulador Médicos", value: "A, B, C, D o E", desc: "Define tu nivel de cobertura" },
                        { name: "Plan Dental", value: "Disponible", desc: "Cobertura dental opcional" },
                        { name: "Plan Visión", value: "Disponible", desc: "Cobertura óptica opcional" },
                      ].map(({ name, value, desc }) => (
                        <tr key={name} className="transition-colors hover:bg-white" style={{ borderBottom: "1px solid #e2e8f0" }}>
                          <td className="py-4">
                            <span className="text-sm font-medium block" style={{ color: "#374151" }}>{name}</span>
                            <span className="text-xs" style={{ color: "#9ca3af" }}>{desc}</span>
                          </td>
                          <td className="py-4 text-right">
                            <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "#eff6ff", color: "#1565c0" }}>{value}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={300}>
            <p className="text-sm mt-8 text-center" style={{ color: "#64748b" }}>Las coberturas y costos exactos se revisan y personalizan durante tu cita con un asesor especializado.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 — MAPFRE */}
      <section style={{ backgroundColor: "#0a1a3a" }} className="px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: "#60a5fa" }}>Respaldado por</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-12">MAPFRE</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { stat: "40+", label: "países con presencia internacional" },
              { stat: "Calificación A", label: "Excelente — AM Best" },
              { stat: "Líder", label: "En el mercado mexicano por décadas" },
            ].map(({ stat, label }, i) => (
              <AnimatedSection key={stat} delay={i * 100}>
                <div className="p-6 rounded-xl transition-all hover:scale-105" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(96,165,250,0.2)" }}>
                  <p className="text-white text-2xl font-bold">{stat}</p>
                  <p className="text-sm mt-2" style={{ color: "#93c5fd" }}>{label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={400}>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#bfdbfe" }}>MAPFRE emite y opera tu póliza. Una de las aseguradoras más sólidas del mundo.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6 — EB&A */}
      <section style={{ backgroundColor: "#ffffff" }} className="px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#1565c0" }}>Tu agente de confianza</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: "#0a1a3a" }}>EB&amp;A gestiona tu póliza con MAPFRE</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { stat: "Desde 1968", label: "Protegiendo patrimonios en México" },
              { stat: "+40", label: "Aseguradoras con las que trabajamos" },
              { stat: "CNSF", label: "Agente legalmente certificado" },
            ].map(({ stat, label }, i) => (
              <AnimatedSection key={stat} delay={i * 100}>
                <div className="p-6 rounded-xl transition-all hover:shadow-md hover:scale-105" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                  <p className="font-bold text-2xl" style={{ color: "#0a1a3a" }}>{stat}</p>
                  <p className="text-sm mt-2" style={{ color: "#64748b" }}>{label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={400}>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#475569" }}>
              EB&amp;A es el broker autorizado por la CNSF que gestiona tu contratación, administra tu póliza, maneja la cobranza y te acompaña en cada etapa, incluyendo en caso de siniestro. Somos el puente entre tú y MAPFRE.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 — PROCESO DE LA CITA */}
      <section style={{ backgroundColor: "#f1f5f9" }} className="px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: "#0a1a3a" }}>¿Qué va a pasar en tu cita?</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Calendar, title: "Agendas tu cita", desc: "Elige el día y hora que mejor te acomode." },
              { icon: Video, title: "Videollamada 20 min", desc: "Cuestionario médico breve y datos biométricos." },
              { icon: CreditCard, title: "Pagas con tarjeta", desc: "Pago seguro en línea al finalizar." },
              { icon: Receipt, title: "Recibes tu póliza", desc: "En menos de 24 horas en tu correo." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 100}>
                <div className="relative p-6 rounded-xl bg-white transition-all hover:shadow-lg hover:scale-105" style={{ border: "1px solid #e2e8f0" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#eff6ff" }}>
                    <Icon className="w-6 h-6" style={{ color: "#1565c0" }} />
                  </div>
                  <span className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: "#1565c0", color: "white" }}>{i + 1}</span>
                  <p className="font-semibold text-base mb-2" style={{ color: "#0a1a3a" }}>{title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={500}>
            <div className="mt-10 rounded-2xl overflow-hidden transition-all hover:shadow-lg" style={{ boxShadow: "0 4px 24px rgba(251,146,60,0.15)" }}>
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #f59e0b, #fb923c)" }} />
              <div className="p-5 flex items-start gap-4" style={{ backgroundColor: "#fffbeb", border: "1px solid #fde68a", borderTop: "none" }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: "#fef3c7" }}>
                  <Lightbulb className="w-5 h-5" style={{ color: "#d97706" }} />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1 uppercase tracking-wide" style={{ color: "#b45309" }}>Tip importante</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#78350f" }}>
                    Para hacer válida tu Póliza en Exceso ante cualquier siniestro, necesitarás presentar también tu certificado de seguro colectivo. Tenlo a la mano desde hoy.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 8 — REQUISITOS PARA LA CITA */}
      <section style={{ backgroundColor: "#ffffff" }} className="px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#0a1a3a" }}>¿Qué necesitas para tu cita?</h2>
            <p className="mb-10 text-base" style={{ color: "#64748b" }}>Prepárate en menos de 5 minutos.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Monitor, text: "Dispositivo con cámara y micrófono (celular o computadora)" },
              { icon: Wifi, text: "Buena conexión a internet" },
              { icon: CreditCard, text: "Tarjeta de crédito" },
              { icon: FileText, text: "Saber tu suma asegurada actual" },
              { icon: FileText, text: "Certificado o credencial de tu póliza colectiva (recomendable, no indispensable)" },
            ].map(({ icon: Icon, text }, i) => (
              <AnimatedSection key={text} delay={i * 80}>
                <div className="flex items-start gap-4 p-4 rounded-xl transition-all hover:shadow-md hover:scale-[1.02]" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#eff6ff" }}>
                    <Icon className="w-5 h-5" style={{ color: "#1565c0" }} />
                  </div>
                  <span className="text-sm leading-relaxed pt-2" style={{ color: "#374151" }}>{text}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section style={{ backgroundColor: "#f1f5f9" }} className="px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#0a1a3a" }}>FAQ</h2>
            <p className="mb-10 text-base" style={{ color: "#64748b" }}>Preguntas frecuentes sobre el Seguro en Exceso</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { q: "Mi póliza de grupo ya tiene cláusula de conversión, ¿para qué necesito una póliza en exceso?", a: "La cláusula de conversión solo te permite salir del seguro colectivo y pasar a una póliza individual con los mismos términos — la misma suma asegurada, sin más. La póliza en exceso hace algo distinto: suma protección adicional hoy, mientras sigues en la empresa, y se convierte en tu póliza principal el día que la necesites." },
                { q: "Mi póliza colectiva no es de MAPFRE, ¿aún así puedo contratar?", a: "Sí. La póliza en exceso funciona como complemento de cualquier seguro de grupo, sin importar qué aseguradora lo opera." },
                { q: "¿Cuándo recibo mi póliza?", a: "En menos de 24 horas después de completar tu cotización y cuestionario médico — siempre que no se requieran estudios adicionales. Todo por correo electrónico." },
                { q: "¿Cómo hago una reclamación con mi póliza en exceso?", a: "El proceso es en dos capas: primero se atiende el siniestro con tu seguro de empresa hasta su límite. Si el gasto lo supera, tu póliza en exceso se activa como segunda capa, siguiendo el procedimiento de reclamación de MAPFRE. EB&A te acompaña en cada paso." },
                { q: "¿Qué pasa con mi antigüedad al salir de la empresa?", a: "Tu antigüedad puede reconocerse al hacer la transición del seguro colectivo a la póliza en exceso, ayudando a evitar o reducir periodos de espera y manteniendo la continuidad de tu cobertura — sin empezar de cero. Esto depende del diseño específico de tu póliza." },
                { q: "¿Las preexistencias están cubiertas?", a: "No. Un padecimiento diagnosticado antes de contratar sigue siendo preexistencia y no está cubierto. Por eso el momento ideal para contratar es ahora, mientras estás sano: todo lo que aparezca después de la contratación se puede quedar cubierto, ya sea dentro o fuera de tu póliza colectiva." },
                { q: "¿EB&A es lo mismo que MAPFRE?", a: "No. EB&A es tu broker: te asesora, gestiona tu póliza y te acompaña en todo el proceso. MAPFRE es la aseguradora que emite y respalda tu póliza. Roles distintos, equipo completo." },
                { q: "¿Cuál es el mejor momento para contratar?", a: "Ahora. La póliza en exceso se contrata con salud, no cuando ya hay un diagnóstico. Entre más pronto la tengas, más completa y accesible es tu protección." },
                { q: "¿Qué pasa si nunca la uso?", a: "Es como el cinturón de seguridad: esperas no necesitarlo nunca. Pero si algún día tu cuenta hospitalaria supera la suma asegurada de tu empresa, tu póliza en exceso protege tu patrimonio. Esa tranquilidad no tiene precio." },
                { q: "¿Qué pasa si mi empresa cambia de aseguradora?", a: "En la mayoría de los casos, tu póliza en exceso puede seguir operando sobre el nuevo seguro de grupo sin perder continuidad. Cuando eso ocurre, EB&A revisa el nuevo plan y ajusta la estructura si es necesario." },
              ].map(({ q, a }, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-xl overflow-hidden bg-white transition-all hover:shadow-md" style={{ border: "1px solid #e2e8f0" }}>
                  <AccordionTrigger className="text-left text-base font-medium px-6 py-4 hover:no-underline" style={{ color: "#0a1a3a" }}>{q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed px-6 pb-4" style={{ color: "#475569" }}>{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 10 — CAL.COM */}
      <section id="calendly" style={{ backgroundColor: "#ffffff" }} className="px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0a1a3a" }}>Agenda tu cita</h2>
              <p className="text-base mb-6" style={{ color: "#64748b" }}>
                Selecciona el día y hora que mejor te acomode. La videollamada dura aproximadamente 30 minutos.
              </p>
              <div className="space-y-3">
                {["100% en línea", "Sin compromiso", "Asesoría personalizada"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5" style={{ color: "#1565c0" }} />
                    <span className="text-sm" style={{ color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div
                className="w-full rounded-2xl overflow-hidden transition-all hover:shadow-xl"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  minHeight: "600px",
                  boxShadow: "0 4px 24px rgba(0,46,111,0.08)"
                }}
              >
                {/* Cal.com inline embed — cotizacion-seguro-en-exceso */}
                <div
                  id="my-cal-inline-cotizacion-seguro-en-exceso"
                  style={{ width: "100%", height: "100%", overflow: "scroll" }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#0a1a3a" }} className="px-6 py-12 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between gap-10">
            <div>
              <div className="mb-3">
                <img src="/images/logo-ebya.png" alt="EB&A Logo" className="h-8 w-auto" />
              </div>
              <p className="text-sm" style={{ color: "#93c5fd" }}>Protección Patrimonial Personalizada</p>
            </div>
            <div className="text-sm space-y-2" style={{ color: "#bfdbfe" }}>
              <p><span className="font-medium text-white">CDMX:</span> Mariano Escobedo 556, Col. Anzures, 11590 CDMX</p>
              <p>Tel: 55 5029 1400</p>
              <p className="mt-4"><span className="font-medium text-white">QRO:</span> Hacienda de Buenavista #310-7, Jardines de la Hacienda</p>
              <p>Tel: 442 295 3699</p>
            </div>
            <div className="text-sm" style={{ color: "#bfdbfe" }}>
              <a href="mailto:seguros@ebya.mx" className="hover:text-white transition-colors">seguros@ebya.mx</a>
              <p className="mt-4"><a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a></p>
            </div>
          </div>
          <div className="mt-10 pt-8 text-center text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "#64748b" }}>
            © {new Date().getFullYear()} EB&amp;A Protección Patrimonial. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  )
}