import BackgroundShadow from "./BackgroundShadow";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`deals-content-wrapper ${className}`}>
      <div className="deals-content">
        <div className="deals-header">
          <h1 className="heading-24">Best eSIM deals</h1>
          <div className="heading-32">
            SimOptions offers the best prepaid eSIM for your journey around the
            world
          </div>
        </div>
        <div className="deals-grid">
          <BackgroundShadow
            image="/image.svg"
            europe="Europe"
            priceValue="$14.90"
            gLTEInEurope="4G/LTE in Europe"
          />
          <BackgroundShadow
            image="/image-1.svg"
            europe="France"
            priceValue="$4.50"
            gLTEInEurope="4G/LTE in France"
          />
          <BackgroundShadow
            image="/image-2.svg"
            europe="USA"
            priceValue="$4.50"
            gLTEInEurope="4G/LTE in USA"
          />
          <BackgroundShadow
            image="/image-3.svg"
            europe="Thailand"
            priceValue="$4.50"
            gLTEInEurope="4G/LTE in USA"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
