import PropTypes from "prop-types";
import "./BenefitCardRow.css";

const BenefitCardRow = ({ className = "", border, convenientActivation }) => {
  return (
    <div className={`benefit-card-row ${className}`}>
      <div className="border-wrapper">
        <img className="border-icon2" loading="lazy" alt="" src={border} />
      </div>
      <div className="convenient-activation">{convenientActivation}</div>
    </div>
  );
};

BenefitCardRow.propTypes = {
  className: PropTypes.string,
  border: PropTypes.string,
  convenientActivation: PropTypes.string,
};

export default BenefitCardRow;
