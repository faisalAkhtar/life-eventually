import "./SmallScreenNavbar.css";
import { svgMap } from "../../utils/globLoader";

export default function SmallScreenNavbar({ selected, setSelected }) {
  const BucketSvg = svgMap['bucket'];
  const StatsSvg = svgMap['stats'];
  const QuoteSvg = svgMap['quote'];

  return (
    <div className="smallNavbarDiv">
      <div
        onClick={() => { setSelected(0) }}
        className={`smallNavbarItem ${selected === 0 ? "selected" : ""}`}
      >
        <BucketSvg className="smallNavbarSvg" />
        <div className="smallNavbarTxt">Bucketlist</div>
      </div>
      <div
        onClick={() => { setSelected(1) }}
        className={`smallNavbarItem ${selected === 1 ? "selected" : ""}`}
      >
        <StatsSvg className="smallNavbarSvg" />
        <div className="smallNavbarTxt">Stats</div>
      </div>
      <div
        onClick={() => { setSelected(2) }}
        className={`smallNavbarItem ${selected === 2 ? "selected" : ""}`}
      >
        <QuoteSvg className="smallNavbarSvg" />
        <div className="smallNavbarTxt">Inspo</div>
      </div>
    </div>
  );
}