import "./CollectionGrid.css";

export default function CollectionGrid({ children, smallHidden }) {
  return (
    <div className={smallHidden ? "collectionGrid" : "collectionGrid smallHidden"}>
      { children }
    </div>
  );
}