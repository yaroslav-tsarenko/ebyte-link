import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./SimCardCompatibility.css";

const SimCardCompatibility = ({ className = "" }) => {
  return (
    <div className={`sim-card-compatibility ${className}`}>
      <div className="backgroundshadow5">
        <div className="compatibility-card-content">
          <div className="compatibility-content">
            <div className="compatibility-header">
              <div className="container3">
                <img
                  className="border-icon"
                  loading="lazy"
                  alt=""
                  src="/border.svg"
                />
                <div className="background5" />
              </div>
              <div className="heading-4"> Enhanced Security</div>
            </div>
            <div className="compatibility-description">
              <div className="with-ebyte-esim">
                With eByte eSIM, your personal information and communications
                are protected with advanced security features.
              </div>
            </div>
          </div>
          <div className="effortless-process">
            <div className="container4">
              <img
                className="border-icon1"
                loading="lazy"
                alt=""
                src="/border-1.svg"
              />
              <div className="background6" />
            </div>
            <div className="process-content">
              <div className="heading-41">Global Coverage</div>
              <div className="ebyte-esim-provides">
                eByte eSIM provides extensive coverage across [insert number]
                countries and regions, ensuring that you stay connected wherever
                your travels take you.
              </div>
            </div>
          </div>
        </div>
        <div className="installation-link">
          <div className="link-content">
            <div className="installation-link-wrapper">
              <Button
                className="link5"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#36a83a",
                  borderRadius: "25px",
                  "&:hover": { background: "#36a83a" },
                  height: 56,
                }}
              >
                How to install eSIM
              </Button>
            </div>
            <div className="link-check">
              Check compatibility with your device
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SimCardCompatibility.propTypes = {
  className: PropTypes.string,
};

export default SimCardCompatibility;
