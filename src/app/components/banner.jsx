import cont from '@/app/images/cont.jpg'
import Image from 'next/image'
export default function Banner() {
    return (
        <div>
            <section id='banner'>
                <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div class="max-w-prose md:max-w-none">
                        <h2 class="text-2xl font-semibold sm:text-3xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h2>

                        <p class="mt-4 text-pretty ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                            architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                            sequi.
                        </p>
                        </div>
                    </div>

                    <div>
                        <Image src={cont} alt='cont'/>
                    </div>
                    </div>
            </div>
            </section>
            
        </div>
    )
}