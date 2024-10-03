import { useState } from 'react';
import { Slider, Group, InputLabel, NativeSelect } from '@mantine/core';

const categories = ['all', 'groceries', 'furniture', 'beauty', 'fragrances'];

export default function ShopFilter({ filters, changeFilters }) {
  const [minPrice, setMinPrice] = useState(filters.price);

  const handlePriceChange = (value) => {
    setMinPrice(value);
    changeFilters((prevFilters) => ({
      ...prevFilters,
      price: value,
    }));
  };

  const handleCategoryChange = (event) => {
    changeFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value,
    }));
  }

  return (
    <Group>
      <InputLabel>
        Price: ${minPrice}
      <Slider
        color="pink"
        size="sm"
        showLabelOnHover={false}
        min={0}
        max={1000}
        value={minPrice}
        onChange={handlePriceChange}
      />
      </InputLabel>
      <InputLabel>
        Category:
        <NativeSelect
          data={categories}
          defaultValue='All'
          onChange={handleCategoryChange}
        />
      </InputLabel>
    </Group>
  );
}