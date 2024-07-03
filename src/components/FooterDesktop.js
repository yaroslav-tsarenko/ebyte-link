import PropTypes from "prop-types";
import "./FooterDesktop.css";

const FooterDesktop = ({
  className = "",
  linkAppleAppStore1svg,
  linkGooglePlayStore1svg,
  linkOutputOnlinepngtoolsp,
  linkEsimsIoBadge7png,
}) => {
  return (
    <footer className={`footer-desktop ${className}`}>
      <div className="footer">
        <div className="columns">
          <div className="column">
            <div className="top">
              <img
                className="logo-icon1"
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
            </div>
            <h1 className="heading-37">GoDownload Now!</h1>
            <div className="store-links">
              <div className="links">
                <img
                  className="link-apple-app-store-1svg"
                  loading="lazy"
                  alt=""
                  src={linkAppleAppStore1svg}
                />
                <img
                  className="link-google-play-store-1svg"
                  loading="lazy"
                  alt=""
                  src={linkGooglePlayStore1svg}
                />
              </div>
            </div>
          </div>
          <div className="column1">
            <div className="social-links">
              <div className="links1">
                <div className="link7">
                  <div className="symbol"></div>
                </div>
                <div className="link8">
                  <div className="symbol1"></div>
                </div>
                <div className="link9">
                  <div className="symbol2"></div>
                </div>
                <div className="link10">
                  <div className="symbol3"></div>
                </div>
                <div className="link11">
                  <div className="symbol4"></div>
                </div>
              </div>
            </div>
            <div className="everselinkcom">
              © 2024 EverseLink.com     |     All Rights Reserved
            </div>
            <div className="column2">
              <div className="logos">
                <div className="link-output-onlinepngtoolsp-wrapper">
                  <img
                    className="link-output-onlinepngtoolsp"
                    loading="lazy"
                    alt=""
                    src={linkOutputOnlinepngtoolsp}
                  />
                </div>
                <img
                  className="link-esims-io-badge-7png"
                  loading="lazy"
                  alt=""
                  src={linkEsimsIoBadge7png}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="column3">
          <div className="legal-links">
            <div className="item-link5">News Room</div>
            <div className="item-link6">Legal</div>
            <div className="item-link7">Privacy Policy</div>
            <div className="item-link8">{`Terms & Conditions`}</div>
            <div className="item-link9">Cookie Policy</div>
            <div className="item-link10">Code of Practice</div>
            <div className="item-link11">Accessibility</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop.propTypes = {
  className: PropTypes.string,
  linkAppleAppStore1svg: PropTypes.string,
  linkGooglePlayStore1svg: PropTypes.string,
  linkOutputOnlinepngtoolsp: PropTypes.string,
  linkEsimsIoBadge7png: PropTypes.string,
};

export default FooterDesktop;
