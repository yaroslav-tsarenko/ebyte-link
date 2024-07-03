import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent10.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <section className={`accountpage-inner ${className}`}>
      <div className="frame-parent16">
        <div className="user-account-parent">
          <h2 className="user-account">User Account</h2>
          <TextField
            className="header8"
            placeholder="Your Active Downloads"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#5479ff",
                borderRadius: "5px",
                fontSize: "18px",
              },
              "& .MuiInputBase-input": { color: "#fff" },
            }}
          />
          <div className="cart-row-1">
            <div className="product1">
              <div className="wrapper-product-image">
                <img
                  className="product-image-icon"
                  loading="lazy"
                  alt=""
                  src="/rectangle-4554-1@2x.png"
                />
              </div>
              <div className="title3">
                <div className="fenty-beauty-501">
                  Fenty Beauty 50% OFF Gift Card
                </div>
                <div className="discount-20-off1">Discount: 20% OFF</div>
              </div>
            </div>
            <div className="product-labels">
              <div className="product-names">$120.00</div>
              <div className="credits2">12 Credits</div>
            </div>
            <div className="product-labels1">
              <div className="up-time">Up Time</div>
              <div className="hrs">120 Hrs</div>
            </div>
            <div className="renewal-date-parent">
              <div className="renewal-date">
                <div className="next-renewal">Next Renewal</div>
                <div className="april-2024">24 April, 2024</div>
              </div>
              <div className="links3">
                <div className="link24">
                  <img
                    className="icons-block"
                    loading="lazy"
                    alt=""
                    src="/icons-block.svg"
                  />
                  <div className="cancel">Cancel</div>
                </div>
                <div className="link25">
                  <img
                    className="icons-block1"
                    loading="lazy"
                    alt=""
                    src="/icons-block-1.svg"
                  />
                  <div className="renew">Renew</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-separator" />
        </div>
        <div className="checkout-details-wrapper">
          <div className="checkout-details2">
            <div className="header9">
              <div className="user-details">User Details</div>
            </div>
            <div className="checkout-items">
              <div className="name">Name</div>
              <div className="darnell-roob">Darnell Roob</div>
            </div>
            <div className="checkout-items1">
              <div className="email-address">Email Address</div>
              <div className="darnellroobhotmailcom">
                Darnell.Roob@hotmail.com
              </div>
            </div>
            <div className="checkout-items2">
              <div className="plan">Plan</div>
              <div className="basic">Basic</div>
            </div>
            <div className="checkout-items3">
              <div className="expiry-date">Expiry Date</div>
              <div className="april-20241">24 April, 2024</div>
            </div>
            <div className="checkout-items4">
              <div className="auto-renewal">Auto Renewal</div>
              <div className="on">On</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
