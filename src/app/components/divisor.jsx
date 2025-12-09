export default function Divisor({texto}) {
    return(
        <span class="flex items-center">
            <span class="h-px flex-1 bg-gray-300"></span>

            <span class="shrink-0 px-4">{texto}</span>

            <span class="h-px flex-1 bg-gray-300"></span>
        </span>
    )
}