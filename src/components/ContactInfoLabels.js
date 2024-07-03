import PropTypes from "prop-types";
import "./ContactInfoLabels.css";

const ContactInfoLabels = ({
  className = "",
  contactInformation,
  formLabelPlaceholder,
}) => {
  return (
    <div className={`contact-info-labels ${className}`}>
      <div className="contact-information2">{contactInformation}</div>
      <div className="form-field">
        <input
          className="form-label"
          placeholder={formLabelPlaceholder}
          type="text"
        />
        <img className="icon1" alt="" src="/icon1.svg" />
      </div>
    </div>
  );
};

ContactInfoLabels.propTypes = {
  className: PropTypes.string,
  contactInformation: PropTypes.string,
  formLabelPlaceholder: PropTypes.string,
};

export default ContactInfoLabels;
