import "./Footer.css";

export default function Footer({ smallHidden }) {
  return (
    <footer className={`${smallHidden ? "" : "smallHidden"}`}>
      &copy; {new Date().getFullYear()}.
      With <span style={{ fontWeight: "bold" }}>&#x2661;</span> from Faisal
    </footer>
  );
}