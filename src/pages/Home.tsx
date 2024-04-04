import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import chewbacca from "../assets/chewbacca.png";

export function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="home-wrapper">
        <img src={chewbacca} alt="Chewbacca" className="chewbacca" />
        <div className="text-wrapper">
        <div className="floating-text">
          <p>Welcome to the Star Wars galaxy!</p>
          <p>
            Embark on an epic journey through the stars and discover the
            mysteries, battles, and legends that have defined one of the most
            iconic sagas in the history of cinema and pop culture.
          </p>
          <p>
            From the battlefields of Tatooine to the far reaches of deep space,
            every corner of this universe awaits you with thrilling adventures
            and unforgettable characters.
          </p>
          <p>
            Join the Rebellion against the Empire, defy the darkness alongside
            the Jedi, or embark on your own quest for power on the dark side.
            The choice is yours in this eternal struggle between good and evil.
          </p>
          <p>
            Get ready to embark on an odyssey that will take you beyond the
            stars and leave you captivated by the magic and wonder of Star Wars.
            May the Force be with you on your journey.
          </p>
        </div>
      </div></div>
    </>
  );
}
