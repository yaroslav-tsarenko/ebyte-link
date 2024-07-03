import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <div className={`productdescriptionpage-inner ${className}`}>
      <div className="frame-wrapper1">
        <div className="wrapper-video-placeholder-2sv-parent">
          <div className="wrapper-video-placeholder-2sv1">
            <img
              className="video-placeholder-2svg-icon1"
              alt=""
              src="/videoplaceholder2svg.svg"
            />
          </div>
          <div className="overlayshadow1">
            <img
              className="f-secure-logosvg-icon1"
              alt=""
              src="/fsecure-logosvg.svg"
            />
            <img
              className="stars-emptysvg-icon1"
              alt=""
              src="/starsemptysvg.svg"
            />
            <div className="trusted-by-over-container2">
              <span className="trusted-by-over-container3">
                <p className="trusted-by-over-180001">
                  <span>{`Trusted by over `}</span>
                  <span className="span1">18.000</span>
                </p>
                <p className="travelers-every-month1">travelers every month</p>
              </span>
            </div>
            <div className="link20">
              <a
                className="see-all-reviews2"
                href="https://www.figma.com/design/P4CcAfvPitpB581k8Qiybz?node-id=2-45472"
                target="_blank"
              >
                See all reviews
              </a>
              <img className="icon16" alt="" src="/icon9.svg" />
            </div>
            <img className="container-icon2" alt="" src="/container.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
