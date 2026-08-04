import { useState } from "react";
import "./Filter.css";

export default function Filter({ filterBucket, smallHidden }) {
  const [selected, setSelected] = useState('all');
  const handleClick = (category) => {
    filterBucket(category);
    setSelected(category);
  }

  return (
    <div className={smallHidden ? "filterBox" : "filterBox smallHidden"}>
      <div
        onClick={() => handleClick('all')}
        className={selected === 'all' ? "filterBtn selected" : "filterBtn"}
      >
        All
      </div>

      <div
        onClick={() => handleClick('complete')}
        className={selected === 'complete' ? "filterBtn selected" : "filterBtn"}
      >
        Fulfilled
      </div>

      <div
        onClick={() => handleClick('incomplete')}
        className={selected === 'incomplete' ? "filterBtn selected" : "filterBtn"}
      >
        Awaited
      </div>
    </div>
  );
}