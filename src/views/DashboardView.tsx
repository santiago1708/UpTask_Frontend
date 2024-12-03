import { Link } from 'react-router-dom'
export default function DashboardView() {
    return (
        <>
            <h1 className="text-5xl font-black">Mis proyectos</h1>
            <p className="text-2xl font-light text-gray-700 mt-5">Maneja y administra tus proyectos</p>

            <nav className='my-6'>
                <Link
                    to="/projects/create"
                    className="bg-purple-400 hover:bg-purple-500 px-10 py-4 text-white text-xl font-bold cursor-pointer transition-colors"
                >Nuevo Proyecto</Link>
            </nav>
        </>
    )
}
