import React from "react";
// import photo1 from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card(props) {
  console.log(props.item.title);
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.item.coverImg} alt="photo1" className="card--photo" />
      <div className="card--stats">
        <img src={star} alt="star" className="card--star" />
        <span className="grey">{props.item.stats.rating}</span>
        <span className="grey">({props.item.stats.reviewCount}) • </span>
        <span>{props.item.country}</span>
      </div>
      <p classaName="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
