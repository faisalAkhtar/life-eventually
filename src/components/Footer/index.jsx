import "./Footer.css";

export default function Footer() {
  return (
    <footer>&copy; {new Date().getFullYear()}. With <span style={{fontWeight: "bold"}}>&#x2661;</span> from Faisal</footer>
  );
}