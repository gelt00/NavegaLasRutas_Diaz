export default function CartWidget({ count = 0 }) {
  return (
    <button type="button" className="btn btn-outline-secondary position-relative">
      <i className="bi bi-cart" aria-hidden="true"></i>
      <span className="visually-hidden">Carrito</span>
      {count > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {count}
          <span className="visually-hidden">items</span>
        </span>
      )}
    </button>
  );
}
