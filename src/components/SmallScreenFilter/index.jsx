import "./SmallScreenFilter.css";

export default function SmallScreenFilter({ Icon, isOpen, smallHidden, toggleFilter }) {
  return (
    <div className={smallHidden ? "filterIconWrapper" : "filterIconWrapper smallHidden"}>
      <div
        className={isOpen ? "filterIconDiv selected" : "filterIconDiv"}
        onClick={() => toggleFilter(state => !state)}
      >
        <Icon className="filterIconSvg" />
      </div>
    </div>
  );
}