import React from "react";
import "./NetworkUIQueries.css";

const NetworkUIQueries: React.FC = () => {
  return (
    <div className="networkUIQueriesContainer">
      <h2 className="user-path">
        Documentation
        <img
          src="arrow-right-light.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        Beacon Network UI
        <img
          src="arrow-right-bold.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <span className="user-path-title">Querying the UI</span>
      </h2>
      <h3>Network UI</h3>
      <h1>Queries</h1>
      <h4>Coming soon...</h4>
    </div>
  );
};

export default NetworkUIQueries;
