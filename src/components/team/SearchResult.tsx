import { TeamMember } from "@/types/index"

type SearchResultProps = {
    data : TeamMember
}

export default function SearchResult({data} : SearchResultProps) {
    return (
        <>
            <p className="mt-10 text-center font-bold">Resultado:</p>
            <div className="flex justify-between items-center">
                <p>{data.name}</p>
                <button className="text-purple-600 hover:bg-purple-100 px-10 py-3 font-bold cursor-pointer">
                    Agregar al proyecto
                </button>
            </div>
        </>
    )
}
