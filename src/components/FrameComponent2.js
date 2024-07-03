import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  cEOWeeklysvg,
  simOptionsTheRevolutionar,
  eSIMMarketplace,
  propHeight,
  propPadding,
  propAlignSelf,
  propFlex,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propHeight, propPadding, propAlignSelf, propFlex]);

  return (
    <div className={`frame-container ${className}`} style={frameDivStyle}>
      <div className="ceo-weeklysvg-parent">
        <img
          className="ceo-weeklysvg-icon"
          loading="lazy"
          alt=""
          src={cEOWeeklysvg}
        />
        <blockquote className="simoptions-the-revolutionary-container">
          <p className="simoptions-the-revolutionary">
            {simOptionsTheRevolutionar}
          </p>
          <p className="esim-marketplace">{eSIMMarketplace}</p>
        </blockquote>
      </div>
      <div className="read-article-parent">
        <div className="read-article">Read article</div>
        <img className="icon6" loading="lazy" alt="" src="/icon-14.svg" />
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
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

export default FrameComponent2;
