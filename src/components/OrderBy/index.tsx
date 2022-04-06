import React, { FC, useContext } from "react";

import { OrderTypes } from "../../types/order";
import OrderContext from "../../contexts/OrderContext";
import "./index.css";

const Job: FC = () => {
  // const [selected, setSelected] = useState(OrderTypes.Random);
  const { orderby, toggleOrder } = useContext(OrderContext);

  const onOrderChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    if (
      e.target.value === OrderTypes.Random ||
      e.target.value === OrderTypes.Priority
    ) {
      if (toggleOrder) {
        toggleOrder(e.target.value);
      }
    }
  };
  return (
    <div className="App-sortby">
      <span className="App-sortby__label">Sort by: </span>
      <select
        className="App-sortby__select"
        id="filtersortby"
        onChange={onOrderChange}
        value={orderby}
      >
        <option value={OrderTypes.Random}>Random</option>
        <option value={OrderTypes.Priority}>By Priority</option>
      </select>
    </div>
  );
};

export default Job;
