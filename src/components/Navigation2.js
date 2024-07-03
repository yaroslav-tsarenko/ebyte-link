import PropTypes from "prop-types";
import "./Navigation2.css";

const Navigation2 = ({ className = "" }) => {
  return (
    <div className={`navigation4 ${className}`}>
      <div className="frame-parent2">
        <div className="esimocnsvg-parent">
          <img className="esimocnsvg-icon2" alt="" src="/esimocnsvg1.svg" />
          <div className="oceania2">Oceania</div>
        </div>
        <div className="frame-parent3">
          <div className="image-parent29">
            <img className="image-icon215" alt="" src="/image121.svg" />
            <div className="fiji">Fiji</div>
          </div>
          <div className="image-parent30">
            <img className="image-icon216" alt="" src="/image122.svg" />
            <div className="australia2">Australia</div>
          </div>
          <div className="image-parent31">
            <img className="image-icon217" alt="" src="/image123@2x.png" />
            <div className="french-polynesia">French Polynesia</div>
          </div>
          <div className="image-parent32">
            <img className="image-icon218" alt="" src="/image124.svg" />
            <div className="guam">Guam</div>
          </div>
          <div className="image-parent33">
            <img className="image-icon219" alt="" src="/image125.svg" />
            <div className="nauru">Nauru</div>
          </div>
          <div className="image-parent34">
            <img className="image-icon220" alt="" src="/image126.svg" />
            <div className="new-zealand">New Zealand</div>
          </div>
          <div className="image-parent35">
            <img className="image-icon221" alt="" src="/image127.svg" />
            <div className="papua-new-guinea">Papua New Guinea</div>
          </div>
          <div className="image-parent36">
            <img className="image-icon222" alt="" src="/image128.svg" />
            <div className="samoa">Samoa</div>
          </div>
          <div className="image-parent37">
            <img className="image-icon223" alt="" src="/image129@2x.png" />
            <div className="solomon-islands">Solomon Islands</div>
          </div>
          <div className="image-parent38">
            <img className="image-icon224" alt="" src="/image130.svg" />
            <div className="tonga">Tonga</div>
          </div>
          <div className="image-parent39">
            <img className="image-icon225" alt="" src="/image131@2x.png" />
            <div className="vanuatu">Vanuatu</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navigation2.propTypes = {
  className: PropTypes.string,
};

export default Navigation2;
