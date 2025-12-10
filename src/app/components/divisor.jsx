export default function Divisor({texto}) {
    return(
        <span className="flex items-center">
            <span className="h-px flex-1 bg-gray-300"></span>

            <span className="shrink-0 px-4">{texto}</span>

            <span className="h-px flex-1 bg-gray-300"></span>
        </span>
    )
}