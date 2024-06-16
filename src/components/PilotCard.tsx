
export function PilotCard({ pilot }) {


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

