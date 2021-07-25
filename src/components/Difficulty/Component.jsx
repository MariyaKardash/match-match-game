import React from "react";

export function Difficulty() {
  return (
    <div className="wrapper">
      <h3>Difficulty</h3>
      <form>
        <select id="difficultySelect" className="difficultySelect">
          <option value="4">Easy(4x4)</option>
          <option value="6">Medium(6x6)</option>
          <option value="8">Hard(8x8)</option>
        </select>
      </form>
    </div>
  );
}
