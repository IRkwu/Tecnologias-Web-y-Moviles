import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Card, Image, Text, Badge, Button, Group, SimpleGrid } from '@mantine/core';

export default function ShopProducts({ products }) {
  //const { addToCart } = useContext(CartContext);

  return (
    <SimpleGrid cols={4} spacing="sm" >
    {products.map((product) => (
      
      <Card 
        shadow="sm" 
        padding="lg" 
        radius="md" 
        withBorder
        style={{ margin: '8px' }}>
        <Card.Section>
          <Image
            src={product.thumbnail}
            alt="Norway"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{product.title}</Text>
          <Badge color="pink">{product.price}$</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {product.description}
        </Text>

        <Button color="pink" fullWidth mt="md" radius="md">
          Add to cart
        </Button>
      </Card>
      
    ))}
    </SimpleGrid>
    
  );
}