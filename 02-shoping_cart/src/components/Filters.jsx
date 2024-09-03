import './Filters.css'
import { useState } from "react";

function Filters() {
const [minPrice, setMinPrice] = useState(0);

const handlePriceChange = (event) => {
  setMinPrice(event.target.value);
};

return (
  <section className="filter">
    <div>
      <label htmlFor="price">Price:</label>
      <input
        id="price"
        type="range"
        min="0"
        max="10000"
        value={minPrice}
        onChange={handlePriceChange}
      />
      <span>${minPrice}</span>
    </div>
    <div>
      <label htmlFor="Category">Select Category:</label>
      <select id="category">
        <option value = "Category1">all</option>
        <option value = "Category2">hola1</option>
        <option value = "Category3">hola2</option>
        <option value = "Category4">hola3</option>
        <option value = "Category5">hola4</option>
      </select> 
    </div>
  </section>
);

}
export default Filters;
  