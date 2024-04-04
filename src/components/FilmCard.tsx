import { useContext } from "react";
import { StarshipContext } from "../contexts/StarshipContext";

export function FilmCard({ film }) {
  const { films } = useContext(StarshipContext);

  console.log("films", films);

  function getFilmId() {
    const apiUrl = film?.url;
    const segments = apiUrl.split("/");
    const id = segments[segments.length - 2];
    return id;
  }

  return (
    <div className="card">
      <div
        className="cardImage"
        style={{
          background: `url(https://starwars-visualguide.com/assets/img/films/${getFilmId()}.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <div
        className="cardTitle"
        style={{
          paddingTop: "15px",
          minHeight: "80px",
        }}
      >
        {film?.title}
        <div style={{ fontSize: "0.8em", opacity: "0.8" }}>
          Episode {film?.episode_id}
        </div>
      </div>
    </div>
  );
}

// https://starwars-visualguide.com/assets/img/films/4.jpg
