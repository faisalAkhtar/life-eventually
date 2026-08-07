import "./CollectionCard.css";
import { getImgUrl } from "../../utils/globLoader";
import { reFormatDate } from "../../utils/helperMethods";

export default function CollectionCard({ ind, title, completed, dateCompleted, dateAdded, slug }) {
  return (
    <div className={`cardDiv ${completed ? "completed" : "todo"}`} style={{ "--card-index": ind }}>
      <div className="cardImgDiv">
        <input checked={completed} type="checkbox" className="checkbox" readOnly />
        <img className="cardImg" src={getImgUrl(slug)} loading="lazy" decoding="async" />
      </div>
      <div className="cardTitle">{title}</div>
      {dateCompleted ? (
        <div className="cardDate">Completed <strong>&middot;</strong> {reFormatDate(dateCompleted)}</div>
      ) : (
        dateAdded ? (
          <div className="cardDate">Added <strong>&middot;</strong> {reFormatDate(dateAdded)}</div>
        ) : ""
      )}
    </div>
  );
}