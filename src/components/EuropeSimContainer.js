import PropTypes from "prop-types";
import "./EuropeSimContainer.css";

const EuropeSimContainer = ({ className = "" }) => {
  return (
    <div className={`europe-sim-container ${className}`}>
      <div className="albania-sim-container-wrapper">
        <div className="albania-sim-container">
          <div className="data-parent">
            <img className="data-icon" alt="" src="/data.svg" />
            <div className="link-europe-parent">
              <a
                className="link-europe"
                href="https://www.figma.com/design/P4CcAfvPitpB581k8Qiybz?node-id=2-58087"
                target="_blank"
              >
                Europe
              </a>
              <div className="prepaid-sim-card-container">
                <p className="prepaid-sim-card">Prepaid SIM Card</p>
                <p className="albania2">Albania</p>
              </div>
            </div>
          </div>
          <div className="the-best-prepaid-container">
            <span className="the-best-prepaid-container1">
              <p className="the-best">
                The best Prepaid SIM Card to travel in Albania.
              </p>
              <p className="choose-the-best">
                Choose the best SIM Card for your needs.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

EuropeSimContainer.propTypes = {
  className: PropTypes.string,
};

export default EuropeSimContainer;
