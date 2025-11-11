import { PRODUCTS } from "../data/products";

const delay = (min = 400, max = 700) =>
  new Promise((res) => setTimeout(res, Math.floor(Math.random() * (max - min + 1)) + min));

export async function getProducts() {
  await delay();
  return PRODUCTS;
}

export async function getProductsByCategory(categoryId) {
  await delay();
  return PRODUCTS.filter((p) => p.category === categoryId);
}

export async function getProductById(id) {
  await delay();
  return PRODUCTS.find((p) => p.id === id) ?? null;
}
