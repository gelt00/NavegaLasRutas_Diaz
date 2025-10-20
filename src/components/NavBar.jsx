import { useState } from "react";
import CartWidget from "./CartWidget.jsx";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm">
      <div className="container-fluid px-4">
        {/* Logo */}
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
          <span className="fs-3 me-2">🛍️</span>
          <span className="fs-4">Mi Tienda</span>
        </a>

        {/* Toggle button para móvil */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces de navegación */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setIsOpen(false)}>
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setIsOpen(false)}>
                Ofertas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setIsOpen(false)}>
                Contacto
              </a>
            </li>
          </ul>

          {/* CartWidget */}
          <div className="d-flex">
            <CartWidget count={2} />
          </div>
        </div>
      </div>
    </nav>
  );
}
