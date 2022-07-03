import React from "react";
// import photo1 from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.img} alt="photo1" className="card--photo" />
      <div className="card--stats">
        <img src={star} alt="star" className="card--star" />
        <span className="grey">{props.rating}</span>
        <span className="grey">({props.reviewCount}) • </span>
        <span>{props.country}</span>
      </div>
      <p classaName="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
