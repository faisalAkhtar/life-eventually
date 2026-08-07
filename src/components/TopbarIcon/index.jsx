import "./TopbarIcon.css";

export default function TopbarIcon({ children, handleClick, classList, selected }) {
  return (
    <div className={`topbarIconWrapper ${selected ? "selected" : ""} ${classList ? classList : ""}`}>
      <div className="topbarIconDiv" onClick={() => handleClick()}>
        {children}
      </div>
    </div>
  );
}