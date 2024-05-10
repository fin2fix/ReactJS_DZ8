import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../Reducers/ProductListSlice";

export default function BasketList({ numberOfProducts }) {
  const basket = useSelector((state) => state.productList.array);
  const dispatch = useDispatch();

  let randomArr = [];

  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  while (randomArr.length != numberOfProducts) {
    let index = getRandomInt(basket.length);
    randomArr.push(basket[index]);
    randomArr = randomArr.filter((v, i, arr) => arr.indexOf(v) == i);
  }

  let busketSum = randomArr.reduce(function (sum, elem) {
    return sum + elem.price;
  }, 0);

  return (
    <>
      <div class="basket-box__content">
        {randomArr.map((basketItem) => (
          <div key={basketItem.id} class="basket-box__product">
            <img
              class={
                basketItem.isImageStandartSize === 1
                  ? "product__img"
                  : "product__img__div"
              }
              src={basketItem.imgSourse}
              style={
                basketItem.isImageStandartSize === 1
                  ? { width: 262 }
                  : { height: 306, paddingLeft: 45, puddingRight: 45 }
              }
              alt="product 3"
            />
            <div class="basket-box__info">
              <div class="basket-box__heading-box">
                <h4 class="basket-box__heading">MANGO PEOPLE</h4>
                <a
                  onClick={() => dispatch(deleteProduct(basketItem))}
                  href="#"
                  class="cross-link"
                >
                  <img src="img/cross.svg" alt="cross for closing" />
                </a>
              </div>
              <h4 class="basket-box__heading">T-SHIRT</h4>
              <div class="basket-box__text-box">
                <p class="basket-box__text">
                  Price:{" "}
                  <span class="basket-box__text-price">
                    ${basketItem.price}
                  </span>
                </p>
                <p class="basket-box__text">
                  Color: <span class="basket-box__text-other">{basketItem.color}</span>
                </p>
                <p class="basket-box__text">
                  Size:{" "}
                  <span class="basket-box__text-other">{basketItem.size}</span>
                </p>
                <form action="#">
                  <label class="basket-box__text" for="goods-quantity1">
                    Quantity:
                  </label>
                  <input
                    class="basket-box__input"
                    id="goods-quantity1"
                    type="number"
                    required
                    min="0"
                    max="9"
                    value="1"
                  />
                </form>
              </div>
            </div>
          </div>
        ))}
        <div class="basket-box__buttons">
          <button class="basket-box__button">Clear shopping cart</button>
          <button class="basket-box__button">Continue shopping</button>
        </div>
      </div>
      <div class="basket-box__data">
        <div class="basket-box__form-box">
          <h4 class="basket-box__form-head">SHIPPING ADDRESS</h4>
          <form class="basket-box__form-input-box" action="#">
            <input
              class="basket-box__form-input"
              type="text"
              required
              placeholder="Country"
              value="Russian Federation"
            />
            <input
              class="basket-box__form-input"
              type="text"
              required
              placeholder="State"
            />
            <input
              class="basket-box__form-input"
              type="text"
              required
              placeholder="Postcode / Zip"
            />
            <button class="basket-box__form-button" type="submit">
              Get a&nbsp;quote
            </button>
          </form>
        </div>
        <div class="basket-box__proceed">
          <p class="basket-box__proceed-subtotal">
            SUB TOTAL <span class="basket-box__sum-subtotal">${busketSum}</span>
          </p>
          <p class="basket-box__proceed-total">
            GRAND TOTAL <span class="basket-box__sum-total">${busketSum}</span>
          </p>
          <div class="basket-box__line"></div>
          <button class="basket-box__proceed-button">
            PROCEED TO&nbsp;CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
}
