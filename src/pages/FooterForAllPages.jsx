import "../App.css";
import "../style.css";

export default function FooterForAllPages() {
  return (
    <>
      <footer class="footer">
        <section class="footer__top">
          <div class="footer__top__content">
            <img src="img/girl_face.png" alt="girl face" />
            <p class="footer__top__text">
              &laquo;Vestibulum quis porttitor dui! Quisque viverra
              nunc&nbsp;mi,
              <span class="footer__top__text-ital">
                a&nbsp;pulvinar purus condimentum&raquo;
              </span>
            </p>
          </div>
          <article class="footer__top__content">
            <h4 class="footer__top__firsthead">SUBSCRIBE</h4>
            <h5 class="footer__top__secondhead">
              FOR OUR NEWLETTER AND PROMOTION
            </h5>
            <div class="footer__subscribe">
              <form action="#">
                <input
                  class="footer__subscribe__email"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <button class="footer__subscribe__button" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </article>
        </section>
        <section class="footer__bottom">
          <p class="footer__bottom__text">
            &copy;&nbsp;2024 Brand All Rights Reserved.
          </p>
          <div class="footer__bottom__content">
            <a class="brand__img" href="https://www.facebook.com/">
              <img src="img/Brand-facebook.svg" alt="brand facebook" />
            </a>
            <a class="brand__img" href="https://www.instagram.com/">
              <img src="img/Brand-instagram.svg" alt="brand instagram" />
            </a>
            <a class="brand__img" href="https://www.pinterest.com/">
              <img src="img/Brand-pinterest.svg" alt="brand pinterest" />
            </a>
            <a class="brand__img" href="https://twitter.com/">
              <img src="img/Brand-twitter.svg" alt="brand twitter" />
            </a>
          </div>
        </section>
      </footer>
    </>
  );
}
