import Display from "./assets/components/Display";
import Heading from "./assets/components/Heading";
import Buttons from "./assets/components/Buttons";
import styles from "./App.module.css";
import { useState } from "react";

const App = () => {
  const [calVal, setCalVal] = useState("");

  const buttonsText = [
    "+",
    "-",
    "/",
    "*",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
    "AC",
    "=",
  ];

  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <Heading></Heading>
        <Display displayValue={calVal}></Display>
        <Buttons buttonText={buttonsText} onButtonValueClick={onButtonClick}>
          {" "}
        </Buttons>
      </div>
    </div>
  );
};

export default App;
