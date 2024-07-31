import styles from "./Buttons.module.css";

const Buttons = ({ buttonText, onButtonValueClick }) => {
  return (
    <div className={styles.calculatorKeys}>
      {buttonText.map((button) => {
        let buttonClass = "";

        if (["+", "-", "*", "/"].includes(button)) {
          buttonClass = styles.operator;
        } else if (button === "AC") {
          buttonClass = styles.clear;
        } else if (button === "=") {
          buttonClass = styles.equals;
        } else {
          buttonClass = styles.number;
        }

        return (
          <button
            key={button}
            className={buttonClass}
            onClick={() => onButtonValueClick(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
