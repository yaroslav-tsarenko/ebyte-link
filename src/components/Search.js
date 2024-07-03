import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Search.css";

const Search = ({ className = "" }) => {
  return (
    <section className={`search ${className}`}>
      <div className="search-content">
        <TextField
          className="backgroundshadow1"
          placeholder="Search for a country or a region"
          variant="outlined"
          InputProps={{
            startAdornment: <img width="20px" height="20px" src="/icon.svg" />,
          }}
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "80px",
              backgroundColor: "#fff",
              paddingLeft: "35px",
              borderRadius: "25px",
              fontSize: "20px",
            },
            "& .MuiInputBase-input": {
              paddingLeft: "16px",
              color: "rgba(0, 0, 0, 0.4)",
            },
            width: "800px",
          }}
        />
        <div className="trust">
          <div className="wrapper-video-placeholder-2sv">
            <img
              className="video-placeholder-2svg-icon"
              loading="lazy"
              alt=""
              src="/videoplaceholder2svg.svg"
            />
          </div>
          <div className="overlayshadow">
            <img
              className="f-secure-logosvg-icon"
              loading="lazy"
              alt=""
              src="/fsecure-logosvg.svg"
            />
            <img
              className="stars-emptysvg-icon"
              loading="lazy"
              alt=""
              src="/starsemptysvg.svg"
            />
            <div className="trusted-by-over-container">
              <span className="trusted-by-over-container1">
                <p className="trusted-by-over-18000">
                  <span>{`Trusted by over `}</span>
                  <span className="span">18.000</span>
                </p>
                <p className="travelers-every-month">travelers every month</p>
              </span>
            </div>
            <Button
              className="link3"
              endIcon={<img width="22px" height="22px" src="/icon-1.svg" />}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#36a83a",
                fontSize: "16",
                background: "#fff",
                border: "#36a83a solid 1px",
                borderRadius: "25px",
                "&:hover": { background: "#fff" },
                height: 48,
              }}
            >
              See all reviews
            </Button>
            <img className="container-icon" alt="" src="/container.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

Search.propTypes = {
  className: PropTypes.string,
};

export default Search;
