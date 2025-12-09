import Divisor from "./divisor";

export default function Servicos() {
    return (
        <section className="bg-gray-800" id="servicos">
          <Divisor texto={"Serviços"}/>
            <div class="border-b border-gray-200 dark:border-gray-700">
              <div role="tablist" class="-mb-px flex gap-4">
              <button role="tab" aria-selected="true" class="flex items-center gap-2 border-b-2 border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:hover:text-blue-500">
                  Profile
              </button>

              <button role="tab" aria-selected="false" class="flex items-center gap-2 border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                Settings
              </button>

              <button role="tab" aria-selected="false" class="flex items-center gap-2 border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                Alerts
              </button>
              </div>
            </div>

            <div role="tabpanel" class="mt-4">
              <p class="text-gray-700 dark:text-gray-200">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic dicta
                quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus iste odio
                consectetur molestias iusto cupiditate ullam laborum veniam quos officia. Quos, temporibus
                perspiciatis!
              </p>
            </div>
        </section>
    )
}