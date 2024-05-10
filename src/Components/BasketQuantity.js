import { useSelector } from "react-redux";

export default function BasketQuantity() {
  const basketProducts = useSelector((state) => state.basketList.array);
  let basketSize = basketProducts.length;

  return <div class="cart-img-number">{basketSize}</div>;
}
