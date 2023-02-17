import React from 'react';
import CartItem from './CartItem';


function ShoppingCart(props) {
  const { cartItems, onRemoveFromCart } = props;

  const totalPrice = cartItems ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0): 0;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemoveFromCart={onRemoveFromCart} />
        ))}
        {cartItems.length > 0 && (
          <div>
            <div>Total price: ${totalPrice}</div>
            <button onClick={() => alert('Implement checkout')}>
              Proceed to checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


export default ShoppingCart;
