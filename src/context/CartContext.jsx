import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) ?? [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(items));
    } catch {}
  }, [items]);

  const addToCart = (product, quantity = 1) => {
    setItems((prev) => {
      const i = prev.findIndex((x) => x.id === product.id);
      if (i >= 0) {
        const next = [...prev];
        next[i] = {
          ...next[i],
          quantity: Math.min(
            product.stock ?? 9999,
            next[i].quantity + quantity
          ),
        };
        return next;
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));
  const clearCart = () => setItems([]);
  const updateQty = (id, qty) =>
    setItems((prev) =>
      prev.map((i) =>
        i.id === id
          ? { ...i, quantity: Math.max(1, Math.min(qty, i.stock ?? 9999)) }
          : i
      )
    );

  const getTotalQuantity = () => items.reduce((a, i) => a + i.quantity, 0);
  const getTotalPrice = () =>
    items.reduce((a, i) => a + i.quantity * (i.price ?? 0), 0);
  const isInCart = (id) => items.some((i) => i.id === id);

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      clearCart,
      updateQty,
      getTotalQuantity,
      getTotalPrice,
      isInCart,
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
