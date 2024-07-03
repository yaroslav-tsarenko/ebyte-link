import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import ItemRow from "./ItemRow";
import PropTypes from "prop-types";
import "./CartItems.css";

const CartItems = ({ className = "" }) => {
  return (
    <section className={`cart-items ${className}`}>
      <div className="item-container-parent">
        <div className="item-container">
          <div className="item-header">
            <div className="header6">
              <div className="header-child" />
              <div className="header-cells">
                <div className="product">Product</div>
              </div>
              <div className="header-cells1">
                <div className="price1">Price</div>
              </div>
              <div className="quantity">Quantity</div>
              <div className="total">Total</div>
            </div>
            <ItemRow
              productThumbnail="/rectangle-4554@2x.png"
              fentyBeauty50OFFGiftCard="Fenty Beauty 50% OFF Gift Card"
              discount20OFF="Discount: 20% OFF"
            />
          </div>
          <div className="item-divider-parent">
            <div className="item-divider" />
            <ItemRow
              productThumbnail="/rectangle-4554-1@2x.png"
              fentyBeauty50OFFGiftCard="Shopping Spree Gift Card"
              discount20OFF="Worth USD $400"
            />
          </div>
          <div className="line-parent">
            <div className="frame-child" />
            <div className="wrapper-rectangle-4554-parent">
              <div className="wrapper-rectangle-4554">
                <img
                  className="wrapper-rectangle-4554-child"
                  loading="lazy"
                  alt=""
                  src="/rectangle-4554-1@2x.png"
                />
              </div>
              <div className="travel-giftcard-parent">
                <div className="travel-giftcard">Travel GiftCard</div>
                <div className="worth-usd-400">Worth USD $400</div>
              </div>
              <div className="parent2">
                <div className="div">$120.00</div>
                <div className="credits1">12 Credits</div>
              </div>
              <div className="frame-parent14">
                <div className="frame-parent15">
                  <div className="icon-plus-wrapper">
                    <img
                      className="icon-plus1"
                      loading="lazy"
                      alt=""
                      src="/iconplus.svg"
                    />
                  </div>
                  <div className="div1">3</div>
                  <input className="frame-input" type="checkbox" />
                </div>
                <FormControl
                  className="frame-formcontrol"
                  variant="standard"
                  sx={{
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#36a83a",
                    borderRadius: "8px",
                    width: "54.14634146341464%",
                    height: "38px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "38px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "38px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "38px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "38px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#fff",
                      fontSize: 18,
                      fontWeight: "Regular",
                      fontFamily: "Roboto",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "16px",
                    },
                  }}
                >
                  <InputLabel color="success" />
                  <Select
                    color="success"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="16px"
                        height="16px"
                        src="/frame-1000002972-2.svg"
                        style={{ marginRight: "16px" }}
                      />
                    )}
                  >
                    <MenuItem>Hourly</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
              <div className="div2">$120.00</div>
            </div>
          </div>
          <div className="action-divider-parent">
            <div className="action-divider" />
            <div className="action-buttons">
              <Button
                className="button"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "18",
                  borderColor: "#000",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#000" },
                  width: 127,
                  height: 54,
                }}
              >
                Go Back
              </Button>
              <Button
                className="button1"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#36a83a",
                  borderRadius: "4px",
                  "&:hover": { background: "#36a83a" },
                  width: 136,
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
        <div className="checkout-details">
          <div className="checkout-title">
            <div className="header7">
              <div className="checkout-details1">Checkout Details</div>
            </div>
          </div>
          <div className="summary-columns">
            <div className="cart-subtotal-parent">
              <div className="cart-subtotal">Cart Subtotal</div>
              <div className="total-separator">$360.00</div>
            </div>
          </div>
          <div className="cost-breakdown">
            <div className="breakdown-items">
              <div className="shipping-taxes">
                <div className="shipping-handling">{`Shipping & Handling`}</div>
                <div className="other-taxes">Other Taxes</div>
              </div>
              <div className="shipping-taxes1">
                <div className="div3">$0.00</div>
                <div className="div4">$0.00</div>
              </div>
            </div>
          </div>
          <div className="summary-divider-wrapper">
            <div className="summary-divider" />
          </div>
          <div className="summary-columns1">
            <div className="grand-total-parent">
              <div className="grand-total">Grand Total</div>
              <div className="div5">$360.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartItems.propTypes = {
  className: PropTypes.string,
};

export default CartItems;
