import PropTypes from "prop-types";
import "./FooterDesktop1.css";

const FooterDesktop1 = ({
  className = "",
  linkAppleAppStore1svg,
  linkGooglePlayStore1svg,
  linkOutputOnlinepngtoolsp,
  linkEsimsIoBadge7png,
}) => {
  return (
    <div className={`footer-desktop1 ${className}`}>
      <div className="footer1">
        <div className="company-info-parent">
          <div className="company-info">
            <div className="logo-container">
              <img className="logo-icon3" alt="" src="/logo.svg" />
            </div>
            <div className="heading-38">GoDownload Now!</div>
            <div className="app-store-links">
              <div className="link-icons">
                <img
                  className="link-apple-app-store-1svg1"
                  alt=""
                  src={linkAppleAppStore1svg}
                />
                <img
                  className="link-google-play-store-1svg1"
                  alt=""
                  src={linkGooglePlayStore1svg}
                />
              </div>
            </div>
          </div>
          <div className="social-footer">
            <div className="social-links1">
              <div className="social-icons-container">
                <div className="link14">
                  <div className="symbol5"></div>
                </div>
                <div className="link15">
                  <div className="symbol6"></div>
                </div>
                <div className="link16">
                  <div className="symbol7"></div>
                </div>
                <div className="link17">
                  <div className="symbol8"></div>
                </div>
                <div className="link18">
                  <div className="symbol9"></div>
                </div>
              </div>
            </div>
            <div className="everselinkcom1">
              © 2024 EverseLink.com     |     All Rights Reserved
            </div>
            <div className="output">
              <div className="output-links">
                <div className="image-container1">
                  <img
                    className="link-output-onlinepngtoolsp1"
                    alt=""
                    src={linkOutputOnlinepngtoolsp}
                  />
                </div>
                <img
                  className="link-esims-io-badge-7png1"
                  alt=""
                  src={linkEsimsIoBadge7png}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="legal">
          <div className="legal-links1">
            <div className="item-link17">News Room</div>
            <div className="item-link18">Legal</div>
            <div className="item-link19">Privacy Policy</div>
            <div className="item-link20">{`Terms & Conditions`}</div>
            <div className="item-link21">Cookie Policy</div>
            <div className="item-link22">Code of Practice</div>
            <div className="item-link23">Accessibility</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterDesktop1.propTypes = {
  className: PropTypes.string,
  linkAppleAppStore1svg: PropTypes.string,
  linkGooglePlayStore1svg: PropTypes.string,
  linkOutputOnlinepngtoolsp: PropTypes.string,
  linkEsimsIoBadge7png: PropTypes.string,
};

export default FooterDesktop1;
