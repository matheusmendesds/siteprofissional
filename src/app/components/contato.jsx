import Divisor from "./divisor";

export default function Contato() {
    return (
        <section id="contato">
            <Divisor texto={"Contato"}/>
            <div>
                <p className="text-center">
                    Para entrar em contato conosco use o formulário abaixo ou entre em contato atráves das nossas redes sociais!
                </p>
            </div>
            <form action="#" className="text-white mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 p-6 bg-gray-950">
                <div>
                    <label className="block text-sm font-medium " htmlFor="name">Nome</label>
                    <input className="p-1 mt-1 w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:outline-none" id="name" type="text" placeholder="Seu Nome"/>
                </div>
                <div>
                    <label className="block text-sm font-medium " htmlFor="email">Email</label>
                    <input className="p-1 mt-1 w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:outline-none" id="email" type="email" placeholder="Seu email"/>
                </div>
                <div>
                    <label className="block text-sm font-medium " htmlFor="message">Mensagem</label>
                    <textarea className="p-1 mt-1 w-full resize-none rounded-lg border border-gray-300 focus:border-indigo-500 focus:outline-none" id="message" rows="4" placeholder="Sua mensagem"></textarea>
                </div>
                <button className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600" type="submit">
                    Enviar Mensagem
                </button>
            </form>
        </section>
    )
}