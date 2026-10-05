export const Footer = () => {
  const equipo = [
    { id: 1, nombre: "Ana López", rol: "Frontend Dev" },
    { id: 2, nombre: "Carlos Gómez", rol: "Backend Dev" },
    { id: 3, nombre: "Lucía Fernández", rol: "UI/UX Designer" }
  ];

  return (
    <footer style={{ backgroundColor: '#222', color: '#fff', padding: '20px', marginTop: '40px' }}>
      <div>
        <h3>Mi Empresa S.A.</h3>
        <p>Dirección: Av. Principal 1234, Ciudad</p>
        <p>Contacto: contacto@bossit.com</p>
      </div>
      <hr />
      <h4>Nuestro Equipo Boss</h4>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        {equipo.map((persona) => (
          <div key={persona.id} style={{ border: '1px solid #444', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
            <span
              aria-hidden="true"
              style={{ display: 'inline-grid', placeItems: 'center', width: '80px', height: '80px', borderRadius: '50%', background: '#444', fontSize: '1.5rem' }}
            >
              {persona.nombre.split(' ').map((parte) => parte[0]).join('')}
            </span>
            <h5>{persona.nombre}</h5>
            <p>{persona.rol}</p>
          </div>
        ))}
      </div>
    </footer>
  );
};