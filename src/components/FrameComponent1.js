import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`container-container ${className}`}>
      <div className="container5">
        <div className="background7" />
        <div className="news-head-content">
          <div className="they-trust">
            <h1 className="heading-26">SimOptions in the news</h1>
            <div className="heading-34">In the spotlight</div>
          </div>
          <div className="articles">
            <FrameComponent2
              cEOWeeklysvg="/ceoweeklysvg.svg"
              simOptionsTheRevolutionar={`"SimOptions, The Revolutionary`}
              eSIMMarketplace={`eSIM Marketplace"`}
            />
            <FrameComponent2
              cEOWeeklysvg="/businessinsidersvg.svg"
              simOptionsTheRevolutionar={`"providing the best and amazing  eSIM`}
              eSIMMarketplace={`package for the best price"`}
              propHeight="200px"
              propPadding="0px 0px 1px"
              propAlignSelf="unset"
              propFlex="unset"
            />
            <FrameComponent2
              cEOWeeklysvg="/yahoosvg.svg"
              simOptionsTheRevolutionar={`"covers 160 countries across`}
              eSIMMarketplace={`the world"`}
              propHeight="200px"
              propPadding="0px 0px 1px"
              propAlignSelf="unset"
              propFlex="unset"
            />
            <div className="container6">
              <FrameComponent2
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
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
