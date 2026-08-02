import "./Filter.css";

export default function Filter() {
  return (
    <div className="filterBox">
      <div className="filterBtn selected">All</div>
      <div className="filterBtn">Fulfilled</div>
      <div className="filterBtn">Awaited</div>
    </div>
  );
}