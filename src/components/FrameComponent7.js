import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({
  className = "",
  prop,
  choose,
  destination,
  simcardEasyToGet1svg,
}) => {
  return (
    <div className={`parent ${className}`}>
      <b className="b2">{prop}</b>
      <div className="backgroundshadow8">
        <div className="frame-parent6">
          <div className="choose-destination-wrapper">
            <div className="choose-destination">
              <p className="choose">{choose}</p>
              <p className="destination1">{destination}</p>
            </div>
          </div>
          <img
            className="simcard-easy-to-get-1svg-icon"
            alt=""
            src={simcardEasyToGet1svg}
          />
        </div>
        <div className="background-wrapper">
          <div className="background9" />
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  choose: PropTypes.string,
  destination: PropTypes.string,
  simcardEasyToGet1svg: PropTypes.string,
};

export default FrameComponent7;
