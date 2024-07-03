import PropTypes from "prop-types";
import "./Post.css";

const Post = ({
  className = "",
  image,
  theUltimateGuideToUsingEb,
  march2023,
  travelingInternationallyC,
}) => {
  return (
    <div className={`post ${className}`}>
      <img className="image-icon99" loading="lazy" alt="" src={image} />
      <div className="content2">
        <div className="the-ultimate-guide">{theUltimateGuideToUsingEb}</div>
        <div className="march-2023">{march2023}</div>
        <div className="traveling-internationally-can">
          {travelingInternationallyC}
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  theUltimateGuideToUsingEb: PropTypes.string,
  march2023: PropTypes.string,
  travelingInternationallyC: PropTypes.string,
};

export default Post;
