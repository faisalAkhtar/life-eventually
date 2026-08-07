import "./Filter.css";

export default function Filter({ selected, filterBucket, isHidden }) {
  return (
    <div className={`filterBox ${isHidden ? "smallHidden" : ""}`}>
      <div
        onClick={() => filterBucket('all')}
        className={`filterBtn ${selected === "all" ? "selected" : ""}`}
      >
        All
      </div>

      <div
        onClick={() => filterBucket('complete')}
        className={`filterBtn ${selected === "complete" ? "selected" : ""}`}
      >
        Fulfilled
      </div>

      <div
        onClick={() => filterBucket('incomplete')}
        className={`filterBtn ${selected === "incomplete" ? "selected" : ""}`}
      >
        Awaited
      </div>
    </div>
  );
}