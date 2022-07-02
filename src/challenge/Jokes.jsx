import React from "react";

export default function Jokes(props) {
  return (
    <div>
      <h1>Setup: {props.setup}</h1>
      <h1>Punch Line: {props.punchline}</h1>
    </div>
  );
}
