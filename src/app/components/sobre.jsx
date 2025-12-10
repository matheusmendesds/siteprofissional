import Image from "next/image"
import sobre from "@/app/images/sobre.jpg"
import sobre1 from "@/app/images/nossa.png"

import Divisor from "./divisor"
export default function Sobre() {
    return (
        <section id="sobre">
            <Divisor texto={"Quem Somos"}/>
            <div>
                <Image src={sobre1} alt="alt"/>

            </div>
                {/* <div class=" mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <Image src={sobre} alt='sobre' height={600}/>
                        </div>
                        <div>
                            <div class="max-w-prose md:max-w-none text-white">
                                <h2 class="text-2xl font-semibold sm:text-3xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h2>
            
                                <p class="mt-4 text-pretty">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                                        architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                                        sequi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
        </section>
    )
}