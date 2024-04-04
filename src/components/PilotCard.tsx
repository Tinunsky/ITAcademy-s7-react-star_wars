import { useContext } from "react";
import { StarshipContext } from "../contexts/StarshipContext";

export function PilotCard({ pilot }) {
  const { pilots } = useContext(StarshipContext);

  console.log("pilots", pilots);

  function getPilotId() {
    const apiUrl = pilot?.url;
    const segments = apiUrl.split("/");
    const id = segments[segments.length - 2];
    return id;
  }

  return (
    <div className="card">
      <div
        className="cardImage"
        style={{
          background: `url(https://starwars-visualguide.com/assets/img/characters/${getPilotId()}.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="cardTitle" style={{padding: "10px",}}>{pilot?.name}</div>
    </div>
  );
}

// https://starwars-visualguide.com/assets/img/characters/1.jpg
