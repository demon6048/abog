import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const CentroConciliacion = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div><p>Cargando...</p></div>
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
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
          <main>
            <section id="servicios">
              <h2>Nuestros Servicios</h2>
              <p>Brindamos soluciones legales rápidas y efectivas.</p>
            </section>
            <section id="contacto">
              <h2>Contacto</h2>
              <p>Email: info@conciliacion.com</p>
            </section>
          </main>
          <footer>
            <p>&copy; {new Date().getFullYear()} Centro de Conciliación</p>
          </footer>
        </>
      )}
    </div>
  );
};

ReactDOM.render(<CentroConciliacion />, document.getElementById("root"));
