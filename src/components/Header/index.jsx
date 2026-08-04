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
          <div className="heroStat">
            <span>{total}</span>
            <small>Dreams</small>
          </div>
          <div className="heroDivider" />
          <div className="heroStat">
            <span>{completed}</span>
            <small>Fulfilled</small>
          </div>
        </div>

        <div className="progressContainer">
          <div className="progressBar" style={{ width: `${(completed / total) * 100}%` }}></div>
        </div>
      </div>
    </header>
  );
}