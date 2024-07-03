import PropTypes from "prop-types";
import "./Navigation1.css";

const Navigation1 = ({ className = "" }) => {
  return (
    <div className={`navigation5 ${className}`}>
      <div className="frame-parent4">
        <div className="esimmeasvg-parent">
          <img className="esimmeasvg-icon2" alt="" src="/esimmeasvg1.svg" />
          <div className="middle-east2">Middle East</div>
        </div>
        <div className="frame-parent5">
          <div className="image-parent40">
            <img className="image-icon267" alt="" src="/image170.svg" />
            <div className="bahrain2">Bahrain</div>
          </div>
          <div className="image-parent41">
            <img className="image-icon268" alt="" src="/image171.svg" />
            <div className="egypt">Egypt</div>
          </div>
          <div className="image-parent42">
            <img className="image-icon269" alt="" src="/image172.svg" />
            <div className="israel">Israel</div>
          </div>
          <div className="image-parent43">
            <img className="image-icon270" alt="" src="/image173.svg" />
            <div className="qatar">Qatar</div>
          </div>
          <div className="image-parent44">
            <img className="image-icon271" alt="" src="/image174.svg" />
            <div className="turkey">Turkey</div>
          </div>
          <div className="image-parent45">
            <img className="image-icon272" alt="" src="/image175@2x.png" />
            <div className="iran">Iran</div>
          </div>
          <div className="image-parent46">
            <img className="image-icon273" alt="" src="/image176.svg" />
            <div className="iraq">Iraq</div>
          </div>
          <div className="image-parent47">
            <img className="image-icon274" alt="" src="/image177.svg" />
            <div className="jordan">Jordan</div>
          </div>
          <div className="image-parent48">
            <img className="image-icon275" alt="" src="/image178.svg" />
            <div className="kuwait">Kuwait</div>
          </div>
          <div className="image-parent49">
            <img className="image-icon276" alt="" src="/image179.svg" />
            <div className="oman">Oman</div>
          </div>
          <div className="image-parent50">
            <img className="image-icon277" alt="" src="/image180@2x.png" />
            <div className="palestine">Palestine</div>
          </div>
          <div className="image-parent51">
            <img className="image-icon278" alt="" src="/image181.svg" />
            <div className="saudi-arabia">Saudi Arabia</div>
          </div>
          <div className="aesvg-fill-parent">
            <img className="aesvg-fill-icon" alt="" src="/aesvg-fill.svg" />
            <div className="united-arab-emirates">United Arab Emirates</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
