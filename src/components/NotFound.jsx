import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container my-5">
      <div className="text-center">
        <h1 className="display-5 fw-bold">404</h1>
        <p className="lead">La página que buscas no existe.</p>
        <Link to="/" className="btn btn-primary">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
