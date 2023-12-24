import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItems = useSelector((store) => store.bag);
  const Items = useSelector((store) => store.items);
  const finalItems = Items.filter((item) => {
    const itemId = bagItems.indexOf(item.id);
    return itemId >= 0;
  });


  let CONVENIEINCE_FEES;
  if(bagItems <= 0){
     CONVENIEINCE_FEES = 0;
  }else{
     CONVENIEINCE_FEES = 99;
  }
  
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
  });
  
  
    let finalPayment = totalMRP - totalDiscount + CONVENIEINCE_FEES;
 

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagItems.length} Items)
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        .
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{CONVENIEINCE_FEES}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};

export default BagSummary;
