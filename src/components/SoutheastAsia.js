import PropTypes from "prop-types";
import "./SoutheastAsia.css";

const SoutheastAsia = ({ className = "" }) => {
  return (
    <div className={`southeast-asia ${className}`}>
      <div className="southeast-asia-container">
        <div className="southeast-asia-title">
          <img className="esimseasvg-icon2" alt="" src="/esimseasvg1.svg" />
          <div className="south-east-asia2">South East Asia</div>
        </div>
        <div className="southeast-asia-countries">
          <div className="country-grid">
            <img className="image-icon206" alt="" src="/image112.svg" />
            <div className="brunei2">Brunei</div>
          </div>
          <div className="country-grid1">
            <img className="image-icon207" alt="" src="/image113.svg" />
            <div className="cambodia">Cambodia</div>
          </div>
          <div className="country-grid2">
            <img className="image-icon208" alt="" src="/image114.svg" />
            <div className="indonesia">Indonesia</div>
          </div>
          <div className="country-grid3">
            <img className="image-icon209" alt="" src="/image115.svg" />
            <div className="laos">Laos</div>
          </div>
          <div className="country-grid4">
            <img className="image-icon210" alt="" src="/image116.svg" />
            <div className="malaysia">Malaysia</div>
          </div>
          <div className="country-grid5">
            <img className="image-icon211" alt="" src="/image117.svg" />
            <div className="philippines">Philippines</div>
          </div>
          <div className="country-grid6">
            <img className="image-icon212" alt="" src="/image118.svg" />
            <div className="singapore">Singapore</div>
          </div>
          <div className="country-grid7">
            <img className="image-icon213" alt="" src="/image119.svg" />
            <div className="thailand">Thailand</div>
          </div>
          <div className="country-grid8">
            <img className="image-icon214" alt="" src="/image120.svg" />
            <div className="vietnam">Vietnam</div>
          </div>
        </div>
      </div>
    </div>
  );
};

SoutheastAsia.propTypes = {
  className: PropTypes.string,
};

export default SoutheastAsia;
