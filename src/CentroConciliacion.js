import React, { useEffect, useState } from "react";

const CentroConciliacion = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <p>Cargando...</p>
        </div>
      ) : (
        <>
          <header>
            <h1>Centro de Conciliación</h1>
            <p>Resolviendo conflictos de manera rápida y eficiente.</p>
          </header>

          <nav>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#gestion-documentaria">Gestión Documentaria</a></li>
              <li><a href="#staff">Staff</a></li>
              <li><a href="#faq">Preguntas Frecuentes</a></li>
              <li><a href="#testimonios">Testimonios</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#ubicacion">Ubicación</a></li>
            </ul>
          </nav>

          <main>
            <section id="servicios">
              <h2>Soluciones efectivas en conciliación</h2>
              <p>Brindamos soluciones legales rápidas y efectivas para resolver disputas.</p>
            </section>

            <section>
              <h2>Nuestros Servicios</h2>
              {[ 
                { title: "Conciliación Laboral", desc: "Solucionamos conflictos laborales de manera justa." },
                { title: "Conciliación Familiar", desc: "Asesoramos en acuerdos familiares y patrimoniales." },
                { title: "Conciliación Comercial", desc: "Resolución de disputas comerciales de manera eficiente." },
                { title: "Conciliación Civil", desc: "Solución de conflictos sobre propiedad y contratos." },
                { title: "Conciliación Penal", desc: "Acuerdos reparatorios en delitos menores." },
                { title: "Conciliación de Seguros", desc: "Soluciones en disputas de seguros y accidentes." },
              ].map((service, index) => (
                <div key={index}>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              ))}
            </section>

            <section id="staff">
              <h2>Nuestro Equipo</h2>
              {[ 
                "Dra. Ana Pérez - Especialista en conciliación laboral",
                "Dra. María Rodríguez - Especialista en conciliación familiar",
                "Dra. Carla Gómez - Especialista en conciliación comercial",
                "Dra. Laura Sánchez - Especialista en conciliación civil",
              ].map((lawyer, index) => (
                <div key={index}>
                  <h3>{lawyer.split(" - ")[0]}</h3>
                  <p>{lawyer.split(" - ")[1]}</p>
                </div>
              ))}
            </section>

            <section id="faq">
              <h2>Preguntas Frecuentes</h2>
              <div><strong>¿Cuánto dura un proceso de conciliación?</strong> Puede durar entre 1 y 3 semanas.</div>
              <div><strong>¿Es obligatorio antes de ir a juicio?</strong> En muchos casos, sí.</div>
              <div><strong>¿Cuáles son los beneficios?</strong> Rapidez, costos bajos y acuerdos amigables.</div>
            </section>

            <section id="testimonios">
              <h2>Testimonios</h2>
              <blockquote>"Gracias al centro de conciliación resolvimos nuestro conflicto sin ir a juicio." - Cliente A ★★★★★</blockquote>
              <blockquote>"Muy profesionales y atentos, recomendados." - Cliente B ★★★★★</blockquote>
            </section>

            <section id="contacto">
              <h2>Contacto</h2>
              <p><strong>Dirección:</strong> Av. Principal 456, Ciudad</p>
              <p><strong>Teléfono:</strong> +51 987-654-321</p>
              <p><strong>Email:</strong> info@conciliacion.com</p>
              <form>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" required></textarea>
                <button type="submit">Enviar</button>
              </form>
            </section>
          </main>

          <footer>
            <p>&copy; {new Date().getFullYear()} Centro de Conciliación. Todos los derechos reservados.</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default CentroConciliacion;
