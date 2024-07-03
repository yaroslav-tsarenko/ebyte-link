import PropTypes from "prop-types";
import "./SignInContent.css";

const SignInContent = ({ className = "" }) => {
  return (
    <section className={`sign-in-content ${className}`}>
      <div className="sign-in-content1">
        <div className="sign-in">
          <div className="sign-in-fields">
            <div className="sign-in-title">
              <h1 className="sign-in1">Sign in</h1>
              <div className="sign-in-to">
                Sign in to your account to see products catered to you
              </div>
            </div>
            <form className="input-fields">
              <div className="labels">
                <div className="username">Username</div>
                <img className="inputs-icon" alt="" src="/inputs.svg" />
              </div>
              <div className="labels1">
                <div className="password">Password</div>
                <img className="labels-child" alt="" src="/frame-153-1.svg" />
              </div>
              <button className="button6">
                <img className="tag-icon6" alt="" src="/tag-icon1.svg" />
                <div className="button7">Sign In</div>
                <img className="tag-icon7" alt="" src="/tag-icon1.svg" />
              </button>
            </form>
            <div className="or-sign-in">or, sign in with</div>
            <div className="social-buttons">
              <img
                className="social-icons"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="social-icons1"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="social-icons2"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-icon"
        loading="lazy"
        alt=""
        src="/rectangle-49@2x.png"
      />
    </section>
  );
};

SignInContent.propTypes = {
  className: PropTypes.string,
};

export default SignInContent;
