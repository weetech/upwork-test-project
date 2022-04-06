import React, { useEffect, useMemo, useState } from "react";

import Nav from "./components/Nav";
import OrderBy from "./components/OrderBy";
import OrderContext from "./contexts/OrderContext";
import { OrderTypes } from "./types/order";

import "./App.css";
import InfiniteList from "./components/InfiniteList";
import JobDefinition from "./types/job";

const App: React.FC = () => {
  const [jobs, setJobs] = useState<JobDefinition[]>([]);
  const [orderby, setOrderby] = useState<OrderTypes>(OrderTypes.Random);
  const data = useMemo(async () => {
    const result = await fetch("/jobs.json");
    const data = await result.json();
    if (orderby === OrderTypes.Priority) {
      const sortedJobs = jobs.sort((a, b) => {
        if (a.priority > b.priority) {
          return -1;
        }
        if (a.priority < b.priority) {
          return 1;
        }
        return 0;
      });
      return [...sortedJobs]
    } else {
      return [...data]
    }
  }, [orderby])

  const fetchData: () => Promise<void> = async () => {
    setJobs(await data);
  };

  const toggleOrder = (newOrder: OrderTypes) => {
    setOrderby(newOrder);
  };

  useEffect(() => {
    fetchData();
  }, [orderby]);

  return (
    <div className="App">
      <OrderContext.Provider
        value={{
          orderby: orderby,
          toggleOrder,
        }}
      >
        <Nav />
        {!!jobs.length && (
          <div data-testid="app-jobs" className="App-jobs">
            <OrderBy />
            <InfiniteList jobs={jobs} />
          </div>
        )}
      </OrderContext.Provider>
    </div>
  );
};

export default App;
