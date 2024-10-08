import { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../contexts/CartContext';

export default function Cart() {
  const { cart, clearCart, removeFromCart, count, addFromCart, removeProductCart } = useContext(CartContext);
  

  return (
    <>
      <label className='cart-button' htmlFor='cart'> 🛒{count} </label>
      <input id='cart' type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.description} />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <footer>
                <small>Quantity: {product.quantity}</small>
                <button onClick={() => removeProductCart(product)}>Remove</button>
                <button onClick={() => removeFromCart(product)}>-</button>
                <button onClick={() => addFromCart(product)}>+</button>
              </footer>
              
            </li>
          ))}
        </ul>
        <button onClick={clearCart}>Clear cart</button>
      </aside>
    </>
  );
}