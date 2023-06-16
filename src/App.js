import React, { useState } from "react";
import "./App.css";

function App() {
  const [imgSrc, setImgSrc] = useState(undefined);
  const [breed, setBreed] = useState("hound");
  const [imgNumber, setImgNumber] = useState(0);

  const getDogImage = () => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((res) => res.json())
      .then((data) => setImgSrc(data.message[imgNumber]));
  };

  const onImgNumberChanged = (event) => setImgNumber(event.target.value);

  return (
    <div>
      <p>Show a dog image</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          getDogImage();
        }}
      >
        <input className="breed-name"
          id="breed-name"
          type="text"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
        />
        <input type="number" value={imgNumber} onChange={onImgNumberChanged} />
        <button type="submit">Show me the image</button>
      </form>
      <br />

      <div className="soww">
        {imgSrc === undefined ? (
          "No image to show"
        ) : (
          <img src={imgSrc} alt="Dog" />
        )}
      </div>
    </div>
  );
}

export default App;
