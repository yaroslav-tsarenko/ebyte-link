import PropTypes from "prop-types";
import "./OperatorsContainer.css";

const OperatorsContainer = ({ className = "" }) => {
  return (
    <div className={`operators-container ${className}`}>
      <div className="operators">
        <div className="operator-headings">
          <div className="operator-icons">
            <img className="icon8" alt="" src="/icon1.svg" />
          </div>
          <div className="heading-39">Best SIM Card Operators</div>
        </div>
        <div className="operator-headings1">|</div>
        <div className="operator-headings2">
          <div className="icon-wrapper">
            <img className="icon9" alt="" src="/icon2.svg" />
          </div>
          <div className="heading-310">Best Market Prices</div>
        </div>
        <div className="operator-headings3">|</div>
        <div className="operator-headings4">
          <div className="icon-container">
            <img className="icon10" alt="" src="/icon3.svg" />
          </div>
          <div className="heading-311">Pay As You Go</div>
        </div>
        <div className="operator-headings5">|</div>
        <div className="operator-headings6">
          <div className="icon-frame">
            <img className="icon11" alt="" src="/icon4.svg" />
          </div>
          <div className="heading-312">24/7 Customer Service</div>
        </div>
      </div>
      <div className="operator-logo-container">
        <div className="backgroundshadow7">
          <img
            className="three-uk-logosvg-icon"
            alt=""
            src="/threeuklogosvg@2x.png"
          />
        </div>
        <div className="wrapper-backgroundshadow">
          <img
            className="backgroundshadow-icon"
            alt=""
            src="/backgroundshadow.svg"
          />
        </div>
        <div className="price-container">
          <div className="empty-shadows">
            <div className="wrapper-backgroundshadow1">
              <img
                className="backgroundshadow-icon1"
                alt=""
                src="/backgroundshadow1.svg"
              />
            </div>
            <div className="wrapper-backgroundshadow2">
              <img
                className="backgroundshadow-icon2"
                alt=""
                src="/backgroundshadow2.svg"
              />
            </div>
            <div className="wrapper-backgroundshadow3">
              <img
                className="backgroundshadow-icon3"
                alt=""
                src="/backgroundshadow3.svg"
              />
            </div>
          </div>
          <div className="holiday-world-container">
            <div className="overlaybordershadow">
              <div className="holiday-container">
                <div className="price">
                  <div className="operator">
                    <img className="data-icon1" alt="" src="/data1.svg" />
                    <div className="operator-name">
                      <div className="holiday-world">Holiday World</div>
                      <div className="orange">Orange</div>
                    </div>
                  </div>
                  <div className="duration">
                    <div className="calls">$59.90</div>
                    <div className="s-m-s">$49.90</div>
                  </div>
                </div>
              </div>
              <div className="rating">
                <div className="review-count">
                  <div className="data-87">87 customer reviews</div>
                  <img className="data-link" alt="" src="/data--link.svg" />
                </div>
              </div>
              <div className="table-body">
                <div className="row37">
                  <div className="plan-feature">
                    <img className="icon12" alt="" src="/icon5.svg" />
                    <div className="feature-detail">
                      <div className="data"> Data</div>
                    </div>
                    <div className="gb">10GB</div>
                  </div>
                </div>
                <div className="row38">
                  <div className="icon-group">
                    <img className="icon13" alt="" src="/icon6.svg" />
                    <div className="calls-sms-wrapper">
                      <div className="calls-sms">{` Calls & SMS`}</div>
                    </div>
                    <div className="no">No</div>
                  </div>
                </div>
                <div className="row39">
                  <div className="validity-cell">
                    <div className="validity-icon">
                      <img className="icon14" alt="" src="/icon7.svg" />
                    </div>
                    <div className="validity-duration">
                      <div className="validity"> Validity</div>
                    </div>
                    <div className="cell-14">14 days</div>
                  </div>
                </div>
              </div>
              <div className="plan-footer">
                <div className="plan-action">
                  <div className="group">
                    <div className="button-left">
                      <img className="vector-icon" alt="" src="/vector1.svg" />
                      <img className="group-icon" alt="" src="/group.svg" />
                      <img
                        className="group-icon1"
                        alt=""
                        src="/group1@2x.png"
                      />
                      <img className="vector-icon1" alt="" src="/vector2.svg" />
                    </div>
                  </div>
                  <img className="group-icon2" alt="" src="/group2.svg" />
                  <div className="stock-info">
                    <img className="group-icon3" alt="" src="/group3@2x.png" />
                  </div>
                </div>
              </div>
              <div className="plan-details">
                <div className="link19">
                  <a
                    className="out-of-stock"
                    href="https://www.figma.com/design/P4CcAfvPitpB581k8Qiybz?node-id=2-63040"
                    target="_blank"
                  >
                    Out of stock!
                  </a>
                </div>
                <div className="detail-icon">
                  <div className="detail-info">
                    <div className="details">Details</div>
                    <img className="icon15" alt="" src="/icon8.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-backgroundshadow4">
          <img
            className="backgroundshadow-icon4"
            alt=""
            src="/backgroundshadow4.svg"
          />
        </div>
        <div className="wrapper-backgroundshadow5">
          <img
            className="backgroundshadow-icon5"
            alt=""
            src="/backgroundshadow5.svg"
          />
        </div>
      </div>
    </div>
  );
};

OperatorsContainer.propTypes = {
  className: PropTypes.string,
};

export default OperatorsContainer;
