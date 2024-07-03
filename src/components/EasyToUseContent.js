import NavigationContent from "./NavigationContent";
import PropTypes from "prop-types";
import "./EasyToUseContent.css";

const EasyToUseContent = ({ className = "" }) => {
  return (
    <div className={`easy-to-use-content ${className}`}>
      <div className="easy-to-use-header">
        <div className="easy-to-use-title">
          <h1 className="heading-25">Easy to use</h1>
          <div className="heading-33">Installation process of an eSIM</div>
        </div>
      </div>
      <div className="easy-to-use-image">
        <div className="image-3-parent">
          <img className="image-3-icon" alt="" src="/image-31@2x.png" />
          <div className="phone-content">
            <div className="screen" />
            <img
              className="image-11-layerstyle-icon"
              loading="lazy"
              alt=""
              src="/image-11-layerstyle.svg"
            />
            <img
              className="ebyte-icon"
              loading="lazy"
              alt=""
              src="/ebyte.svg"
            />
          </div>
        </div>
        <div className="navigation-design">
          <NavigationContent
            navigationIcon="1 / 3"
            simpleNavigation=" Simple Navigation"
            weveOrganizedOurWebsiteLa="We've organized our website layout in a clear and straightforward manner, so you can easily find what you're looking for."
          />
          <NavigationContent
            navigationIcon="2 / 3"
            simpleNavigation="Intuitive Design"
            weveOrganizedOurWebsiteLa="Our website's design is crafted with you in mind. We use intuitive interfaces, clear labeling, and familiar navigation"
            propAlignSelf="unset"
            propWidth="347.2px"
            propFlex="unset"
          />
          <div className="responsive-layout">
            <div className="backgroundshadow4" />
            <NavigationContent
              navigationIcon="3 / 3"
              simpleNavigation=" Responsive Layout"
              weveOrganizedOurWebsiteLa="No matter what device you're using – whether it's a desktop, laptop, tablet, or smartphone – our website adjusts seamlessly"
              propAlignSelf="unset"
              propWidth="unset"
              propFlex="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

EasyToUseContent.propTypes = {
  className: PropTypes.string,
};

export default EasyToUseContent;
