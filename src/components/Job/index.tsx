import { FC, memo } from "react";

import JobProps from "../../types/job";
import "./index.css";

const Job: FC<JobProps> = ({ description, role, url, city, company, id, priority }) => {
  return (
    <div className="App-job" id={id}>
      <a className="App-job__link" href={url} target="_blank">
        <span className="App-job__title">{role}</span>
        <span className="App-job__meta">
          <span className="App-job__company">{company.name}</span>
          <span className="App-job__location">{city}</span>
        </span>
        <span className="App-job__abstract">{description}</span>
      </a>
    </div>
  );
};

export default memo(Job);
