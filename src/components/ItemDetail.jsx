import ItemCount from "./ItemCount.jsx";

export default function ItemDetail({ item }) {
  return (
    <div className="item-detail align-items-start">
      <div>
        <img src={item.image} alt={item.title} className="img-fluid rounded" />
      </div>
      <div>
        <h2 className="mb-2">{item.title}</h2>
        <p className="text-muted">{item.description}</p>
        <p className="h4 mb-3">${item.price}</p>
        <p className="mb-3">
          Stock disponible: <strong>{item.stock}</strong>
        </p>

        <ItemCount stock={item.stock} initial={1} onAdd={(qty) => alert(`Agregaste ${qty} unidad(es)`)}/>
      </div>
    </div>
  );
}
