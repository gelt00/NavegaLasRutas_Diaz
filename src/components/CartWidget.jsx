export default function CartWidget({ count = 0 }) {
  return (
    <button
      className="btn btn-outline-dark position-relative d-inline-flex align-items-center gap-2"
      style={{ cursor: "pointer" }}
      aria-label="Carrito de compras"
      title="Ver carrito"
    >
      <i className="bi bi-cart3 fs-5"></i>
      <span className="badge text-bg-dark">{count}</span>
    </button>
  );
}
