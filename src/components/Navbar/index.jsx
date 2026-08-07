import { Suspense, lazy } from "react";
import "./Navbar.css";
const Options = lazy(() => import("../Options/"));
import { svgMap } from "../../utils/globLoader";

export default function Navbar({ categoryCounts, filterBucket, smallVisible, selected }) {
  const QuoteSvg = svgMap['quote'];

  return (
    <nav>
      <div className="navTop">
        <div className="navTitle">faisal.</div>

        <Suspense>
          <Options
            categoryCounts={categoryCounts}
            filterBucket={filterBucket}
            selected={selected}
            isVisibleOnSmallScreen={false}
          />
        </Suspense>
      </div>

      <div className={`navBot ${smallVisible ? "smallVisible" : ""}`}>
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