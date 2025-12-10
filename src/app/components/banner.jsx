import cont from '@/app/images/cont.jpg'
import Image from 'next/image'
export default function Banner() {
    return (
        <div>
            <section id='banner'>
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-prose md:max-w-none">
                        <h2 className="text-2xl font-semibold sm:text-3xl">
                            Escritorio de Contabilidade
                        </h2>

                        <p className="mt-4 text-pretty ">
                            Atuamos com transparência, eficiência e tecnologia para garantir segurança nas suas obrigações fiscais. Nosso compromisso é simplificar processos e ampliar resultados.
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