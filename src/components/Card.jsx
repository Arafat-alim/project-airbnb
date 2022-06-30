import React from "react";
import photo1 from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={photo1} alt="photo1" className="card--photo" />
      <div className="card--stats">
        <img src={star} alt="star" className="card--star" />
        <span className="grey">5.0</span>
        <span className="grey">(6) • </span>
        <span>USA</span>
      </div>
      <p>Life lessons with Katie Zaferes From $136 / person</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
