export default function Card({projeto}) {
    return (
        <a className="h-64 sm:h-80 lg:h-96 text-black">
            <div className=" h-full transform items-end border-2 border-black bg-white transition-transform hover:-translate-x-2 hover:-translate-y-2">
                <div className="p-4 pt-0! transition-opacity  sm:p-6 lg:p-8">
                    <h2 className="mt-4 text-xl font-medium sm:text-2xl">{projeto}</h2>
                </div>

                {/* <div className="absolute p-4 opacity-0 transition-opacity hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 text-sm font-medium sm:text-2xl">{projeto}</h3>

                    <p className="mt-4 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium
                        voluptatem omnis atque culpa repellendus.
                    </p>

                    <p className="mt-8 font-bold">Read more</p>
                </div> */}
            </div>
        </a>
    )
}