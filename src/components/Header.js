import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <div className={`header2 ${className}`}>
      <div className="header3">
        <div className="wrapper">
          <img className="logo-icon2" alt="" src="/logo.svg" />
          <div className="list1">
            <div className="items">
              <div className="links2">
                <a
                  className="item-link12"
                  href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-30570"
                  target="_blank"
                >
                  SIM Cards
                </a>
                <a
                  className="item-link13"
                  href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-43782"
                  target="_blank"
                >
                  Delivery Options
                </a>
                <a
                  className="item-link14"
                  href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-45472"
                  target="_blank"
                >
                  Reviews
                </a>
                <a
                  className="item-link15"
                  href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-47074"
                  target="_blank"
                >
                  FAQ
                </a>
              </div>
              <div className="item-link16">
                <div className="gradient1" />
                <a
                  className="esims1"
                  href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-2"
                  target="_blank"
                >
                  eSIMs
                </a>
              </div>
            </div>
          </div>
          <div className="account">
            <div className="avatar-parent">
              <img className="avatar-icon" alt="" src="/vector.svg" />
              <div className="background8">
                <a
                  className="a4"
                  href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-47572"
                  target="_blank"
                >
                  0
                </a>
              </div>
            </div>
            <div className="link12">
              <a
                className="value"
                href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-47572"
                target="_blank"
              >
                $
              </a>
              <div className="code">
                <a
                  className="usd1"
                  href="https://www.figma.com/design/JHDjExuuScqtwlEpYTij5a?node-id=2-47572"
                  target="_blank"
                >
                  USD
                </a>
              </div>
            </div>
            <img className="link-icon1" alt="" src="/link.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
