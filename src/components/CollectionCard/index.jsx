import "./CollectionCard.css";

export default function CollectionCard() {
  return (
    <div className="cardDiv">
      <input checked type="checkbox" class="top-right-checkbox" />
      <img src="/src/assets/images/paragliding.jpg" />
      <div className="cardTitle">Bungee Jumping</div>
      <div>Turns out gravity has excellent customer service</div>
      <div className="cardDate">18 Nov 2025</div>
    </div>
  );
}