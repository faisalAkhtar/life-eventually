import "./Filter.css";

export default function Filter({ selected, filterBucket, isHidden }) {
  return (
    <div className={`filterBox ${isHidden && "smallHidden"}`}>
      <div
        onClick={() => filterBucket('all')}
        className={selected === 'all' ? "filterBtn selected" : "filterBtn"}
      >
        All
      </div>

      <div
        onClick={() => filterBucket('complete')}
        className={selected === 'complete' ? "filterBtn selected" : "filterBtn"}
      >
        Fulfilled
      </div>

      <div
        onClick={() => filterBucket('incomplete')}
        className={selected === 'incomplete' ? "filterBtn selected" : "filterBtn"}
      >
        Awaited
      </div>
    </div>
  );
}