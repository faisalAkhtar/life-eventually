import "./Topbar.css";

export default function Topbar({ children, smallHidden }) {
  return (
    <div className={smallHidden ? "topBar" : "topBar smallHidden"}>
      { children }
    </div>
  );
}