import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="#eb87ce" onSetRating={setMovieRating} />
      <h3> Este filme foi clasiificado com {movieRating} estrelas</h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <br />
    <hr /> <br />
    <StarRating maxRating={5} size={25} color="#87ceeb" />
    <br />
    <hr /> <br />
    <StarRating maxRating={10} size={30} color="red" />
    <br />
    <hr /> <br />
    <StarRating
      maxRating={5}
      size={30}
      color="green"
      className="test"
      defaultRating={3}
    />
    <br />
    <hr /> <br />
    <Test />
  </React.StrictMode>
);
