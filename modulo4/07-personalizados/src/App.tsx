// src/App.tsx

import ModalDemo        from './components/ModalDemo'
import ThemeSelector    from './components/ThemeSelector'
import PostList         from './components/PostList'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  ModalDemo        — useToggle: modal con overlay                 │
// │  2  QuantitySelector — useCounter: contador con límites             │
// │  3  ThemeSelector    — useLocalStorage: tema persistente            │
// │  4  LiveSearch       — useDebounce: búsqueda con delay              │
// │  5  PostList         — useFetch: lista de posts con fetch genérico  │
// │  6  ResponsiveLayout — useMediaQuery + useWindowSize: layout        │
// │  7  CodeBlock        — useClipboard: copiar al portapapeles         │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 1

export default function App() {
  const content =
    PASO === 1 ? <ModalDemo /> :
    PASO === 3 ? <ThemeSelector /> :
    PASO === 5 ? <PostList /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}