import FrameComponent from "../components/FrameComponent";
import FooterDesktop from "../components/FooterDesktop";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
      <FrameComponent />
      <section className="checkoutpage-inner">
        <div className="frame-group">
          <form className="billing-header-parent">
            <div className="billing-header">
              <h1 className="checkout">Checkout</h1>
              <input
                className="header"
                placeholder="Billing Details"
                type="text"
              />
              <div className="form-field-block">
                <div className="row-1">
                  <div className="block-1">
                    <input
                      className="first-name"
                      placeholder="First Name"
                      type="text"
                    />
                  </div>
                  <div className="block-2">
                    <input
                      className="last-name"
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="row-2">
                  <div className="block-11">
                    <input
                      className="company-name"
                      placeholder="Company Name"
                      type="text"
                    />
                  </div>
                  <div className="block-21">
                    <div className="country">Country</div>
                    <img className="icon" alt="" src="/icon.svg" />
                  </div>
                </div>
                <div className="row-3">
                  <div className="block-12">
                    <input
                      className="street-address"
                      placeholder="Street Address"
                      type="text"
                    />
                  </div>
                </div>
                <div className="block-22">
                  <input
                    className="apartment-suite"
                    placeholder="Apartment / Suite / Unit / etc. (Optional)"
                    type="text"
                  />
                </div>
                <div className="row-4">
                  <div className="block-13">
                    <input
                      className="town-city"
                      placeholder="Town / City"
                      type="text"
                    />
                  </div>
                </div>
                <div className="block-23">
                  <input
                    className="email-address"
                    placeholder="Email Address"
                    type="text"
                  />
                </div>
                <div className="row-5">
                  <div className="block-14">
                    <input className="zip" placeholder="ZIP" type="text" />
                  </div>
                  <div className="block-24">
                    <input className="phone" placeholder="Phone" type="text" />
                  </div>
                </div>
              </div>
              <div className="billing-header-child" />
              <div className="billing-title">
                <button className="button">
                  <img className="tag-icon" alt="" src="/tag-icon.svg" />
                  <div className="button1">Back</div>
                  <img className="tag-icon1" alt="" src="/tag-icon.svg" />
                </button>
                <button className="button2">
                  <img className="tag-icon2" alt="" src="/tag-icon.svg" />
                  <div className="button3">Checkout</div>
                  <img className="tag-icon3" alt="" src="/tag-icon.svg" />
                </button>
              </div>
            </div>
            <div className="order-details">
              <div className="checkout-details">
                <div className="header1">
                  <div className="checkout-details1">Checkout Details</div>
                </div>
                <div className="order-summary">
                  <div className="cart-subtotal">Cart Subtotal</div>
                  <div className="total-amounts">$360.00</div>
                </div>
                <div className="order-summary1">
                  <div className="shipping-handling">{`Shipping & Handling`}</div>
                  <div className="div">$0.00</div>
                </div>
                <div className="order-summary2">
                  <div className="other-taxes">Other Taxes</div>
                  <div className="div1">$0.00</div>
                </div>
                <div className="summary-divider" />
                <div className="order-summary3">
                  <div className="grand-total">Grand Total</div>
                  <div className="div2">$360.00</div>
                </div>
              </div>
              <div className="transfer-options">
                <div className="header2">
                  <div className="transfer-options1">Transfer Options</div>
                </div>
                <div className="checkout-details2">
                  <div className="logos-block">
                    <div className="block-15">
                      <div className="logo-block">
                        <img
                          className="image-1-icon"
                          loading="lazy"
                          alt=""
                          src="/image-1@2x.png"
                        />
                      </div>
                      <div className="bank-transfer">
                        <p className="bank">Bank</p>
                        <p className="transfer">Transfer</p>
                      </div>
                    </div>
                    <div className="block-25">
                      <div className="logo-block1">
                        <img
                          className="image-2-icon"
                          loading="lazy"
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                      <div className="google-pay">
                        <p className="google">Google</p>
                        <p className="pay">Pay</p>
                      </div>
                    </div>
                  </div>
                  <div className="method-container">
                    <div className="block-3">
                      <div className="logo-block2">
                        <img
                          className="image-3-icon"
                          loading="lazy"
                          alt=""
                          src="/image-3@2x.png"
                        />
                      </div>
                      <div className="apple-pay">
                        <p className="apple">Apple</p>
                        <p className="pay1">Pay</p>
                      </div>
                    </div>
                    <div className="block-4">
                      <div className="logo-block3">
                        <img
                          className="image-4-icon"
                          loading="lazy"
                          alt=""
                          src="/image-4@2x.png"
                        />
                      </div>
                      <div className="paypal">PayPal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="checkout1">
            <div className="header3">
              <div className="checkout2">Checkout</div>
            </div>
            <div className="checkout-details3">
              <div className="your-personal-data">
                Your Personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our product
              </div>
              <button className="button4">
                <img className="tag-icon4" alt="" src="/tag-icon1.svg" />
                <div className="button5">Checkout</div>
                <img className="tag-icon5" alt="" src="/tag-icon1.svg" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <FooterDesktop
        linkAppleAppStore1svg="/link--appleappstore1svg1@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg1@2x.png"
      />
    </div>
  );
};

export default CheckoutPage;
