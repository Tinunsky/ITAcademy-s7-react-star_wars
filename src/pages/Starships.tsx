import { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { StarshipContext } from "../contexts/StarshipContext";

export function Starships() {
  const navigate = useNavigate();
  const {
    starships,
    indexStarship,
    setIndexStarship,
    getMoreStarships,
    nextPageUrl,
  } = useContext(StarshipContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMoreStarships();
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMoreStarships();
      }
    }

    window.addEventListener("scroll", handleScroll);
    setLoading(false);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [starships]);

  function loadMoreStarships() {
    if (!loading && nextPageUrl) {
      setLoading(true);
      getMoreStarships();
    }
  }

  function handleClick(indexStarship: number) {
    navigate("/starship-details");
    setIndexStarship(indexStarship);
  }

  console.log("indexStarship", indexStarship);
  console.log("starships", starships);

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
            onClick={() => handleClick(i)}
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
