import "./Search.css";
import TopbarIcon from "../TopbarIcon";
import { svgMap } from "../../utils/globLoader";

export default function Search({ search, setSearch, isOpen, toggleSearch }) {
  const SearchIcon = svgMap['search'];
  const BackIcon = svgMap['back'];

  return (
    <>
      <div className={`search-container ${!isOpen ? "smallHidden" : ""}`}>
        <input
          type="text"
          className="search-input"
          placeholder="Search dreams..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <TopbarIcon handleClick={() => toggleSearch(state => !state)} classList="searchIconDiv">
        {!isOpen ? <SearchIcon /> : <BackIcon />}
      </TopbarIcon>
    </>
  );
}