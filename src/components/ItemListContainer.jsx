export default function ItemListContainer({ greeting }) {
  return (
    <section className="container my-5">
      <div className="card border-2" style={{ borderStyle: "dashed" }}>
        <div className="card-body p-5 bg-light">
          <h2 className="card-title mb-4">
            <i className="bi bi-shop me-2"></i>
            Catálogo
          </h2>
          <p className="card-text fs-5 text-secondary">{greeting}</p>
        </div>
      </div>
    </section>
  );
}
