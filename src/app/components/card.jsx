export default function Card({projeto}) {
    return (
        <a class="h-64 sm:h-80 lg:h-96 text-black">
            <div class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform hover:-translate-x-2 hover:-translate-y-2">
                <div class="p-4 pt-0! transition-opacity  sm:p-6 lg:p-8">

                <h2 class="mt-4 text-xl font-medium sm:text-2xl">{projeto}</h2>
                </div>

                <div class="absolute p-4 opacity-0 transition-opacity sm:p-6 lg:p-8">
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