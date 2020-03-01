import React from "react";

const Card = props => {
  const { title, img, description, onClickButton } = props;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button onClick={onClickButton} className="btn btn-primary">
          Go Movies
        </button>
      </div>
    </div>
  );
};

export default Card;
