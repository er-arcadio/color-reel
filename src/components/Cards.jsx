import "./Cards.css";
import { useNavigate } from "react-router-dom";

function Cards() {
  const navigate = useNavigate();

  const goToRed = () => {
    navigate("/red");
  };

  return (
    <section id="cards-section" className="section">
      <h1>Discover Your Type</h1>
      <div id="types-cards">
        <figure className="type-card">
          <img src="src/assets/red1.jpg" alt="" />
          <button onClick={goToRed} className="type-btn red">
            Red
          </button>
        </figure>
        <figure className="type-card">
          <img src="src/assets/yellow1.jpg" alt="" />
          <button className="type-btn yellow">Yellow</button>
        </figure>
        <figure className="type-card">
          <img src="src/assets/blue1.jpg" alt="" />
          <button className="type-btn blue">Blue</button>
        </figure>
      </div>
    </section>
  );
}

export default Cards;
