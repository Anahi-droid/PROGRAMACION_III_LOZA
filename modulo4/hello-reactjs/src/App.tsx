import ProductCard from './components/ProductCard'

interface Mascota {
  id: number
  name: string
  type: string
  edad: number
  price: number
}

const : Mascota[] = [
  { id: 1, name: 'Lucas', type: 'Salchicha' ,edad: 8, price: 89.99},
  { id: 2, name: 'Nena',  type: 'Pitbul', edad: 15, price: 349.99},
  { id: 3, name: 'Zeus', type: 'Grandanes',edad: 5, price: 29.99},
  { id: 4, name: 'Indi',    type: 'Pastor Aleman', edad: 12, price: 250.00},
]



export default function App() {
  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>

      <ProductCard
        mascotas="Bienvenido a la tienda"
        title="Encuentra mascota para adoptar"
      />
    </main>

    
  )
}