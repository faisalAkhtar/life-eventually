import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ categoryCounts, svgMap, filterBucket, smallVisible }) {
  const QuoteSvg = svgMap['quote'];
  const DreamsSvg = svgMap['dreams'];
  const [selected, setSelected] = useState('all');
  const handleClick = (category) => {
    filterBucket(category);
    setSelected(category);
  }

  return (
    <nav>
      <div className="navTop">
        <div className="navTitle">faisal.</div>

        <div className={selected === 'all' ? "navOptions selected" : 'navOptions'} onClick={() => handleClick('all')}>
          <DreamsSvg />
          <div className="navOptionName">All</div>
        </div>

        {
          Object.entries(categoryCounts).map(([category]) => {
            const SvgIcon = svgMap[category];
            const categoryName = category.split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            return (
              <div
                className={selected === category ? "navOptions selected" : "navOptions"}
                key={category}
                onClick={() => handleClick(category)}
              >
                {SvgIcon ? (
                  <SvgIcon />
                ) : ""}
                <div className="navOptionName">{categoryName}</div>
              </div>
            )
          })
        }
      </div>

      <div className={smallVisible ? "navBot smallVisible" : "navBot"}>
        <div className="navQuote">
          <QuoteSvg className="quoteSvg" />
          <div className="subQuote">You miss 100% of the shots you don't take</div>
          <div className="subQuoteBy">- Wayne Gretzky</div>
          <div className="mainQuoteBy">- Michael Scott</div>
        </div>
      </div>
    </nav>
  );
}