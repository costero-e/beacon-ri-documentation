import React from "react";
import "./BeaconNetworkUI/NetworkUIQueries.css";
import OnThisPage from "../components/OnThisPage";

const OfficialLinks: React.FC = () => {
  return (
    <div className="networkUIQueriesContainer">
      <h2 className="user-path">
        <a href="/" className="no-undeline">
          Documentation
        </a>
        <img
          src="arrow-right-bold.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/official-links" className="no-undeline">
          <span className="user-path-title">Offical Links</span>
        </a>
      </h2>
      <div className="contentWrapper">
        <div className="contentColumn">
          <h1>Official Links</h1>
          <h4>Coming soon...</h4>
        </div>
        <div className="sidebarColumn">
          <OnThisPage />
        </div>
      </div>
    </div>
  );
};

export default OfficialLinks;
