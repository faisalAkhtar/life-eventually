import "./CollectionCard.css";

export default function CollectionCard({ title, caption, completed, dateCompleted, slug }) {
  return (
    <div className="cardDiv">
      <div className={completed ? "cardImgDiv completed" : "cardImgDiv"}>
        <input checked={completed} type="checkbox" className="checkbox" readOnly />
        <img
          className="cardImg"
          src={`../src/assets/images/${slug}.jpg`}
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `../src/assets/images/empty.jpg`; }}
        />
      </div>
      <div className="cardTitle">{title}</div>
      <div>{caption}</div>
      {dateCompleted ? (
        <div className="cardDate">{dateCompleted}</div>
      ) : ""}
    </div>
  );
}