import { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { StarshipContext } from "../contexts/StarshipContext";
import { CardsSection } from "../components/CardsSection";
import { useParams } from "react-router-dom";
import { getStarshipId } from "../utils/getStarshipId";

export function StarshipDetails() {
  const { getStarshipDetails, starshipDetails, setStarshipDetails } =
    useContext(StarshipContext);
  const [backgroundNoImageOpacity, setbackgroundNoImageOpacity] = useState(0);
  const starship = starshipDetails
  let { id } = useParams();

  useEffect(() => {
    getStarshipDetails(id);
    return () => {
      setStarshipDetails(undefined)
    }
  }, []);

  useEffect(() => {
    if (starshipDetails) {
      setTimeout(() => {
        setbackgroundNoImageOpacity(1);
      }, 300);
    }
  }, [starshipDetails]);

  console.log("starship!!!", starship);

  return (
    <>
      <Header />
      <NavBar />
      {starship && (
        <>
          <div className="p-5"></div>
          <div className="sm:w-3/4 w-full m-auto p-5">
            <div className="section-header p-4 mb-10">Starship</div>
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
                    background: `url(https://starwars-visualguide.com/assets/img/starships/${getStarshipId(starship)}.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <div className="details-wrapper sm:w-1/2 w-full">
                <h1 className="starship-name">{starship?.name}</h1>
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
