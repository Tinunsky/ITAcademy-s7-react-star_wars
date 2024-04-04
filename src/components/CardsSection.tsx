import { useContext } from "react";
import { PilotCard } from "./PilotCard";
import { StarshipContext } from "../contexts/StarshipContext";
import { FilmCard } from "./FilmCard";
import { v4 as uuidv4 } from "uuid";

export function CardsSection() {
  const { pilots, films } = useContext(StarshipContext);

  return (
    <>
      {pilots && pilots.length > 0 && (
        <div className="sm:w-3/4 w-full m-auto p-5">
          <div
            className="p-4 mb-10"
            style={{
              borderTop: "1px solid #ffee5888 ",
              borderBottom: "1px solid #ffee5888 ",
              fontSize: "1.3em",
              border: "1px solid #ffee58",
              borderRadius: "50px",
            }}
          >
            Pilots
          </div>
          <div className="sm:flex">
            {pilots?.map((pilot) => (
              <div key={uuidv4()} className="w-full">
                <PilotCard pilot={pilot} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* movies card  */}
      {films && films.length > 0 && (
        <div className="sm:w-3/4 w-full m-auto p-5">
          <div
            className="p-4 mb-10"
            style={{
              borderTop: "1px solid #ffee5888 ",
              borderBottom: "1px solid #ffee5888 ",
              fontSize: "1.3em",
              border: "1px solid #ffee58",
              borderRadius: "50px",
            }}
          >
            Films
          </div>
          <div className="sm:flex">
            {films?.map((film) => (
              <div key={crypto.randomUUID()} className="w-full">
                <FilmCard film={film} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
