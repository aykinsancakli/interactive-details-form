import { useState } from "react";
import cardFront from "./images/bg-card-front.png";
import cardBack from "./images/bg-card-back.png";
import cardLogo from "./images/card-logo.svg";
import complete from "./images/icon-complete.svg";

export default function App() {
  const [name, setName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const [nameError, setNameError] = useState("");
  const [cardNumError, setCardNumError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const errorsList = [
    "Can't be blank",
    "Invalid Card Number",
    "Invalid Month",
    "Invalid Year",
    "Invalid CVC",
  ];

  function handleSubmitForm(e) {
    e.preventDefault();

    // NAME
    if (!name) {
      setNameError(errorsList[0]);
      setIsValid(false);
    }

    if (name) {
      setNameError("");
    }

    // CARD
    if (cardNum && cardNum.length < 19) {
      setCardNumError(errorsList[1]);
      setIsValid(false);
    }

    if (!cardNum) {
      setCardNumError(errorsList[0]);
      setIsValid(false);
    }

    if (cardNum && cardNum.length === 19) {
      setCardNumError("");
    }

    // MONTH
    if (month && month > 12) {
      setMonthError(errorsList[2]);
      setIsValid(false);
    }

    if (!month) {
      setMonthError(errorsList[0]);
      setIsValid(false);
    }

    if (month && month <= 12) {
      setMonthError("");
    }

    // YEAR
    if (year && year < 25) {
      setYearError(errorsList[3]);
      setIsValid(false);
    }

    if (!year) {
      setYearError(errorsList[0]);
      setIsValid(false);
    }

    if (year && year >= 25) {
      setYearError("");
    }

    // CVC
    if (cvc && cvc.length < 3) {
      setCvcError(errorsList[4]);
      setIsValid(false);
    }

    if (!cvc) {
      setCvcError(errorsList[0]);
      setIsValid(false);
    }

    if (cvc && cvc.length === 3) {
      setCvcError("");
    }

    // GENERAL
    if (
      name &&
      cardNum &&
      cardNum.length === 19 &&
      month &&
      month <= 12 &&
      year &&
      year >= 25 &&
      cvc & (cvc.length === 3)
    ) {
      setNameError("");
      setCardNumError("");
      setMonthError("");
      setYearError("");
      setCvcError("");
      setIsValid(true);
      setIsSubmitted(true);
    }
  }

  return (
    <div className="container">
      <div className="cards">
        <div className="card card--front">
          <img className="card__front-logo" src={cardLogo} alt="logo"></img>
          <img
            className="card__front-visual"
            src={cardFront}
            alt="Credit card"
          ></img>
          <p className="card__front-number">
            {cardNum ? cardNum : "0000 0000 0000 0000"}
          </p>
          <p className="card__front-user">{name ? name : "JANE APPLESEED"}</p>
          <span className="card__front-date">
            {month ? month : "00"}/{year ? year : "00"}
          </span>
        </div>

        <div className="card card--back">
          <img
            className="card__back-visual"
            src={cardBack}
            alt="credit card back side"
          ></img>
          <span className="card__back-cvc">{cvc ? cvc : "000"}</span>
        </div>
      </div>

      {/* CONDITIONAL RENDERING */}

      {isSubmitted ? (
        <div className="success">
          <img
            className="success__icon"
            src={complete}
            alt="success logo"
          ></img>
          <p className="success__title">Thank You!</p>
          <p className="success__message">We've added your card details</p>
          <button className="btn btn--continue">Continue</button>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmitForm}>
          <div className="form__group">
            <label htmlFor="name" className="form__name">
              Cardholder Name
            </label>
            <input
              className={`form__input ${nameError ? `error-border` : ``}`}
              placeholder="e.g. Jane Appleseed"
              id="name"
              value={name}
              onChange={(e) => {
                const formattedValue = e.target.value.replace(/[0-9]/g, "");
                setName(formattedValue);
              }}
            ></input>
            <span className={`form__error ${isValid ? "" : "error-active"}`}>
              {nameError}
            </span>
          </div>

          <div className="form__group">
            <label htmlFor="num" className="form__card-number">
              Card Number
            </label>
            <input
              className={`form__input ${cardNumError ? `error-border` : ``}`}
              placeholder="e.g. 1234 5678 9123 0000"
              id="num"
              maxLength={19}
              value={cardNum}
              onChange={(e) => {
                // Remove non-numeric characters (except spaces)
                const cleanedValue = e.target.value.replace(/[^0-9]/g, "");
                // Insert a space every 4 characters
                let formattedValue = cleanedValue.replace(/(.{4})/g, "$1 ");
                // Trim any extra space at the end
                formattedValue = formattedValue.trim();
                // Set the card number with formatted value
                setCardNum(formattedValue);
              }}
            ></input>
            <span className={`form__error ${isValid ? "" : "error-active"}`}>
              {cardNumError}
            </span>
          </div>

          <div className="form__group form__group--double">
            <div className="form__exp">
              <label htmlFor="date" className="form__name">
                Exp. Date (MM/YY)
              </label>
              <div>
                <input
                  className={`form__input form__input--small ${
                    monthError ? `error-border` : ``
                  }`}
                  placeholder="MM"
                  id="date"
                  value={month}
                  maxLength={2}
                  onChange={(e) => {
                    const formattedValue = e.target.value.replace(
                      /[^0-9]/g,
                      ""
                    );
                    setMonth(formattedValue);
                  }}
                ></input>

                <input
                  className={`form__input form__input--small ${
                    yearError ? `error-border` : ``
                  }`}
                  placeholder="YY"
                  value={year}
                  maxLength={2}
                  onChange={(e) => {
                    const formattedValue = e.target.value.replace(
                      /[^0-9]/g,
                      ""
                    );
                    setYear(formattedValue);
                  }}
                ></input>
              </div>
              <div className="form__double-error-box">
                <span
                  className={`form__error error-pos ${
                    isValid ? "" : "error-active"
                  }`}
                >
                  {monthError}
                </span>
                <span
                  className={`form__error error-pos-2 ${
                    isValid ? "" : "error-active"
                  }`}
                >
                  {yearError}
                </span>
              </div>
            </div>

            <div className="form__cvc">
              <label htmlFor="cvc" className="form__cvc">
                Cvc
              </label>
              <input
                className={`form__input form__input--medium ${
                  cvcError ? `error-border` : ``
                }`}
                placeholder="e.g. 123"
                id="cvc"
                value={cvc}
                maxLength={3}
                onChange={(e) => {
                  const formattedValue = e.target.value.replace(/[^0-9]/g, "");
                  setCvc(formattedValue);
                }}
              ></input>
              <span className={`form__error ${isValid ? "" : "error-active"}`}>
                {cvcError}
              </span>
            </div>
          </div>

          <button className="btn btn--submit">Confirm</button>
        </form>
      )}
    </div>
  );
}
