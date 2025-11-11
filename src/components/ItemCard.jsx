import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <div className="card h-100">
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>
        <p className="text-muted mb-2">{item.description}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold">${item.price}</span>
          <Link to={`/item/${item.id}`} className="btn btn-primary btn-sm">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
}
