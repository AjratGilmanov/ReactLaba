function CartItem(props) {
  const { item, onRemoveFromCart } = props;

  return (
    <div>
      <div>{item.name}</div>
      <div>Quantity: {item.quantity}</div>
      <div>Price: ${item.price}</div>
      <button onClick={() => onRemoveFromCart(item)}>Remove</button>
    </div>
  );
}

export default CartItem;