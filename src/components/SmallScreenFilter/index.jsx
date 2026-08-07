import { svgMap } from "../../utils/globLoader";
import TopbarIcon from "../TopbarIcon";

export default function SmallScreenFilter({ isOpen, toggleFilter, isHidden }) {
  const Icon = svgMap['filter'];
  return (
    <TopbarIcon
      handleClick={() => toggleFilter(state => !state)}
      classList={`${isHidden ? "smallHidden" : ""} ${isOpen ? "selected" : ""} filterIconDiv`}
    >
      <Icon />
    </TopbarIcon>
  );
}