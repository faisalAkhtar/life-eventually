import "./Topbar.css";

export default function Topbar({ children }) {
  return (
    <div className="topBar">
      { children }
    </div>
  );
}