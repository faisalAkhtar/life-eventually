import "./Options.css";

export default function Options({ categoryCounts, svgMap, filterBucket, selected, isVisibleOnSmallScreen, isOpen, smallHidden }) {
  const DreamsSvg = svgMap['dreams'];
  const optionsArr = ["optionsWrapper"];

  if (isVisibleOnSmallScreen) optionsArr.push("smallScreenOptions");

  if (isOpen) optionsArr.push("isSmallOptionOpen");

  if (!smallHidden) optionsArr.push("smallHidden");

  return (
    <div className={optionsArr.join(" ")}>
      <div
        className={selected === 'all' ? "optionsDiv selected" : 'optionsDiv'}
        onClick={() => filterBucket('all')}
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
              className={selected === category ? "optionsDiv selected" : "optionsDiv"}
              key={category}
              onClick={() => filterBucket(category)}
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