import PropTypes from "prop-types";
import "./PageBody.css";

const PageBody = ({ className = "" }) => {
  return (
    <section className={`page-body ${className}`}>
      <div className="signup-container">
        <div className="sign-in2">
          <div className="sign-in-content2">
            <h1 className="sign-up">Sign up</h1>
            <div className="sign-up-to">
              Sign up to get rewards, and many more
            </div>
          </div>
          <form className="form-fields">
            <div className="name-address-username">
              <div className="name-address-fields">
                <input
                  className="your-name"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div className="email-country-password">
                <input className="email" placeholder="Email" type="text" />
              </div>
            </div>
            <div className="name-address-username1">
              <div className="address-wrapper">
                <input className="address" placeholder="Address" type="text" />
              </div>
              <div className="country-parent">
                <div className="country1">Country</div>
                <img
                  className="email-country-input"
                  alt=""
                  src="/email-country-input.svg"
                />
              </div>
            </div>
            <div className="name-address-username2">
              <div className="username-parent">
                <input
                  className="username1"
                  placeholder="Username"
                  type="text"
                />
                <img className="name-address-input" alt="" src="/inputs.svg" />
              </div>
              <div className="password-parent">
                <div className="password1">Password</div>
                <img className="frame-item" alt="" src="/frame-153-1.svg" />
              </div>
            </div>
            <button className="button8">
              <img className="tag-icon8" alt="" src="/tag-icon.svg" />
              <div className="button9">Sign Up</div>
              <img className="tag-icon9" alt="" src="/tag-icon.svg" />
            </button>
          </form>
          <div className="or-sign-up">or, sign up with</div>
          <div className="social-sign-up">
            <img
              className="social-buttons-icon"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-buttons-icon1"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-buttons-icon2"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="background-icon1"
        loading="lazy"
        alt=""
        src="/rectangle-491@2x.png"
      />
    </section>
  );
};

PageBody.propTypes = {
  className: PropTypes.string,
};

export default PageBody;
