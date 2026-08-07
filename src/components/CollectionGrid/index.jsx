import "./CollectionGrid.css";

export default function CollectionGrid({ children, smallHidden }) {
  return (
    <div className={`collectionGrid ${smallHidden ? "" : "smallHidden"}`}>
      { children }
    </div>
  );
}