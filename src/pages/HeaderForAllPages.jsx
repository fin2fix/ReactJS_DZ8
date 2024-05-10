import "../App.css";
import "../style.css";
import BasketQuantity from "../Components/BasketQuantity";
import { store } from "../Store/store";
import { Provider } from "react-redux";
import React from "react";

export default function HeaderForAllPages() {
  return (
    <>
      <header class="header center">
        <div class="header__left">
          <a href="/">
            <img src="img/logo.png" alt="logo" />
          </a>
          <a href="/catalog">
            <img src="img/search.svg" alt="search" />
          </a>
        </div>
        <nav class="header__right">
          <label for="header__check">
            <img class="header__link-site" src="img/menu.svg" alt="menu" />
          </label>
          <a class="header__link-site mobile_none" href="/reg">
            <img src="img/reg.svg" alt="reg" />
          </a>
          <a
            class="header__link-site headerlink__extra__gap mobile_none"
            href="/cart"
          >
            <img class="cart-img" src="img/cart.svg" alt="cart" />
            <Provider store={store}>
              <BasketQuantity />
            </Provider>
          </a>
        </nav>
        <input class="header__checkbox" id="header__check" type="checkbox" />
        <div class="mobile-menu">
          <div class="mobile-menu__link-site">
            <a href="/reg">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z"
                  fill="black"
                />
              </svg>
            </a>
            <a href="/cart">
              <svg
                width="32"
                height="29"
                viewBox="0 0 32 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.2009 29C25.5532 28.9738 24.9415 28.6948 24.4972 28.2227C24.0529 27.7506 23.8114 27.1232 23.8245 26.475C23.8376 25.8269 24.1043 25.2097 24.5673 24.7559C25.0303 24.3022 25.6527 24.048 26.301 24.048C26.9493 24.048 27.5717 24.3022 28.0347 24.7559C28.4977 25.2097 28.7644 25.8269 28.7775 26.475C28.7906 27.1232 28.549 27.7506 28.1047 28.2227C27.6604 28.6948 27.0488 28.9738 26.401 29H26.2009ZM6.75293 26.32C6.75293 25.79 6.91011 25.2718 7.20459 24.8311C7.49907 24.3904 7.91764 24.0469 8.40735 23.844C8.89705 23.6412 9.43594 23.5881 9.95581 23.6915C10.4757 23.7949 10.9532 24.0502 11.328 24.425C11.7028 24.7998 11.9581 25.2773 12.0615 25.7972C12.1649 26.317 12.1118 26.8559 11.9089 27.3456C11.7061 27.8353 11.3626 28.2539 10.9219 28.5483C10.4812 28.8428 9.96304 29 9.43298 29C9.08087 29.0003 8.73212 28.9311 8.40674 28.7966C8.08136 28.662 7.78569 28.4646 7.53662 28.2158C7.28755 27.9669 7.09001 27.6713 6.9552 27.3461C6.82039 27.0208 6.75098 26.6721 6.75098 26.32H6.75293ZM10.553 20.686C10.2935 20.6868 10.0409 20.6024 9.83411 20.4457C9.62727 20.2891 9.47758 20.0689 9.40796 19.819L4.57495 2.36401H1.18201C0.868521 2.36401 0.567859 2.23947 0.346191 2.01781C0.124523 1.79614 0 1.49549 0 1.18201C0 0.868519 0.124523 0.567873 0.346191 0.346205C0.567859 0.124537 0.868521 5.81268e-06 1.18201 5.81268e-06H5.46301C5.7225 -0.00080736 5.97504 0.0837201 6.18176 0.240568C6.38848 0.397416 6.53784 0.617884 6.60693 0.868006L11.4399 18.323H24.6179L29.001 8.27501H14.401C14.2428 8.27961 14.0854 8.25242 13.9379 8.19507C13.7904 8.13771 13.6559 8.05134 13.5424 7.94108C13.4288 7.83082 13.3386 7.69891 13.277 7.55315C13.2154 7.40739 13.1836 7.25075 13.1836 7.0925C13.1836 6.93426 13.2154 6.77762 13.277 6.63186C13.3386 6.4861 13.4288 6.35419 13.5424 6.24393C13.6559 6.13367 13.7904 6.0473 13.9379 5.98994C14.0854 5.93259 14.2428 5.90541 14.401 5.91001H30.814C31.0097 5.90996 31.2022 5.95866 31.3744 6.05172C31.5465 6.14478 31.6928 6.27926 31.7999 6.44301C31.9078 6.60729 31.9734 6.79569 31.9908 6.99145C32.0083 7.18721 31.9771 7.38424 31.9 7.565L26.495 19.977C26.4026 20.1876 26.251 20.3668 26.0585 20.4927C25.866 20.6186 25.641 20.6858 25.411 20.686H10.553Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
          <h3 class="mobile-menu__heading">MENU</h3>
          <div class="mobile-menu__box">
            <div class="mobile-menu__item">
              <a href="/catalog" class="mobile-menu__title">
                MAN
              </a>
              <ul class="mobile-menu__list">
                <li>
                  <a class="mobile-menu__link" href="/catalog">
                    Accessories
                  </a>
                </li>
                <li>
                  <a class="mobile-menu__link" href="/catalog">
                    Bags
                  </a>
                </li>
                <li>
                  <a class="mobile-menu__link" href="/catalog">
                    Denim
                  </a>
                </li>
                <li>
                  <a class="mobile-menu__link" href="/catalog">
                    T-Shirts
                  </a>
                </li>
              </ul>
            </div>
            <div class="mobile-menu__item">
              <a href="/catalog" class="mobile-menu__title">
                WOMAN
              </a>
              <ul class="mobile-menu__list">
                <li>
                  <a class="mobile-menu__link" href="/catalog">
                    Accessories
                  </a>
                </li>
                <li>
                  <a class="mobile-menu__link" href="/catalog">
                    Bags
                  </a>
                </li>
                <li>
                  <a class="mobile-menu__link" href="/catalog">
                    Denim
                  </a>
                </li>
                <li>
                  <a class="mobile-menu__link" href="/catalog">
                    T-Shirts
                  </a>
                </li>
              </ul>
            </div>
            <div class="mobile-menu__item">
              <a href="/catalog" class="mobile-menu__title">
                KIDS
              </a>
              <ul class="mobile-menu__list">
                <li>
                  <a class="mobile-menu__link" href="/catalog">
                    Accessories
                  </a>
                </li>
                <li>
                  <a class="mobile-menu__link" href="/catalog">
                    Bags
                  </a>
                </li>
                <li>
                  <a class="mobile-menu__link" href="/catalog">
                    Denim
                  </a>
                </li>
                <li>
                  <a class="mobile-menu__link" href="/catalog">
                    T-Shirts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
