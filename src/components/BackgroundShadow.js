import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./BackgroundShadow.css";

const BackgroundShadow = ({
  className = "",
  image,
  europe,
  priceValue,
  gLTEInEurope,
}) => {
  return (
    <div className={`backgroundshadow2 ${className}`}>
      <div className="deal-card-row">
        <div className="horizontalborder">
          <div className="deal-card-items">
            <div className="deal-card-content">
              <img className="image-icon98" loading="lazy" alt="" src={image} />
              <h3 className="europe2">{europe}</h3>
            </div>
            <div className="esim">eSIM</div>
          </div>
        </div>
        <div className="deal-price">
          <div className="starting-at">starting at</div>
          <div className="price-value">{priceValue}</div>
        </div>
        <div className="delivery">
          <div className="delivery-content">
            <img className="icon4" alt="" src="/icon-2.svg" />
            <div className="instant-delivery-via">
              Instant delivery via email
            </div>
          </div>
          <div className="network">
            <img className="icon5" alt="" src="/icon-3.svg" />
            <div className="glte-in-europe">{gLTEInEurope}</div>
          </div>
        </div>
        <Button
          className="link4"
          endIcon={<img width="22px" height="22px" src="/icon-4.svg" />}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#36a83a",
            borderRadius: "25px",
            "&:hover": { background: "#36a83a" },
            width: 154.2,
            height: 46,
          }}
        >
          See deals
        </Button>
      </div>
    </div>
  );
};

BackgroundShadow.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  europe: PropTypes.string,
  priceValue: PropTypes.string,
  gLTEInEurope: PropTypes.string,
};

export default BackgroundShadow;
