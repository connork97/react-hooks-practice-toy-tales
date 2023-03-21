import React, { useState } from "react";

function ToyForm({ setToysState }) {

  // "http://localhost:3001/toys/"

  const [newToyState, setNewToyState] = useState({
    name: "",
    image: "",
    likes: 0
  })

  const handleNewToyChange = (event) => {
    setNewToyState({...newToyState, [event.target.name]: event.target.value})
  }

  const handleNewToySubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/toys/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToyState)
    })
    .then((response) => response.json())
    .then((newToyObj) => setToysState((prevState) => [...prevState, newToyObj]))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleNewToySubmit} >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleNewToyChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleNewToyChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
