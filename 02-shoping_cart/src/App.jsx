import './App.css'
import { products } from './mocks/products.json'
import Header from './components/Header'
import Filters from './components/Filters'
import Products from './components/Products'

function App() {
  return (
    <>
      <Header />
      <Filters />
      <Products products={products} />
    </>
  )
}

export default App
