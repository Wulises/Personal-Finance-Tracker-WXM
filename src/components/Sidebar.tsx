import Link from 'next/link'

export default function SidebarMakoto() {

    return ( 

        <aside className='w-60 h-screen bg-softCard text-creamWhite p-4 fixed top-0 left-0'>

            <h2 className='text-xl font-serif text-haruPurple mb-8'>Haru Finance</h2>

            <nav className='flex flex-col gap-4 text-sm' >

                <Link  href='#' className='hover:text-personaRed transition-colors'> Makoto </Link>
                <Link  href='#' className='hover:text-personaRed transition-colors'> Kasumi </Link>
                <Link  href='#' className='hover:text-personaRed transition-colors'> Sumire </Link>
                <Link  href='#' className='hover:text-personaRed transition-colors'> Aigis </Link>
                <Link  href='#' className='hover:text-personaRed transition-colors'> Yukari </Link>


            </nav>

        </aside>


    )

}