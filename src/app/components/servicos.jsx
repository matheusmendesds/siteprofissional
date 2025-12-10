"use client";
import { useState } from "react";
import Divisor from "./divisor";

export default function Servicos() {
  const [aba, setAba] = useState("servico1");

  return (
    <section className="bg-gray-800" id="servicos">
      <Divisor texto={"Serviços"} />

      <div className="border border-gray-200 dark:border-gray-700">
        <div role="tablist" className="-mb-px flex gap-4">

          <button
            aria-pressed={aba === "servico1"}
            onClick={() => setAba("servico1")}
            className="flex items-center gap-2 border-b-2 border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:hover:text-blue-500"
          >
            Servico 1
          </button>

          <button
            aria-pressed={aba === "servico2"}
            onClick={() => setAba("servico2")}
            className="flex items-center gap-2 border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"
          >
            Servico 2
          </button>

          <button
            aria-pressed={aba === "servico3"}
            onClick={() => setAba("servico3")}
            className="flex items-center gap-2 border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"
          >
            Servico 3
          </button>

        </div>
      </div>

      <div role="tabpanel" className=" text-gray-200">
        {aba === "servico1" && <p>Texto do Servico 1</p>}
        {aba === "servico2" && <p>Texto do Servico 2</p>}
        {aba === "servico3" && <p>Texto do Servico 3</p>}
      </div>
    </section>
  );
}
 