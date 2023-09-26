import { Fragment, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const App = () => {
  //1 - initial value of step
  //setStep - function to update step
  const [step, setStep] = useState(1); //useState is reat hook. All the react hooks start with use keyword
  const [isOpen, setIsOpen] = useState(true); //if isOpen will be false the component will disappear because of conditional rendering, by default true (component visible)
  //When we click the next or previous button step will be updated using the setStep function
  const handlePrevious = () => {
    if (step > 1) {
      setStep((currentStep) => currentStep - 1); //when setting state based on urrent state we should use callback functions. React behind the scenes might batch multiple state updates together for performance reasons. When we don't rely on current state then we can do usual setState()
    }
  };
  const handleNext = () => {
    if (step < 3) setStep((currentStep) => currentStep + 1);
  };
  const handleCloseBtn = () => {
    setIsOpen((open) => !open); //it should always be the opposite of the current state
  };
  return (
    <Fragment>
      <button className="close" onClick={handleCloseBtn}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default App;
