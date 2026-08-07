import "./Header.css";
import { preload } from "react-dom";

export default function Header({ completed, total }) {
  preload('/hero-small.jpg', { as: 'image', fetchPriority: 'high', media: '(max-width: 1024px)' });
  preload('/hero-medium.jpg', { as: 'image', fetchPriority: 'high', media: '(min-width: 1025px) and (max-width: 1280px)' });
  preload('/hero-large.jpg', { as: 'image', fetchPriority: 'high', media: '(min-width: 1281px)' });

  return (
    <header className="heroDiv">
      <div className="heroContent">
        <p className="heroEyebrow">
          A Collection of Dreams
        </p>

        <h1 className="heroTitle">
          Life, Eventually.
        </h1>

        <div className="heroStatsDiv">
          <span>{completed} / {total}</span> dreams fulfilled
        </div>

        <div className="progressContainer">
          <div className="progressBar" style={{ width: `${(completed / total) * 100}%` }}></div>
        </div>
      </div>
    </header>
  );
}