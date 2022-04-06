import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { JOBS_PER_CALL } from "../../constants";
import JobDefinition from "../../types/job";

import Job from "../Job";

interface InfiniteListPropsType {
  jobs: JobDefinition[]
}

const InfiniteList: React.FC<InfiniteListPropsType> = ({jobs}) => {
  console.log("InfiniteList", jobs);
  const [items, setItems] = useState<JobDefinition[]>([]);

  useEffect(() => {
    console.log("useEffect inside InfiniteList");
    if (jobs) {
      console.log(jobs.length);
      console.log(jobs);
      setItems(jobs.slice(0,JOBS_PER_CALL));
    }
  }, [jobs]);

  const appendItems = () => {
    console.log("appendItems");
    const temp = [...items, ...jobs.slice(items.length, items.length + JOBS_PER_CALL)]
    setItems(temp);
  }

  const JobList: React.ReactElement[] = items.map((value) => {
    const { id } = value;
    return <Job key={id} {...value} />;
  });

  return (
    <InfiniteScroll
        dataLength={items.length}
        next={appendItems}
        hasMore={items.length < jobs.length}
        loader={<h4>Loading...</h4>}
      >
        {JobList}
      </InfiniteScroll>
  );
};

export default InfiniteList;