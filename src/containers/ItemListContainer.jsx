import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../services/api";
import ItemList from "../components/ItemList.jsx";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | done | error

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setStatus("loading");
        const data = categoryId
          ? await getProductsByCategory(categoryId)
          : await getProducts();
        if (active) {
          setItems(data);
          setStatus("done");
        }
      } catch (e) {
        console.error(e);
        if (active) setStatus("error");
      }
    }
    load();
    return () => {
      active = false;
    };
  }, [categoryId]);

  if (status === "loading") {
    return (
      <section className="container my-5">
        <p className="text-muted">Cargando productos…</p>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className="container my-5">
        <p className="text-danger">Ocurrió un error al cargar los productos.</p>
      </section>
    );
  }

  return (
    <section className="container my-5">
      {categoryId ? (
        <h2 className="mb-4">Categoría: {categoryId}</h2>
      ) : (
        <h2 className="mb-4">Catálogo</h2>
      )}
      <ItemList items={items} />
    </section>
  );
}
