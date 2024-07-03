import PropTypes from "prop-types";
import "./QuestionItem.css";

const QuestionItem = ({
  className = "",
  howDoIActivateTheSIMCard,
  onceIArriveInAlbania,
  activatingYourAlbaniaSIMC,
  insertingTheSIMCardIntoYo,
  theInstructionsProvidedWi,
}) => {
  return (
    <div className={`question-item ${className}`}>
      <div className="question-content">
        <img className="icon18" alt="" src="/icon10.svg" />
        <div className="how-do-i-container">
          <p className="how-do-i">{howDoIActivateTheSIMCard}</p>
          <p className="once-i-arrive">{onceIArriveInAlbania}</p>
        </div>
      </div>
      <div className="activating-your-albania-container">
        <p className="activating-your-albania">{activatingYourAlbaniaSIMC}</p>
        <p className="inserting-the-sim">{insertingTheSIMCardIntoYo}</p>
        <p className="the-instructions-provided">{theInstructionsProvidedWi}</p>
      </div>
    </div>
  );
};

QuestionItem.propTypes = {
  className: PropTypes.string,
  howDoIActivateTheSIMCard: PropTypes.string,
  onceIArriveInAlbania: PropTypes.string,
  activatingYourAlbaniaSIMC: PropTypes.string,
  insertingTheSIMCardIntoYo: PropTypes.string,
  theInstructionsProvidedWi: PropTypes.string,
};

export default QuestionItem;
