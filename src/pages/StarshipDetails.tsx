import { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { StarshipContext } from "../contexts/StarshipContext";
import { useNavigate } from "react-router-dom";
import { CardsSection } from "../components/CardsSection";

export function StarshipDetails() {
  const { starships, indexStarship, getPilots, getFilms } =
    useContext(StarshipContext);
  const [backgroundNoImageOpacity, setbackgroundNoImageOpacity] = useState(0);
  const starship = starships?.[indexStarship];
  const navigate = useNavigate();

  function getStarshipId() {
    const apiUrl = starship?.url;
    const segments = apiUrl.split("/");
    const id = segments[segments.length - 2];
    return id;
  }

  useEffect(() => {
    !starship && navigate("/starships");
    getPilots();
    getFilms();
    setTimeout(() => {
      setbackgroundNoImageOpacity(1);
    }, 300);
  }, []);

  console.log("startships", starships);

  return (
    <>
      {starship && (
        <>
          <Header />
          <NavBar />
          <div className="p-5"></div>
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
              Starship
            </div>
            <div className="sm:flex mb-16">
              <div
                className="sm:w-1/2 w-full"
                style={{
                  background:
                    "url(https://starwars-visualguide.com/assets/img/big-placeholder.jpg",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "opacity 0.5s",
                  opacity: backgroundNoImageOpacity,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "300px",
                    background: `url(https://starwars-visualguide.com/assets/img/starships/${getStarshipId()}.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <div
                className="sm:w-1/2 w-full"
                style={{
                  background: "#141518",
                  borderLeft: "1px solid red",
                  padding: "15px",
                  borderTopRightRadius: "15px",
                  borderBottomRightRadius: "15px",
                  opacity: "0.9",
                }}
              >
                <h1
                  style={{
                    fontSize: "2em",
                    marginBottom: "5px",
                    color: "#ffee58",
                    padding: "5px",
                  }}
                >
                  {starship?.name}
                </h1>
                <div className="starship-details-container flex">
                  <div className="sm:w-1/2 w-full">
                    <div>
                      <b>Model:</b> {starship?.model}{" "}
                    </div>
                    <div>
                      <b>Cost in credits:</b> {starship?.cost_in_credits}
                    </div>
                    <div>
                      <b>Atmospheric Speed:</b>{" "}
                      {starship?.max_atmosphering_speed}
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full">
                    <div>
                      <b>Manufacture:</b> {starship?.manufacturer}
                    </div>
                    <div>
                      <b>Lenght:</b> {starship?.length}
                    </div>
                    <div>
                      <b>Crew:</b> {starship?.crew}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CardsSection />
        </>
      )}
    </>
  );
}
