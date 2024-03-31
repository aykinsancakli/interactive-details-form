import { useState } from "react";
import cardFront from "./images/bg-card-front.png";
import cardBack from "./images/bg-card-back.png";
import cardLogo from "./images/card-logo.svg";
import complete from "./images/icon-complete.svg";

export default function App() {
  return (
    <div className="container">
      <div className="cards">
        <div className="card card--front">
          <img className="card__logo" src={cardLogo} alt="logo"></img>
          <img
            className="card__front-visual"
            src={cardFront}
            alt="Credit card"
          ></img>
          <p className="card__number">0000 0000 0000 0000</p>
          <p className="card__user">Jane Appleseed</p>
          <span className="card__date">00/00</span>
        </div>

        <div className="card card--back">
          <img className="card__back-visual" src={cardBack}></img>
          <span className="card__cvc">000</span>
        </div>
      </div>

      <form className="form">
        <div className="form__group">
          <label htmlFor="name" className="form__name">
            Cardholder Name
          </label>
          <input
            className="form__input"
            placeholder="e.g. Jane Appleseed"
            id="name"
          ></input>
        </div>

        <div className="form__group">
          <label htmlFor="num" className="form__card-number">
            Card Number
          </label>
          <input
            className="form__input"
            placeholder="e.g. 1234 5678 9123 0000"
            id="num"
          ></input>
        </div>

        <div className="form__group form__group--double">
          <div>
            <label htmlFor="date" className="form__name">
              Exp. Date (MM/YY)
            </label>
            <input
              className="form__input form__input--small"
              placeholder="MM"
              id="date"
            ></input>
            <input
              className="form__input form__input--small"
              placeholder="YY"
            ></input>
          </div>

          <div>
            <label htmlFor="cvc" className="form__cvc">
              Cvc
            </label>
            <input
              className="form__input form__input--medium"
              placeholder="e.g. 123"
              id="cvc"
            ></input>
          </div>
        </div>

        <button className="form__submit">Confirm</button>
      </form>
    </div>
  );
}
