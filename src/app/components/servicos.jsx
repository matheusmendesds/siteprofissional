"use client";
import { useState } from "react";
import Divisor from "./divisor";

export default function Servicos() {
  const [aba, setAba] = useState("servico1");

  const estiloAtivo = "border-b-2 border-blue-600 text-blue-600";
  const estiloInativo = "border-b-2 border-transparent text-gray-600";

  return (
    <section className="bg-gray-800" id="servicos">
      <Divisor texto={"Serviços Ofertados"} />

      <div className="border border-gray-200 dark:border-gray-700">
        <div role="tablist" className="-mb-px flex gap-4">

          {/* Botão 1 */}
          <button
            aria-pressed={aba === "servico1"}
            onClick={() => setAba("servico1")}
            className={`
              ${aba === "servico1" ? estiloAtivo : estiloInativo}
              flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors
            `}
          >
            Servico 1
          </button>

          {/* Botão 2 */}
          <button
            aria-pressed={aba === "servico2"}
            onClick={() => setAba("servico2")}
            className={`
              ${aba === "servico2" ? estiloAtivo : estiloInativo}
              flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors
            `}
          >
            Servico 2
          </button>

          {/* Botão 3 */}
          <button
            aria-pressed={aba === "servico3"}
            onClick={() => setAba("servico3")}
            className={`
              ${aba === "servico3" ? estiloAtivo : estiloInativo}
              flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors
            `}
          >
            Servico 3
          </button>

        </div>
      </div>

      <div role="tabpanel" className="text-gray-200 mt-4">
        {aba === "servico1" && <p>Texto do Servico 1</p>}
        {aba === "servico2" && <p>Texto do Servico 2</p>}
        {aba === "servico3" && <p>Texto do Servico 3</p>}
      </div>
    </section>
  );
}
