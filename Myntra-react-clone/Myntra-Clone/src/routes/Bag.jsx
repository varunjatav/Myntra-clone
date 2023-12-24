import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const Items = useSelector((store) => store.items);
  const finalItems = Items.filter((item) => {
    const itemId = bagItems.indexOf(item.id);
    return itemId >= 0
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
           { finalItems.map((item) =>  <BagItem item={item}/>)}
           
          </div>
          <div className="bag-summary">
            <BagSummary />
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
