import Carrousel from "../components/Carrousel";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/logements.json";
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rate from "../components/Rate";

export default function FicheLogement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedAppart, setSelectedAppart] = useState(null);

  useEffect(() => {
    const selected = data.find((appart) => appart.id === id);
    if (!selected) {
      navigate("/404");
    } else {
      setSelectedAppart(selected);
    }
  }, [id, navigate]);

  return (
    selectedAppart && (
      <div key={id} className="Home">
        <div className="containerStyles">
          <Carrousel slides={selectedAppart.pictures ?? []} />
        </div>
        <div className="logements_top">
          <div className="logements_top__left">
            <h1 className="Appart-title">{selectedAppart.title}</h1>
            <h3 className="Appart-location">{selectedAppart.location}</h3>
            <div className="tag">
              {selectedAppart.tags.map((tag) => (
                <Tags key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="logements_top__right">
            <Host
              hostPic={selectedAppart.host.picture}
              hostName={selectedAppart.host.name}
            />
            <div className="star_box">
              <Rate scoreValue={selectedAppart.rating} />
            </div>
          </div>
        </div>
        <div className="logement_collapse">
          <Collapse Title="Description" Text={selectedAppart.description} />
          <Collapse
            Title="Equipements"
            Text={renderEquipments(selectedAppart.equipments)}
          />
        </div>
      </div>
    )
  );
}

function renderEquipments(equipments) {
  return equipments.map((equipment, i) => (
    <ul key={i}>
      <li>{equipment}</li>
    </ul>
  ));
}
