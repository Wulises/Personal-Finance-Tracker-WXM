// src/components/Header.tsx
export default function Header() {
  return (
    <header className="h-16 bg-darkBlack text-creamWhite flex items-center justify-between px-6 border-b border-haruPurple">
      <h1 className="text-lg font-serif text-haruPurple">Bienvenido de nuevo, HaruFan</h1>
      <div className="text-sm text-haruPurple">Modo oscuro [activo]</div>
    </header>
  )
}
