import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toysState, setToysState }) {

  const handleDonateToy = (id) => {
    fetch("http://localhost:3001/toys/" + id, {
      method: "DELETE",
    })
    .then(() => updatedToysState(id))
  }

  const updatedToysState = (deletedToyId) => {
    // console.log(deletedToyId)
    // const newToysState = toysState.filter((toy) => toy.id !== deletedToyId)
    // setToysState(newToysState)
    setToysState(toysState => {
      return toysState.filter(toy => {
        return toy.id != deletedToyId
      })
    })
  }

  const handleLikedToy = (id, currentLikes) => {
    fetch("http://localhost:3001/toys/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({likes: currentLikes + 1}),
    })
    .then((response) => response.json())
    .then((updatedToy) => updatedLikesToysState(updatedToy))
  }

  const updatedLikesToysState = (updatedToy) => {
    setToysState(toysState => {
      return toysState.map((toy) => {
        if(toy.id == updatedToy.id) {
          return updatedToy;
        } else {
          return toy;
        }
      })
    })
  }

  // const renderToyObjs = toysState.map((toy) => toy)



  return (
    <div id="toy-collection">
      {toysState.map((toy) => <ToyCard toy={toy} onHandleDonateToy={handleDonateToy} onHandleLikedToy={handleLikedToy} key={toy.id} />)}
    </div>
  );
}

export default ToyContainer;
