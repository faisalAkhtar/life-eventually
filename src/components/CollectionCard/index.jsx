import "./CollectionCard.css";
import { getImgUrl } from "../../utils/globLoader";
import { reFormatDate } from "../../utils/helperMethods";

export default function CollectionCard({ title, caption, completed, dateCompleted, slug }) {
  return (
    <div className="cardDiv">
      <div className={completed ? "cardImgDiv completed" : "cardImgDiv"}>
        <input checked={completed} type="checkbox" className="checkbox" readOnly />
        <img className="cardImg" src={getImgUrl(slug)} loading="lazy" decoding="async" />
      </div>
      <div className="cardTitle">{title}</div>
      <div>{caption}</div>
      {dateCompleted ? (
        <div className="cardDate">{reFormatDate(dateCompleted)}</div>
      ) : ""}
    </div>
  );
}