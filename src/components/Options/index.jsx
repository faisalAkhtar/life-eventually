import "./Options.css";
import { svgMap } from "../../utils/globLoader";

export default function Options({ categoryCounts, filterBucket, selected, isVisibleOnSmallScreen, isOpen, toggleFilter, smallHidden }) {
  const DreamsSvg = svgMap['dreams'];
  const optionsArr = ["optionsWrapper"];
  const handleClick = (category) => () => {
    filterBucket(category);
    if (toggleFilter) toggleFilter(state => !state);
  }

  if (isVisibleOnSmallScreen) optionsArr.push("smallScreenOptions");

  if (isOpen) optionsArr.push("isSmallOptionOpen");

  if (!smallHidden) optionsArr.push("smallHidden");

  return (
    <div className={optionsArr.join(" ")}>
      <div
        className={selected === 'all' ? "optionsDiv selected" : 'optionsDiv'}
        onClick={handleClick('all')}
      >
        <DreamsSvg />
        <div className="optionName">All</div>
      </div>

      {
        Object.entries(categoryCounts).map(([category]) => {
          const SvgIcon = svgMap[category];
          const categoryName = category.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          return (
            <div
              key={category}
              className={selected === category ? "optionsDiv selected" : "optionsDiv"}
              onClick={handleClick(category)}
            >
              {SvgIcon ? (
                <SvgIcon />
              ) : ""}
              <div className="optionName">{categoryName}</div>
            </div>
          )
        })
      }
    </div>
  );
}