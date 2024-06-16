import { ReactNode, createContext, useState } from "react";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

const defaultStarshipContext = {
  starships: [] as Starship[],
  indexStarship: 0,
  setIndexStarship: (() => { }) as SetState<number>,
  setStarshipDetails: (() => { }) as SetState<Starship>,
  getMoreStarships: () => { },
  getStarshipDetails: (() => { }) as (id: string) => void,
  starshipDetails: undefined as Starship,
  nextPageUrl: "",
  pilots: [] as string[],
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
  const [starshipDetails, setStarshipDetails] = useState(undefined);
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

  function getStarshipDetails(id) {
    if (id) {
      fetch(`https://swapi.dev/api/starships/${id}`)
        .then((response) => response.json())
        .then((starship) => {
          setStarshipDetails(starship);
          getPilots(starship);
          getFilms(starship);
          console.log("startship results saved as setStarshipDetails", starship);
        });
    }
  }

  function getPilots(starship) {
    setPilots([]);
    starship.pilots.forEach((pilotUrl) => {
      fetch(pilotUrl)
        .then((response) => response.json())
        .then((pilotDetails) => {
          setPilots((prevPilotDetails) => [...prevPilotDetails, pilotDetails]);
          console.log("pilot", pilotDetails);
        });
    });
  }

  function getFilms(starship) {
    setFilms([]);
    starship.films.forEach((filmUrl) => {
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
        getStarshipDetails,
        setStarshipDetails,
        starshipDetails,
        nextPageUrl,
        pilots,
        films,
      }}
    >
      {children}
    </StarshipContext.Provider>
  );
};
