import "../App.css";
import "../style.css";
import FooterForAllPages from "./FooterForAllPages";
import HeadPreLinkForAllPages from "./HeadPreLinkForAllPages";
import HeaderForAllPages from "./HeaderForAllPages";
import ProductList from "../Components/ProductList";
import { store } from "../Store/store";
import { Provider } from "react-redux";
import React from "react";
import { FilterProvider } from "../Context/FilterContext";
import ProductFilter from "../Components/ProductFilter";

export default function CatalogPage() {
  return (
    <>
      <head>
        <HeadPreLinkForAllPages />
        <title>CATALOG</title>
      </head>

      <body>
        <div class="top">
          <HeaderForAllPages />
          <section class="head center">
            <h2 class="head__heading">NEW ARRIVALS</h2>
            <div class="breadcrumb">
              <div class="breadcrumb__box-link">
                <a class="breadcrumb__link" href="/">
                  HOME
                </a>
              </div>
              <div class="breadcrumb__box-link">
                <a class="breadcrumb__link" href="/product">
                  MEN
                </a>
              </div>
              <div class="breadcrumb__box-link">
                <a class="breadcrumb__link" href="/product">
                  NEW ARRIVALS
                </a>
              </div>
            </div>
          </section>
          <div class="filter-sort center">
            <div class="filter-box">
              <details class="filter">
                <summary class="filter__summary">
                  FILTER
                  <svg
                    class="filter__img"
                    width="15"
                    height="10"
                    viewBox="0 0 15 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                      fill="black"
                    />
                  </svg>
                </summary>
                <div class="filter__content">
                  <details class="filter__category" open>
                    <summary class="filter__category-summary">CATEGORY</summary>
                    <div class="filter__box">
                      <a class="filter__link">Accessories</a>
                      <a class="filter__link">Bags</a>
                      <a class="filter__link">Denim</a>
                      <a class="filter__link">Hoodies &amp;&nbsp;Sweatshirts</a>
                      <a class="filter__link">Jackets &amp;&nbsp;Coats</a>
                      <a class="filter__link">Polos</a>
                      <a class="filter__link">Shirts</a>
                      <a class="filter__link">Shoes</a>
                      <a class="filter__link">Sweaters &amp;&nbsp;Knits</a>
                      <a class="filter__link">T-Shirts</a>
                      <a class="filter__link">Tanks</a>
                    </div>
                  </details>
                  <details class="filter__category">
                    <summary class="filter__category-summary">BRAND</summary>
                    <div class="filter__box">
                      <a class="filter__link">Accessories</a>
                      <a class="filter__link">Bags</a>
                      <a class="filter__link">Denim</a>
                      <a class="filter__link">Hoodies &amp;&nbsp;Sweatshirts</a>
                      <a class="filter__link">Jackets &amp;&nbsp;Coats</a>
                      <a class="filter__link">Polos</a>
                      <a class="filter__link">Shirts</a>
                      <a class="filter__link">Shoes</a>
                      <a class="filter__link">Sweaters &amp;&nbsp;Knits</a>
                      <a class="filter__link">T-Shirts</a>
                      <a class="filter__link">Tanks</a>
                    </div>
                  </details>
                  <details class="filter__category">
                    <summary class="filter__category-summary">DESIGN</summary>
                    <div class="filter__box">
                      <a class="filter__link">Accessories</a>
                      <a class="filter__link">Bags</a>
                      <a class="filter__link">Denim</a>
                      <a class="filter__link">Hoodies &amp;&nbsp;Sweatshirts</a>
                      <a class="filter__link">Jackets &amp;&nbsp;Coats</a>
                      <a class="filter__link">Polos</a>
                      <a class="filter__link">Shirts</a>
                      <a class="filter__link">Shoes</a>
                      <a class="filter__link">Sweaters &amp;&nbsp;Knits</a>
                      <a class="filter__link">T-Shirts</a>
                      <a class="filter__link">Tanks</a>
                    </div>
                  </details>
                </div>
              </details>
            </div>
            <div class="sort">
              <details class="sort__details">
                <summary class="sort__summary">
                  TRENDING NOW
                  <svg
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                      fill="#6F6E6E"
                    />
                  </svg>
                </summary>
                <div class="sort__content sort__content__mobile">
                  <label class="sort__label">
                    <input type="checkbox" /> <span>Man</span>
                  </label>
                  <label class="sort__label">
                    <input type="checkbox" /> <span>Woman</span>
                  </label>
                  <label class="sort__label">
                    <input type="checkbox" /> <span>Kids</span>
                  </label>
                </div>
              </details>
              <FilterProvider>
                <ProductFilter />
              </FilterProvider>
              <details class="sort__details">
                <summary class="sort__summary">
                  PRICE
                  <svg
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                      fill="#6F6E6E"
                    />
                  </svg>
                </summary>
                <div class="sort__content sort__content__pricebox">
                  <input min="1" max="10" type="range" step="1" />
                </div>
              </details>
            </div>
          </div>
          <section class="product-box center">
            <div class="product-box__content">
              <Provider store={store}>
                <FilterProvider>
                  <ProductList />
                </FilterProvider>
              </Provider>
            </div>
          </section>
          <div class="selector">
            <div class="selector__page">
              <a href="#" class="selector__page__item">
                <img
                  src="img/Arrow_left.svg"
                  alt="arrow left"
                  class="selector__arrow"
                />
              </a>
              <a href="#" class="selector__page__item">
                1
              </a>
              <a href="#" class="selector__page__item">
                2
              </a>
              <a href="#" class="selector__page__item">
                3
              </a>
              <a href="#" class="selector__page__item">
                4
              </a>
              <a href="#" class="selector__page__item">
                5
              </a>
              <a href="#" class="selector__page__item">
                6.....20
              </a>
              <a href="#" class="selector__page__item">
                <img
                  src="img/Arrow_right.svg"
                  alt="arrow right"
                  class="selector__arrow"
                />
              </a>
            </div>
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
