import "../App.css";
import "../style.css";
import FooterForAllPages from "./FooterForAllPages";
import HeadPreLinkForAllPages from "./HeadPreLinkForAllPages";
import HeaderForAllPages from "./HeaderForAllPages";
import ProductListRandom from "../Components/ProductListRandom";
import { store } from "../Store/store";
import { Provider } from "react-redux";
import React from "react";

export default function HomePage() {
  return (
    <>
      <head>
        <HeadPreLinkForAllPages />
        <title>THE BRAND OF&nbsp;LUXERIOUS FASHION</title>
      </head>

      <body>
        <div class="top">
          <HeaderForAllPages />
          <section class="promo">
            <div class="promo__img">
              <img src="img/promo.png" alt="promo" />
            </div>
            <div class="promo__content">
              <article class="promo__info">
                <h2 class="promo__title">THE BRAND</h2>
                <h3 class="promo__heading">
                  OF&nbsp;LUXERIOUS
                  <span class="promo__heading__color">FASHION</span>
                </h3>
              </article>
            </div>
          </section>
          <section class="sale center">
            <article class="sale__item">
              <img src="img/si1.jpg" alt="sale" />
              <div class="sale__content">
                <p class="sale__text">30% OFF</p>
                <h3 class="sale__heading">FOR WOMEN</h3>
              </div>
            </article>
            <article class="sale__item">
              <img src="img/si2.jpg" alt="sale" />
              <div class="sale__content">
                <p class="sale__text">HOT DEAL</p>
                <h3 class="sale__heading">FOR MEN</h3>
              </div>
            </article>
            <article class="sale__item">
              <img src="img/si3.jpg" alt="sale" />
              <div class="sale__content">
                <p class="sale__text">NEW ARRIVALS</p>
                <h3 class="sale__heading">FOR KIDS</h3>
              </div>
            </article>
            <article class="sale__item sale__item__big">
              <img
                class="sale__item__big__img"
                src="img/sibig.jpg"
                alt="sale"
              />
              <div class="sale__content">
                <p class="sale__text">LUXIROUS &amp;&nbsp;TRENDY</p>
                <h3 class="sale__heading">ACCESORIES</h3>
              </div>
            </article>
          </section>
          <section class="product-box center">
            <h2 class="product-box__heading">Fetured Items</h2>
            <p class="product-box__text">
              Shop for items based on&nbsp;what we&nbsp;featured in&nbsp;this
              week
            </p>
            <div class="product-box__content">
              <Provider store={store}>
                <ProductListRandom numberOfProducts={6} />
              </Provider>
            </div>
          </section>
          <div class="button_box center">
            <button class="button">Browse All Products</button>
          </div>
          <section class="advantages">
            <article class="advantages__content">
              <img src="img/Forma_1.svg" alt="Free Delivery" />
              <h4 class="advantages__cont__header">Free Delivery</h4>
              <p class="advantages__cont__text">
                Worldwide delivery on&nbsp;all. Authorit tively morph
                next-generation innov tion with extensive models.
              </p>
            </article>
            <article class="advantages__content">
              <img src="img/Forma_2.svg" alt="Sales & discounts" />
              <h4 class="advantages__cont__header">
                Sales &amp;&nbsp;discounts
              </h4>
              <p class="advantages__cont__text">
                Worldwide delivery on&nbsp;all. Authorit tively morph
                next-generation innov tion with extensive models.
              </p>
            </article>
            <article class="advantages__content">
              <img src="img/Forma_3.svg" alt="Quality assurance" />
              <h4 class="advantages__cont__header">Quality assurance</h4>
              <p class="advantages__cont__text">
                Worldwide delivery on&nbsp;all. Authorit tively morph
                next-generation innov tion with extensive models.
              </p>
            </article>
          </section>
          <FooterForAllPages />
        </div>
      </body>
    </>
  );
}
