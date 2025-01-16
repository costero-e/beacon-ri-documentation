import React from "react";
import "./BeaconUIQueries.css";
import OnThisPage from "../../components/OnThisPage";

const BeaconUIQueries: React.FC = () => {
  return (
    <div className="beaconUIQueriesContainer">
      <h2 className="user-path">
        Documentation
        <img
          src="arrow-right-light.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        Beacon UI
        <img
          src="arrow-right-bold.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <span className="user-path-title">Querying the UI</span>
      </h2>
      <div className="contentWrapper">
        <div className="contentColumn">
          <h3>Beacon UI</h3>
          <h1>Queries</h1>
          <h4>Coming soon...</h4>
        </div>
        <div className="sidebarColumn">
          <OnThisPage />
        </div>
      </div>
    </div>
  );
};

export default BeaconUIQueries;
