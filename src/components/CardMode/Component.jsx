import React from "react";
import { Wrapper, H3 } from "../styled";

export function CardMode() {
  return (
    <Wrapper>
      <H3>Theme</H3>
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
    </Wrapper>
  );
}
