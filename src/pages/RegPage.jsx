import "../App.css";
import "../style.css";
import FooterForAllPages from "./FooterForAllPages";
import HeadPreLinkForAllPages from "./HeadPreLinkForAllPages";
import HeaderForAllPages from "./HeaderForAllPages";

export default function RegPage() {
  return (
    <>
      <head>
        <HeadPreLinkForAllPages />
        <title>REGISTRATION</title>
      </head>

      <body>
        <div class="top">
          <HeaderForAllPages />
          <section class="head center">
            <h2 class="head__heading">REGISTRATION</h2>
          </section>
          <section class="reg-box center">
            <div class="reg-box__data">
              <form action="#" class="reg-box__form">
                <h4 class="reg-box__form-heading">Your Name</h4>
                <input
                  class="reg-box__input"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  class="reg-box__input"
                  type="text"
                  placeholder="Last Name"
                />
                <div class="reg-box__radio-box">
                  <label class="reg-box__label">
                    <input type="radio" name="question" value="male" />
                    Male
                  </label>
                  <br />
                  <label class="reg-box__label">
                    <input type="radio" name="question" value="female" />
                    Female
                  </label>
                  <br />
                  <label class="reg-box__label">
                    <input type="radio" name="question" value="other" />
                    Other
                  </label>
                </div>
                <h4 class="reg-box__form-heading">Login details</h4>
                <input
                  class="reg-box__input"
                  type="email"
                  placeholder="Email"
                />
                <input
                  class="reg-box__input"
                  type="password"
                  placeholder="Password"
                />
                <p class="reg-box__text">
                  Please use 8&nbsp;or more characters, with at&nbsp;least
                  1&nbsp;number and a mixture of&nbsp;uppercase and lowercase
                  letters
                </p>
                <button class="reg-box__form-button" type="submit">
                  JOIN NOW
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12l-8.991 6.228v-2.722c2.54-1.757 5.053-3.506 5.053-3.506s-2.513-1.718-5.053-3.474v-2.722l8.991 6.196zm-6.96 0l-9.04-6.118v3.118h-8v6h8v3.118l9.04-6.118z" />
                  </svg>
                </button>
              </form>
            </div>
            <div class="reg-box__info">
              <h3 class="reg-box__content">LOYALTY HAS ITS PERKS</h3>
              <p class="reg-box__content">
                Get in&nbsp;on&nbsp;the loyalty program where you can earn
                points and unlock serious perks. Starting with these
                as&nbsp;soon as&nbsp;you join:
              </p>
              <ul>
                <li class="reg-box__list tick-mark-before">
                  15% off welcome offer
                </li>
                <li class="reg-box__list tick-mark-before">
                  Free shipping, returns and exchanges on&nbsp;all orders
                </li>
                <li class="reg-box__list tick-mark-before">
                  $10 off a&nbsp;purchase on&nbsp;your birthday
                </li>
                <li class="reg-box__list tick-mark-before">
                  Early access to&nbsp;products
                </li>
                <li class="reg-box__list tick-mark-before">
                  Exclusive offers &amp;&nbsp;rewards
                </li>
              </ul>
            </div>
          </section>
          <FooterForAllPages />
        </div>
      </body>
    </>
  );
}
