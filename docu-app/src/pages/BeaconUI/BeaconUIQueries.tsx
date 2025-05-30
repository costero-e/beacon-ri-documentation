import React from "react";
import "./BeaconUIQueries.css";
import OnThisPage from "../../components/OnThisPage";

const BeaconUIQueries: React.FC = () => {
  return (
    <div className="beaconUIQueriesContainer">
      <h2 className="user-path">
        <a href="/" className="no-undeline">
          Documentation
        </a>
        <img
          src="https://github.com/costero-e/beacon-ri-documentation/blob/main/docu-app/public/arrow-right-light.svg?raw=true"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/filtering-terms" className="no-undeline">
          Beacon 2 PI API
        </a>
        <img
          src="https://github.com/costero-e/beacon-ri-documentation/blob/main/docu-app/public/arrow-right-bold.svg?raw=true"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/querying-the-ui" className="no-undeline">
          <span className="user-path-title">Querying the UI</span>
        </a>
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
