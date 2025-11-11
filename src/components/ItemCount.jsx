import { useState } from "react";

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const dec = () => setCount((c) => Math.max(initial, c - 1));
  const inc = () => setCount((c) => Math.min(stock, c + 1));

  const add = () => {
    if (stock === 0) return;
    onAdd?.(count);
  };

  return (
    <div className="d-flex align-items-center gap-2">
      <div className="btn-group" role="group" aria-label="Contador">
        <button type="button" className="btn btn-outline-secondary" onClick={dec} disabled={count <= initial}>
          −
        </button>
        <span className="btn btn-light disabled">{count}</span>
        <button type="button" className="btn btn-outline-secondary" onClick={inc} disabled={count >= stock}>
          +
        </button>
      </div>
      <button type="button" className="btn btn-primary" onClick={add} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
}
