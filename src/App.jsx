import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./containers/ItemListContainer.jsx";
import ItemDetailContainer from "./containers/ItemDetailContainer.jsx";
import NotFound from "./components/NotFound.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
