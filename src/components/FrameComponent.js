import BenefitCardRow from "./BenefitCardRow";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`benefits-content-parent ${className}`}>
      <div className="benefits-content">
        <div className="benefits-header">
          <div className="benefits-title">
            <h1 className="heading-27">SimOptions key benefits</h1>
          </div>
          <div className="heading-35">
            Why SimOptions marketplace is the best choice for eSIMs?
          </div>
        </div>
      </div>
      <div className="benefit-cards">
        <div className="benefit-card-items">
          <div className="benefit-card-row1">
            <div className="benefit-card-content">
              <img
                className="container-icon1"
                loading="lazy"
                alt=""
                src="/container-1.svg"
              />
            </div>
            <div className="global-coverage">Global Coverage</div>
          </div>
          <BenefitCardRow
            border="/border-1.svg"
            convenientActivation="Convenient Activation"
          />
          <BenefitCardRow
            border="/border.svg"
            convenientActivation="Flexibility and Control"
          />
        </div>
        <div className="image-3-group">
          <img className="image-3-icon1" alt="" src="/image-3-1@2x.png" />
          <div className="ebyte-logo-content">
            <div className="logo-background" />
            <img
              className="image-11-layerstyle-icon1"
              loading="lazy"
              alt=""
              src="/image-11-layerstyle.svg"
            />
            <img
              className="ebyte-icon1"
              loading="lazy"
              alt=""
              src="/ebyte.svg"
            />
          </div>
        </div>
        <div className="benefits-parent">
          <BenefitCardRow
            border="/border-4.svg"
            convenientActivation="Enhanced Security"
          />
          <BenefitCardRow
            border="/border-5.svg"
            convenientActivation="Transparent Pricing"
          />
          <div className="benefits">
            <img
              className="border-icon3"
              loading="lazy"
              alt=""
              src="/border-6.svg"
            />
            <div className="value-added-services">Value-Added Services</div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
