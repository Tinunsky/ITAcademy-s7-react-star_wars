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
          minHeight: "350px",
          background: `url(https://starwars-visualguide.com/assets/img/characters/${getPilotId()}.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopRightRadius: "17px",
          borderTopLeftRadius: "17px",
          borderBottom: "1px solid red",
        }}
      ></div>
      <div
        className="cardTitle"
        style={{
          backgroundColor: "#141518",
          padding: "10px",
          borderBottomLeftRadius: "17px",
          borderBottomRightRadius: "17px",
          opacity: "0.9",
          textAlign: "center",
        }}
      >
        {pilot?.name}
      </div>
    </div>
  );
}

// https://starwars-visualguide.com/assets/img/characters/1.jpg
