import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toysState, setToysState] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys/")
      .then((response) => response.json())
      .then((data) => setToysState(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm setToysState={setToysState} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toysState={toysState} setToysState={setToysState} />
    </>
  );
}

export default App;
