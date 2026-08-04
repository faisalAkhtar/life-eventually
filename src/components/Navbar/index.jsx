import "./Navbar.css";
import Options from "../Options/";

export default function Navbar({ categoryCounts, svgMap, filterBucket, smallVisible, selected }) {
  const QuoteSvg = svgMap['quote'];

  return (
    <nav>
      <div className="navTop">
        <div className="navTitle">faisal.</div>

        <Options
          categoryCounts={categoryCounts}
          svgMap={svgMap}
          filterBucket={filterBucket}
          selected={selected}
          isVisibleOnSmallScreen={false}
          isOpen={true}
        />
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