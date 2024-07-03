import QuestionItem from "./QuestionItem";
import PropTypes from "prop-types";
import "./Questions.css";

const Questions = ({ className = "" }) => {
  return (
    <div className={`questions ${className}`}>
      <div className="question-title-wrapper">
        <div className="question-title">
          <div className="heading-211">Frequently asked questions</div>
          <div className="question-heading">
            <div className="heading-315">FAQ</div>
          </div>
        </div>
      </div>
      <div className="question-list">
        <div className="question-items">
          <QuestionItem
            howDoIActivateTheSIMCard="How do I activate the SIM card"
            onceIArriveInAlbania="once I arrive in Albania?"
            activatingYourAlbaniaSIMC="Activating your Albania SIM card is easy and involves"
            insertingTheSIMCardIntoYo="inserting the SIM card into your device and simply following"
            theInstructionsProvidedWi="the instructions provided with your purchase."
          />
          <QuestionItem
            howDoIActivateTheSIMCard="Will I have access to 4G/LTE data"
            onceIArriveInAlbania="speeds in Albania?"
            activatingYourAlbaniaSIMC="All of our SIM cards provide access to high-speed 4G/LTE"
            insertingTheSIMCardIntoYo="data. However, speeds may vary based on the local network"
            theInstructionsProvidedWi="infrastructure."
          />
          <div className="question-item1">
            <div className="icon-parent1">
              <img className="icon19" alt="" src="/icon10.svg" />
              <div className="can-i-use-container">
                <p className="can-i-use">Can I use the same SIM card if I</p>
                <p className="travel-to-other">travel to other countries?</p>
              </div>
            </div>
            <div className="this-will-depend-container">
              <p className="this-will-depend">
                This will depend on the coverage of the specific SIM card. All
              </p>
              <p className="of-our-sim">
                of our SIM Cards offer multi-country coverage - please refer
              </p>
              <p className="to-the-coverage">
                to the 'Coverage' section on the product details for more
              </p>
              <p className="information">information.</p>
            </div>
          </div>
          <div className="question-item2">
            <div className="icon-parent2">
              <img className="icon20" alt="" src="/icon10.svg" />
              <div className="are-there-any-container">
                <p className="are-there-any">Are there any roaming fees if I</p>
                <p className="exceed-my-data">exceed my data allowance?</p>
              </div>
            </div>
            <div className="no-you-will">
              No, you will not be charged any roaming fees if you exceed your
              data allowance with our SIM cards for Albania. The cost you see on
              our site is what you pay. If you run out of data, you will need to
              top up to continue using the services in Albania,
            </div>
          </div>
        </div>
      </div>
      <div className="see-all-faq">
        <div className="link21">
          <a
            className="faqs"
            href="https://www.figma.com/design/P4CcAfvPitpB581k8Qiybz?node-id=2-47074"
            target="_blank"
          >
            FAQs
          </a>
        </div>
      </div>
    </div>
  );
};

Questions.propTypes = {
  className: PropTypes.string,
};

export default Questions;
