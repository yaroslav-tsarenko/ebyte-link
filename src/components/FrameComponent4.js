import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "", esimasisvg, asia, propWidth }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`esimasisvg-parent ${className}`} style={frameDiv1Style}>
      <img className="esimasisvg-icon2" alt="" src={esimasisvg} />
      <div className="asia-wrapper">
        <div className="asia2">{asia}</div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  esimasisvg: PropTypes.string,
  asia: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default FrameComponent4;
