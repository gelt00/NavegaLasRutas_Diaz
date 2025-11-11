import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";
import { CATEGORIES } from "../data/products";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((p) => !p);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <span className="fs-3 me-2">🛍️</span>
          <span className="fs-4">Mi Tienda</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink end to="/" className="nav-link">
                Inicio
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                data-bs-toggle="dropdown"
                type="button"
              >
                Categorías
              </button>
              <ul className="dropdown-menu">
                {CATEGORIES.map((c) => (
                  <li key={c.id}>
                    <NavLink
                      to={`/category/${c.id}`}
                      className="dropdown-item"
                      onClick={() => setIsOpen(false)}
                    >
                      {c.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <div className="d-flex">
            <CartWidget count={2} />
          </div>
        </div>
      </div>
    </nav>
  );
}
