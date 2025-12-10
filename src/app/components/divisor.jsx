export default function Divisor({texto}) {
    return(
        <span className="flex items-center">
            <span className="h-px flex-1 bg-gray-300"></span>

            <span className="shrink-0 px-4"><h1 className="text-3xl">{texto}</h1></span>

            <span className="h-px flex-1 bg-gray-300"></span>
        </span>
    )
}