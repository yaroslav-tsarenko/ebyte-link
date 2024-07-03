import PropTypes from "prop-types";
import "./FrameComponent9.css";

const FrameComponent9 = ({
  className = "",
  yourCart,
  viewOrEditYourCartBeforeC,
}) => {
  return (
    <section className={`header-parent ${className}`}>
      <header className="header4">
        <div className="header5">
          <div className="logo-parent">
            <img className="logo-icon4" loading="lazy" alt="" src="/logo.svg" />
            <div className="list2">
              <div className="links-container-parent">
                <nav className="links-container">
                  <a
                    className="item-link24"
                    href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-30570"
                    target="_blank"
                  >
                    SIM Cards
                  </a>
                  <a
                    className="item-link25"
                    href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-43782"
                    target="_blank"
                  >
                    Delivery Options
                  </a>
                  <a
                    className="item-link26"
                    href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-45472"
                    target="_blank"
                  >
                    Reviews
                  </a>
                  <a
                    className="item-link27"
                    href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-47074"
                    target="_blank"
                  >
                    FAQ
                  </a>
                </nav>
                <div className="item-link28">
                  <div className="gradient2" />
                  <a
                    className="esims2"
                    href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-2"
                    target="_blank"
                  >
                    eSIMs
                  </a>
                </div>
              </div>
            </div>
            <div className="cart-button">
              <div className="button-icon-parent">
                <img
                  className="button-icon"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className="background13">
                  <a className="a5">0</a>
                </div>
              </div>
              <div className="link23">
                <a
                  className="a6"
                  href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-47572"
                  target="_blank"
                >
                  $
                </a>
                <div className="usd-wrapper">
                  <a className="usd2">USD</a>
                </div>
              </div>
              <img
                className="link-icon2"
                loading="lazy"
                alt=""
                src="/link.svg"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="cart-content-wrapper">
        <div className="cart-content">
          <div className="cart-title-container">
            <h1 className="your-cart">{yourCart}</h1>
          </div>
          <div className="view-or-edit">{viewOrEditYourCartBeforeC}</div>
        </div>
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
  yourCart: PropTypes.string,
  viewOrEditYourCartBeforeC: PropTypes.string,
};

export default FrameComponent9;
