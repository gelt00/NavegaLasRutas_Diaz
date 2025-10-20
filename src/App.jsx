import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer greeting="¡Bienvenido/a a mi e-commerce! Pronto verás el catálogo aquí." />
      </main>
    </>
  );
}
