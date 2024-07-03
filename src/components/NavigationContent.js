import { useMemo } from "react";
import PropTypes from "prop-types";
import "./NavigationContent.css";

const NavigationContent = ({
  className = "",
  navigationIcon,
  simpleNavigation,
  weveOrganizedOurWebsiteLa,
  propAlignSelf,
  propWidth,
  propFlex,
}) => {
  const navigationContentStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      flex: propFlex,
    };
  }, [propAlignSelf, propWidth, propFlex]);

  return (
    <div
      className={`navigation-content ${className}`}
      style={navigationContentStyle}
    >
      <div className="navigation-cards">
        <div className="backgroundshadow3" />
      </div>
      <div className="navigation-icon-parent">
        <div className="navigation-icon">{navigationIcon}</div>
        <div className="simple-navigation">{simpleNavigation}</div>
        <div className="weve-organized-our">{weveOrganizedOurWebsiteLa}</div>
      </div>
    </div>
  );
};

NavigationContent.propTypes = {
  className: PropTypes.string,
  navigationIcon: PropTypes.string,
  simpleNavigation: PropTypes.string,
  weveOrganizedOurWebsiteLa: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
};

export default NavigationContent;
