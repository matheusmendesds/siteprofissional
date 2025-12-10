import Link from "next/link";

export default function Menu(){
    return (
        <header className="bg-white border border-x-transparent">
                <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global">
                        <ul className="flex items-center gap-6 text-sm">
                        <li>
                            <Link  className="text-gray-500 transition hover:text-gray-500/75" href="/"> HOME </Link>
                        </li>

                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-500/75" href="#sobre"> QUEM SOMOS </Link>
                        </li>

                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-500/75" href="#servicos"> SERVIÇOS </Link>
                        </li>

                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-500/75" href="#portfolio">PORTFÓLIO </Link>
                        </li>

                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-500/75" href="#contato"> FALE CONOSCO </Link>
                        </li>

                        </ul>
                    </nav>

                    </div>
                </div>
        </header>
    )
}