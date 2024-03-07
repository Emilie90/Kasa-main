import Banner from "../components/Banner";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import data from "../data/logements.json";

export default function Home() {
  return (
    <div className="Home">
      <Banner Title="Chez vous, partout et ailleurs" />
      <div className="bloc-cards">
        {data.map((house) => (
          <Link key={house.id} to={`/logement/${house.id}`}>
            <Card house={house} />
          </Link>
        ))}
      </div>
    </div>
  );
}
