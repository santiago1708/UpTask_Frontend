
export default function AddNoteForm() {
    return (
        <form
            onSubmit={() => { }}
            className="space-y-3"
            noValidate
        >
            <div className="flex flex-col gap-2">
                <label className="font-bold" htmlFor="content">Crear Nota</label>
                <input
                    id="content"
                    type="text"
                    placeholder="Contenido de la nota"
                    className="w-full p-3 border-gray-300"
                />
            </div>

            <input 
                type="submit"
                value='Crear Nota'
                className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-2 text-white font-bold cursor-pointer"
            />
        </form>
    )
}
