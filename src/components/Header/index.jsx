import "./Header.css";

export default function Header({ completed, total }) {
  return (
    <header className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">
          A Collection of Dreams
        </p>
        <h1 className="hero__title">
          Life, Eventually.
        </h1>
        <p className="hero__description">
          Some dreams became memories.
          <br />
          Some are still waiting for the right day.
        </p>

        <div className="hero__stats">
          <div className="hero__stat">
            <span>{completed}</span>
            <small>Fulfilled</small>
          </div>
          <div className="hero__divider" />
          <div className="hero__stat">
            <span>{total}</span>
            <small>Dreams</small>
          </div>
        </div>

        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${(completed / total) * 100}%` }}></div>
        </div>
      </div>
    </header>
  );
}