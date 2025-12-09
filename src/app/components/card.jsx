export default function Card({projeto}) {
    return (
        <a href="#" class="group relative block h-64 sm:h-80 lg:h-96 text-black">
            <span class="absolute inset-0 border-2 border-dashed border-black"></span>

            <div class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div class="p-4 pt-0! transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">

                <h2 class="mt-4 text-xl font-medium sm:text-2xl">{projeto}</h2>
                </div>

                <div class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 class="mt-4 text-xl font-medium sm:text-2xl">{projeto}</h3>

                <p class="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium
                    voluptatem omnis atque culpa repellendus.
                </p>

                <p class="mt-8 font-bold">Read more</p>
                </div>
            </div>
        </a>
    )
}