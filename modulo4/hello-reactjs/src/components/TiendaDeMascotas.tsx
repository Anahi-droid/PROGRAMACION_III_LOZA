interface Mascota {
  id: number
  name: string
  type: string
  edad: number
  price: number
}

interface MascotasListProps {
  mascotas: Mascota[]
  title?: string
}

export default function MascotaList({
  mascotas,
  title = 'Tienda Mascotas',
}: MascotasListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {mascotas.length === 0 && (
        <p style={{ color: '#999' }}>No hay mascotas disponibles</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {mascotas.map((mascotas) => (
          <li
            key={mascotas.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>
              {mascotas.name}
                <em>
                    {mascotas.type}
                </em>
            </span>
            <strong>${mascotas.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}