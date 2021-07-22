import React from "react";

export function CardMode() {
  return (
    <div className="wrapper">
      <h3>Theme</h3>
      <form id="themeRadio">
        <div className="form_radio_btn">
          <input
            id="numbers"
            type="radio"
            name="radio"
            value="numbers"
            defaultChecked
          />
          <label htmlFor="numbers">Numbers</label>
        </div>

        <div className="form_radio_btn">
          <input id="alphabet" type="radio" name="radio" value="alphabet" />
          <label htmlFor="alphabet">Alphabet</label>
        </div>

        <div className="form_radio_btn">
          <input id="summer" type="radio" name="radio" value="summer" />
          <label htmlFor="summer">Summer</label>
        </div>
      </form>
    </div>
  );
}
