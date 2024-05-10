import "../App.css";
import "../style.css";
import FooterForAllPages from "./FooterForAllPages";
import HeadPreLinkForAllPages from "./HeadPreLinkForAllPages";
import HeaderForAllPages from "./HeaderForAllPages";
import BasketList from "../Components/BasketList";
import { store } from "../Store/store";
import { Provider } from "react-redux";
import React from "react";

export default function CartPage() {
  return (
    <>
      <head>
        <HeadPreLinkForAllPages />
        <title>SHOPPING CART</title>
      </head>

      <body>
        <div class="top">
          <HeaderForAllPages />
          <section class="head center">
            <h2 class="head__heading">SHOPPING CART</h2>
          </section>
          <div class="basket-box center">
            <Provider store={store}>
              <BasketList numberOfProducts={3} />
            </Provider>
          </div>
          <FooterForAllPages />
        </div>
      </body>
    </>
  );
}
