import "./SmallScreenNavbar.css";
import { svgMap } from "../../utils/globLoader";

export default function SmallScreenNavbar({ selected, setSelected }) {
  const HomeSvg = svgMap['home'];
  const SearchSvg = svgMap['search'];
  const StatsSvg = svgMap['stats'];
  const QuoteSvg = svgMap['quote'];

  return (
    <div className="smallNavbarDiv">
      <div
        onClick={() => { setSelected(0) }}
        className={selected === 0 ? "smallNavbarItem selected" : "smallNavbarItem"}
      >
        <HomeSvg className="smallNavbarSvg" />
        <div className="smallNavbarTxt">Home</div>
      </div>
      <div
        onClick={() => { setSelected(1) }}
        className={selected === 1 ? "smallNavbarItem selected" : "smallNavbarItem"}
      >
        <SearchSvg className="smallNavbarSvg" />
        <div className="smallNavbarTxt">Search</div>
      </div>
      <div
        onClick={() => { setSelected(2) }}
        className={selected === 2 ? "smallNavbarItem selected" : "smallNavbarItem"}
      >
        <StatsSvg className="smallNavbarSvg" />
        <div className="smallNavbarTxt">Stats</div>
      </div>
      <div
        onClick={() => { setSelected(3) }}
        className={selected === 3 ? "smallNavbarItem selected" : "smallNavbarItem"}
      >
        <QuoteSvg className="smallNavbarSvg" />
        <div className="smallNavbarTxt">Inspo</div>
      </div>
    </div>
  );
}