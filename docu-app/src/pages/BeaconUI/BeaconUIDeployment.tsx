import React from "react";
import "./BeaconUIDeployment.css";
import OnThisPage from "../../components/OnThisPage";

const BeaconUIDeployment: React.FC = () => {
  return (
    <div className="beaconUIDeploymentContainer">
      <h2 className="user-path">
        <a href="/introduction" className="no-undeline">
          Documentation
        </a>
        <img
          src="arrow-right-light.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/deployment" className="no-undeline">
          Beacon UI
        </a>

        <img
          src="arrow-right-bold.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/deployment" className="no-undeline">
          <span className="user-path-title">Deployment</span>
        </a>
      </h2>
      <div className="contentWrapper">
        <div className="contentColumn">
          <h3>Beacon UI</h3>
          <h1>Deployment</h1>
          <p>
            Use the deployment{" "}
            <a
              href="https://github.com/EGA-archive/beacon2-ri-api/blob/master/deploy/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>{" "}
            for all the containers for beacon to also deploy the user interface.
            You will find it running at <em>http://localhost:3000</em>.
          </p>
        </div>
        <div className="sidebarColumn">
          <OnThisPage />
        </div>
      </div>
    </div>
  );
};

export default BeaconUIDeployment;
