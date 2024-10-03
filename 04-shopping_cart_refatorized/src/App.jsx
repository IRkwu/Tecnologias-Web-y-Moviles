import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import ShopFilter from "./components/ShopFilter";
import { useState } from "react";
import ShopProducts from "./components/ShopProducts";
import { products as initialProducts } from './mocks/products.json'

export default function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    price: 0
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (filters.category === 'all' || product.category === filters.category) &&
        (filters.price === 0 || product.price >= filters.price)
      );
    });
  };


  return (
    <MantineProvider>
      <Header />
      <ShopFilter filters={filters} changeFilters={setFilters} />
      <ShopProducts products={filterProducts(products)} />
    </MantineProvider>
  );
}
