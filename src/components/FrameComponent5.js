import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({
  className = "",
  cEOWeeklysvg,
  simOptionsTheRevolutionar,
  eSIMMarketplace,
  propHeight,
  propPadding,
  propAlignSelf,
  propFlex,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propHeight, propPadding, propAlignSelf, propFlex]);

  return (
    <div className={`frame-parent13 ${className}`} style={frameDiv2Style}>
      <div className="ceo-weeklysvg-group">
        <img className="ceo-weeklysvg-icon1" alt="" src={cEOWeeklysvg} />
        <div className="simoptions-the-revolutionary-container1">
          <p className="simoptions-the-revolutionary1">
            {simOptionsTheRevolutionar}
          </p>
          <p className="esim-marketplace1">{eSIMMarketplace}</p>
        </div>
      </div>
      <div className="read-article-group">
        <div className="read-article1">Read article</div>
        <img className="icon17" alt="" src="/icon-14.svg" />
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  cEOWeeklysvg: PropTypes.string,
  simOptionsTheRevolutionar: PropTypes.string,
  eSIMMarketplace: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
};

export default FrameComponent5;
