import "./styles.css";
import { useEffect, useState } from "react";

function Card({ name }) {
  const [count, setCount] = useState(0);
  const [hasLiked, sethasLiked] = useState(false);

  useEffect(() => {
    console.log(`${name} has been liked: ${hasLiked}`);
  });
  return (
    <div className="card-container" onClick={() => setCount(count + 1)}>
      <h2> {name} </h2>
      <button onClick={() => sethasLiked(!hasLiked)}>
        {" "}
        {hasLiked ? "❤️" : "🤍"}{" "}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2>My WatchList</h2>
      <Card name="3 Idiots" />
      <Card name="Saiyaara" />
      <Card name="Chennai Express" />
      <Card name="Ye Jawani Hai Deewani" />
      <Card name="Dangal" />
      <Card name="12th Fail" />
    </div>
  );
}

export default App;
