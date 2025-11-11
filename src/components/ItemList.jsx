import ItemCard from "./ItemCard.jsx";

export default function ItemList({ items }) {
  if (!items.length) {
    return <p className="text-muted">No hay productos para mostrar.</p>;
  }
  return (
    <div className="row g-4">
      {items.map((p) => (
        <div key={p.id} className="col-12 col-sm-6 col-lg-4">
          <ItemCard item={p} />
        </div>
      ))}
    </div>
  );
}
