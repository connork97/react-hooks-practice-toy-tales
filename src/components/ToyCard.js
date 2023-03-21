import React from "react";

function ToyCard({ toy, onHandleDonateToy, onHandleLikedToy }) {

  const handleDonateToyClick = (event) => {
    const toyCardToRemoveId = event.target.parentNode.id;
    // console.log(toyCardToRemove)
    onHandleDonateToy(toyCardToRemoveId);
  }

  const handleLikeButtonClick = (event) => {
    const toyToLikeId = event.target.parentNode.id;
    const currentLikes = toy.likes;
    onHandleLikedToy(toyToLikeId, currentLikes);
  }

  return (
    <div className="card" id={toy.id}>
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLikeButtonClick} >Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonateToyClick} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
