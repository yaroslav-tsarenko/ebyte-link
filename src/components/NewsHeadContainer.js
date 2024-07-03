import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import "./NewsHeadContainer.css";

const NewsHeadContainer = ({ className = "" }) => {
  return (
    <div className={`news-head-container1 ${className}`}>
      <div className="container7">
        <div className="background12" />
        <div className="trust-container-parent">
          <div className="trust-container">
            <div className="heading-210">SimOptions in the news</div>
            <div className="heading-314">In the spotlight</div>
          </div>
          <div className="c-e-o-weekly-container">
            <FrameComponent5
              cEOWeeklysvg="/ceoweeklysvg.svg"
              simOptionsTheRevolutionar={`"SimOptions, The Revolutionary`}
              eSIMMarketplace={`eSIM Marketplace"`}
            />
            <FrameComponent5
              cEOWeeklysvg="/businessinsidersvg.svg"
              simOptionsTheRevolutionar={`"providing the best and amazing  eSIM`}
              eSIMMarketplace={`package for the best price"`}
              propHeight="200px"
              propPadding="0px 0px 1px"
              propAlignSelf="unset"
              propFlex="unset"
            />
            <FrameComponent5
              cEOWeeklysvg="/yahoosvg.svg"
              simOptionsTheRevolutionar={`"covers 160 countries across`}
              eSIMMarketplace={`the world"`}
              propHeight="200px"
              propPadding="0px 0px 1px"
              propAlignSelf="unset"
              propFlex="unset"
            />
            <div className="container8">
              <FrameComponent5
                cEOWeeklysvg="/yahoosvg.svg"
                simOptionsTheRevolutionar={`"SimOptions offers a prime`}
                eSIMMarketplace={`eSIM bundle at the best price"`}
                propHeight="unset"
                propPadding="unset"
                propAlignSelf="stretch"
                propFlex="1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsHeadContainer.propTypes = {
  className: PropTypes.string,
};

export default NewsHeadContainer;
