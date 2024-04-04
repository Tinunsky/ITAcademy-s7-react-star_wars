import { ReactNode, createContext, useState } from "react";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

const defaultStarshipContext = {
  starships: [] as Starship[],
  indexStarship: 0,
  setIndexStarship: (() => {}) as SetState<number>,
  getMoreStarships: () => {},
  nextPageUrl: "",
  getPilots: () => {},
  pilots: [] as string[],
  getFilms: () => {},
  films: [] as string[],
};

export const StarshipContext = createContext<typeof defaultStarshipContext>(
  defaultStarshipContext
);

type Starship = {
  name: string;
  model: string;
  url: string;
  cost_in_credits: string;
  max_atmosphering_speed: string;
  manufacturer: string;
  length: string;
  crew: string;
  pilots: string[];
  films: string[];
};

export const StarshipProvider = ({ children }: { children: ReactNode }) => {
  const initialStarships: Starship[] = [];
  const [starships, setStarships] = useState(initialStarships);
  const [indexStarship, setIndexStarship] = useState(undefined);
  const [nextPageUrl, setNextPageUrl] = useState(
    "https://swapi.dev/api/starships"
  );
  const [pilots, setPilots] = useState([]);
  const [films, setFilms] = useState([]);

  function getMoreStarships() {
    if (nextPageUrl) {
      fetch(nextPageUrl)
        .then((response) => response.json())
        .then((data) => {
          setStarships((prevStarships) => [...prevStarships, ...data.results]);
          setNextPageUrl(data.next);
          console.log("startships", data.results);
        });
    }
  }

  function getPilots() {
    setPilots([]);
    starships?.[indexStarship].pilots.forEach((pilotUrl) => {
      fetch(pilotUrl)
        .then((response) => response.json())
        .then((pilotDetails) => {
          setPilots((prevPilotDetails) => [...prevPilotDetails, pilotDetails]);
          console.log("pilot", pilotDetails);
        });
    });
  }

  function getFilms() {
    setFilms([]);
    starships?.[indexStarship].films.forEach((filmUrl) => {
      fetch(filmUrl)
        .then((response) => response.json())
        .then((filmDetails) => {
          setFilms((prevFilmDetails) => [...prevFilmDetails, filmDetails]);
          console.log("film", filmDetails);
        });
    });
  }

  return (
    <StarshipContext.Provider
      value={{
        starships,
        indexStarship,
        setIndexStarship,
        getMoreStarships,
        nextPageUrl,
        getPilots,
        getFilms,
        pilots,
        films,
      }}
    >
      {children}
    </StarshipContext.Provider>
  );
};
