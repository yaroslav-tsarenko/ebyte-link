import FrameComponent7 from "./FrameComponent7";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div className={`frame-parent7 ${className}`}>
      <div className="frame-wrapper2">
        <div className="heading-2-easy-to-get-parent">
          <div className="heading-29">Easy to get</div>
          <div className="heading-3-get-your-sim-cards-wrapper">
            <div className="heading-313">Get your SIM Cards with ease</div>
          </div>
        </div>
      </div>
      <div className="frame-parent8">
        <div className="frame-wrapper3">
          <div className="frame-parent9">
            <FrameComponent7
              prop="1"
              choose="Choose"
              destination="destination"
              simcardEasyToGet1svg="/simcardeasytoget1svg.svg"
            />
            <div className="choose-from-over-container">
              <span>{`Choose from over `}</span>
              <b>200+</b>
              <span>{` `}</span>
              <b>{`travel destinations `}</b>
              <span>worldwide</span>
            </div>
          </div>
        </div>
        <div className="frame-parent10">
          <div className="parent1">
            <b className="b3">2</b>
            <div className="backgroundshadow9">
              <div className="select-the-best-albania-sim-ca-wrapper">
                <div className="select-the-best-container">
                  <p className="select-the-best">Select the best</p>
                  <p className="albania-sim-card">Albania SIM Card for you</p>
                </div>
              </div>
              <div className="frame-parent11">
                <div className="logo-title-parent">
                  <img
                    className="logo-title-icon"
                    alt=""
                    src="/logo-title.svg"
                  />
                  <div className="price-info">
                    <img className="prices-icon" alt="" src="/prices.svg" />
                  </div>
                </div>
                <div className="button-container">
                  <img
                    className="price-button-icon"
                    alt=""
                    src="/price-button.svg"
                  />
                  <div className="button-details">
                    <div className="star-rating">
                      <div className="rating-icon">
                        <img
                          className="path-213-icon"
                          alt=""
                          src="/path-213.svg"
                        />
                        <img
                          className="group-37-icon"
                          alt=""
                          src="/group-37.svg"
                        />
                      </div>
                      <div className="rating-value">
                        <img className="stars-icon" alt="" src="/stars.svg" />
                        <img
                          className="path-215-icon"
                          alt=""
                          src="/path-215.svg"
                        />
                      </div>
                    </div>
                    <div className="plan-tag">
                      <img className="rectangle-37-icon" alt="" />
                      <div className="tag-icon">
                        <img
                          className="rectangle-119-icon"
                          alt=""
                          src="/rectangle-119.svg"
                        />
                        <div className="group-38-parent">
                          <img
                            className="group-38-icon"
                            alt=""
                            src="/group-38.svg"
                          />
                          <img
                            className="path-217-icon"
                            alt=""
                            src="/path-217.svg"
                          />
                        </div>
                        <img
                          className="rectangle-38-icon"
                          alt=""
                          src="/rectangle-38.svg"
                        />
                        <div className="star-icon">
                          <img
                            className="group-39-icon"
                            alt=""
                            src="/group-39.svg"
                          />
                          <img
                            className="path-219-icon"
                            alt=""
                            src="/path-219.svg"
                          />
                        </div>
                        <img
                          className="rectangle-39-icon"
                          alt=""
                          src="/rectangle-39.svg"
                        />
                        <div className="help-icon-parent">
                          <div className="help-icon">
                            <img
                              className="path-220-icon"
                              alt=""
                              src="/path-220.svg"
                            />
                            <img
                              className="help-circle-1-4-icon"
                              alt=""
                              src="/helpcircle-1-4.svg"
                            />
                          </div>
                          <img
                            className="path-221-icon"
                            alt=""
                            src="/path-221.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="plan-details1">
                <div className="data-plan">
                  <img className="detail-icon1" alt="" src="/detail.svg" />
                  <img className="detail-2-icon" alt="" src="/detail2.svg" />
                  <img className="detail-3-icon" alt="" src="/detail3.svg" />
                </div>
                <div className="background10">
                  <div className="background11" />
                </div>
              </div>
            </div>
          </div>
          <div className="choose-the-best-container">
            <span className="choose-the">{`Choose the  `}</span>
            <b>best Albania SIM Card deal for your needs</b>
          </div>
        </div>
        <div className="frame-wrapper4">
          <div className="frame-parent12">
            <FrameComponent7
              prop="3"
              choose="Receive your"
              destination="SIM Card by mail"
              simcardEasyToGet1svg="/simcardeasytoget3svg.svg"
            />
            <div className="select-one-of">{`Select one of our reliable logistic partners at low cost `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
