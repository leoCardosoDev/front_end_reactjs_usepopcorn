import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarRating from "./StarRating";
// import App from './App'

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="#eb87ce" onSetRating={setMovieRating} />
      <p> Este filme foi clasiificado com {movieRating} estrelas</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={5} size={25} color="#87ceeb" />
    <StarRating maxRating={10} size={30} color="red" />
    <StarRating
      maxRating={5}
      size={30}
      color="green"
      className="test"
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
