function CartItem({product}) {
  return (
    <div>
      <img src = {product.image}/>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default CartItem;
