import React from "react";
import "./Card.scss";


export const Card = (props) => {
  

  return (
    <>
    <div className="card card-home">
      <div className="card-home-body">
        <div className="card-home-body-description">
          <h5 className="card-home-title">{props.name}</h5>
        </div>
      </div>
      <div className="card-home-img-link">
        {props.name === "Kitchen" ? (
          <img
            src="/kitchen.png"
            className="card-home-img-top"
            alt="Icon Kitchen"
          />
        ) : (
          <img
            src="/living-room.png"
            className="card-home-img-top"
            alt="Icon Living/Dinner room"
          />
        )}
      </div>
    </div>
    </>
  );
};
