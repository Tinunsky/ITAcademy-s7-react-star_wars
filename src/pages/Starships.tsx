import { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { StarshipContext } from "../contexts/StarshipContext";
import { getStarshipId } from "../utils/getStarshipId";

export function Starships() {
  const navigate = useNavigate();
  const {
    starships,
    setIndexStarship,
    getMoreStarships,
    nextPageUrl,
  } = useContext(StarshipContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMoreStarships();
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight

    ) {
      loadMoreStarships();
    }
  }
  document.body.onscroll = handleScroll;

  useEffect(() => {
    setLoading(false);

  }, [starships]);

  function loadMoreStarships() {
    if (!loading && nextPageUrl) {
      setLoading(true);
      getMoreStarships();
    }
  }

  function handleClick(indexStarship: number) {
    navigate(`/starship-details/${indexStarship}`);
    setIndexStarship(indexStarship);
  }

  return (
    <>
      <Header />
      <NavBar />
      <div className="p-5">
        {starships.map((starship) => (
          <div
            key={crypto.randomUUID()}
            className="sm:w-2/3 w-full"
            style={{
              background: "#141518",
              border: "1px solid #ffee5888 ",
              padding: "15px 55px",
              margin: "30px auto",
              borderRadius: "50px",
              cursor: "pointer",
            }}
            onClick={() => handleClick(getStarshipId(starship))}
          >
            <div
              style={{
                fontSize: "1.4em",
              }}
            >
              {starship.name}
            </div>
            <div
              style={{
                opacity: "0.7",
              }}
            >
              {starship.model}
            </div>
          </div>
        ))}
        {loading && (
          <div
            style={{
              color: "#ffee58",
              opacity: "0.8",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Loading...
          </div>
        )}
      </div>
    </>
  );
}
