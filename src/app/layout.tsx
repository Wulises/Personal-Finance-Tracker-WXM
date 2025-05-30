import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'


//Descomprimiendo las fuentes de Google fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

//Metadata de la aplicación
export const metadata = {
  title: 'Haru Finance Dashboard',
  description: 'Dashboard de finanzas personales con estilo Persona 5 x Haru Okumura',
}

//Componente raíz de la aplicación
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-darkBlack text-creamWhite`}>
        {children}
      </body>
    </html>
  )
}
