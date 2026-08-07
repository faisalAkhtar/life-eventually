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
      <div style={{ overflow: "hidden" }}>
        <div
          className={`optionsDiv ${selected === 'all' ? "selected" : ""}`}
          onClick={handleClick('all')}
          style={{ "--opt-index": 0 }}
        >
          <DreamsSvg />
          <div className="optionName">All</div>
        </div>

        {
          Object.entries(categoryCounts).map(([category, counts], ind) => {
            const SvgIcon = svgMap[category];
            const categoryName = category.split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            return (
              <div
                key={category}
                className={`optionsDiv ${selected === category ? "selected" : ""}`}
                onClick={handleClick(category)}
                style={{ "--opt-index": ind+1 }}
              >
                {SvgIcon ? <SvgIcon />  : ""}
                <div className="optionName">{categoryName}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}