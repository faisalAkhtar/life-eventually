import "./SmallScreenFilter.css";
import { svgMap } from "../../utils/globLoader";

export default function SmallScreenFilter({ isOpen, smallHidden, toggleFilter }) {
  const Icon = svgMap['filter'];
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