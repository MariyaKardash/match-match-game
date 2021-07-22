import React from "react";
import { Select, Wrapper, H3 } from "../styled";

export function Difficulty() {
  return (
    <Wrapper>
      <H3>Difficulty</H3>
      <form>
        <Select id="difficultySelect">
          <option value="4">Easy(4x4)</option>
          <option value="6">Medium(6x6)</option>
          <option value="8">Hard(8x8)</option>
        </Select>
      </form>
    </Wrapper>
  );
}
