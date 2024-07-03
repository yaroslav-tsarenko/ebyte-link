import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "" }) => {
  return (
    <section className={`hero ${className}`}>
      <div className="heading-11" />
      <div className="hero-content">
        <div className="compare-and-buy-your-internati-parent">
          <div className="compare-and-buy">
            Compare and buy your international travel eSIM
          </div>
          <h1 className="st-marketplace-for-container">
            <p className="st-marketplace-for">
              1st Marketplace for prepaid eSIM in
            </p>
            <p className="destination">200+ destination</p>
          </h1>
        </div>
        <div className="backgroundshadow">
          <div className="c-t-a-links">
            <Button
              className="link1"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#5479ff",
                borderRadius: "45px",
                "&:hover": { background: "#5479ff" },
              }}
            >
              eSIM
            </Button>
            <div className="link2">
              <div className="sim-crads">SIM crads</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
