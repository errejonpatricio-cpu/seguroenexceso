"use client";

import { useState } from "react";

const tarifas: Record<string, { anual: Record<number, number>; mensual: Record<number, number> }> = {
  H: {
    anual:   { 25: 5933.66, 30: 6304.39, 35: 6639.58, 40: 7203.16, 45: 7928.16, 50: 8866.10, 55: 10314.96 },
    mensual: { 25: 485.44,  30: 519.42,  35: 550.14,  40: 601.81,  45: 668.26,  50: 754.24,  55: 887.00  },
  },
  M: {
    anual:   { 25: 5965.91, 30: 6356.04, 35: 6864.85, 40: 7482.73, 45: 8526.03, 50: 9100.42, 55: 10478.03 },
    mensual: { 25: 488.38,  30: 524.15,  35: 570.79,  40: 627.43,  45: 723.07,  50: 775.72,  55: 902.00  },
  },
};

const edades = [25, 30, 35, 40, 45, 50, 55];

function fmt(n: number) {
  return "$ " + n.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function CotizadorExceso() {
  const [sexo, setSexo] = useState<"H" | "M">("H");
  const [edad, setEdad] = useState<number | null>(null);

  function cerrar() {
    setEdad(null);
  }

  const anual   = edad ? tarifas[sexo].anual[edad]   : null;
  const mensual = edad ? tarifas[sexo].mensual[edad] : null;

  return (
    <div className="flex items-center justify-center p-6">
      <div className="relative w-full max-w-[420px] bg-white rounded-[32px] border border-[#dde3f0] overflow-hidden shadow-sm">

        {/* Formulario */}
        <div className="px-7 pt-7 pb-2">
          <h2 className="text-[17px] font-semibold text-[#0d2d6b] mb-1">
            Cotizador · Seguro en Exceso
          </h2>
          <p className="text-[13px] text-[#8a9bbf] mb-6">
            Cotizado con una suma asegurada de $100,000,000 MXN
          </p>

          {/* Sexo */}
          <p className="text-[10px] font-semibold text-[#0d2d6b] uppercase tracking-widest mb-2">
            Sexo
          </p>
          <div className="flex gap-2.5 mb-5">
            {(["H", "M"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSexo(s)}
                className={`flex-1 h-[54px] rounded-2xl border-[1.5px] flex items-center justify-center gap-2 text-sm font-medium transition-all ${
                  sexo === s
                    ? "bg-[#0d2d6b] border-[#0d2d6b] text-white"
                    : "bg-[#f5f7fb] border-[#dde3f0] text-[#5a6a8a]"
                }`}
              >
                <span className="text-xl">{s === "H" ? "👨" : "👩"}</span>
                {s === "H" ? "Hombre" : "Mujer"}
              </button>
            ))}
          </div>

          {/* Edad — fila 1 */}
          <p className="text-[10px] font-semibold text-[#0d2d6b] uppercase tracking-widest mb-2">
            Edad
          </p>
          <div className="grid grid-cols-4 gap-2">
            {edades.slice(0, 4).map((e) => (
              <button
                key={e}
                onClick={() => setEdad(e)}
                className={`h-[44px] rounded-[13px] border-[1.5px] text-[14px] font-medium transition-all ${
                  edad === e
                    ? "bg-[#1565c0] border-[#1565c0] text-white"
                    : "bg-[#f5f7fb] border-[#dde3f0] text-[#5a6a8a]"
                }`}
              >
                {e}
              </button>
            ))}
          </div>

          {/* Edad — fila 2 */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            {edades.slice(4).map((e) => (
              <button
                key={e}
                onClick={() => setEdad(e)}
                className={`h-[44px] rounded-[13px] border-[1.5px] text-[14px] font-medium transition-all ${
                  edad === e
                    ? "bg-[#1565c0] border-[#1565c0] text-white"
                    : "bg-[#f5f7fb] border-[#dde3f0] text-[#5a6a8a]"
                }`}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        {/* Legal */}
        <p className="px-7 py-5 text-[10px] text-[#b0bcce] leading-relaxed">
          Esta cotización es únicamente para fines prácticos e ilustrativos. El costo
          final puede variar según el perfil, historial médico y condiciones particulares
          del solicitante. No constituye una oferta formal de contratación.
        </p>

        {/* Overlay resultado */}
        {anual && mensual && (
          <div
            className="absolute inset-0 rounded-[32px] flex items-end"
            style={{
              background: "rgba(13,45,107,0.55)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            <div className="w-full bg-[#0d2d6b] rounded-[32px] p-7 relative">
              <button
                onClick={cerrar}
                className="absolute top-4 right-4 w-[34px] h-[34px] rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-lg transition-all"
                aria-label="Cerrar"
              >
                ✕
              </button>

              <p className="text-[10px] font-semibold text-[#7ea3d4] uppercase tracking-widest mb-1.5">
                Prima Anual · Seguro en Exceso
              </p>
              <p className="text-[34px] font-bold text-white tracking-tight leading-none">
                {fmt(anual)}
              </p>
              <p className="text-[13px] text-[#7ea3d4] mt-1.5">
                ≈ {fmt(mensual)} / mes
              </p>

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                  <p className="text-[11px] text-[#a8c4e8]">
                    {sexo === "H" ? "Hombre" : "Mujer"}, {edad} años
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                  <p className="text-[11px] text-[#a8c4e8]">
                    Suma asegurada: $100,000,000 MXN
                  </p>
                </div>
              </div>

              <span className="inline-block mt-3 bg-white/10 rounded-full px-3 py-0.5 text-[10px] text-[#b8d0f0]">
                MAPFRE · Seguro en Exceso · EB&A Protección Patrimonial
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CotizadorExceso;
