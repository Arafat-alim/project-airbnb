import React from "react";
/*
Challenge: turn the strings in the array into <h3> elements instead
*/
const ComponentChallenge = () => {
  const colors = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Indigo",
    "Violet",
  ];
  return (
    <div>
      {colors.map((color) => (
        <h1>{color}</h1>
      ))}
    </div>
  );
};

export default ComponentChallenge;
