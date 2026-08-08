import "./CollectionCard.css";
import { getImgUrl } from "../../utils/globLoader";
import { reFormatDate } from "../../utils/helperMethods";

export default function CollectionCard({ ind, title, caption, completed, location, dateCompleted, dateAdded, slug }) {
  return (
    <div className={`cardDiv ${completed ? "completed" : "todo"}`} style={{ "--card-index": ind }}>
      <div className="cardImgDiv">
        <input checked={completed} type="checkbox" className="checkbox" readOnly />
        <img className="cardImg" src={getImgUrl(slug)} loading="lazy" decoding="async" />
      </div>
      <div className="cardTitle">{title}</div>
      <div
        className="cardCaption"
        style={{ color: `${completed ? "var(--completed)" : "var(--text-muted)"}` }}
      >
        {caption}
      </div>
      {dateCompleted ? (
        <div className="cardDate">{reFormatDate(dateCompleted)} <strong>&middot;</strong> {location}</div>
      ) : (
        dateAdded ? (
          <div className="cardDate">Added <strong>&middot;</strong> {reFormatDate(dateAdded)}</div>
        ) : ""
      )}
    </div>
  );
}