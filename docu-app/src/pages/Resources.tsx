import React from "react";
import "./BeaconNetworkUI/NetworkUIQueries.css";
import OnThisPage from "../components/OnThisPage";
import qrcode from "../pages/../assets/qrcode.png";

const Resources: React.FC = () => {
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
        <a href="/resources" className="no-undeline">
          <span className="user-path-title">Resources</span>
        </a>
      </h2>
      <div className="contentWrapper">
        <div className="contentColumn">
          <h1>Resources</h1>
          <h2>Explore more about Beacon v2 with the following resources:</h2>
          <ul>
            <li>
              Beacon v2 webpage:{" "}
              <a
                href="https://genomebeacons.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://genomebeacons.org/
              </a>
            </li>
            <li>
              Beacon v2 specification documentation:{" "}
              <a
                href="https://docs.genomebeacons.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://docs.genomebeacons.org/
              </a>
            </li>
            <li>
              Beacon v2 API on GitHub:{" "}
              <a
                href="https://github.com/ga4gh-beacon/beacon-v2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/ga4gh-beacon/beacon-v2/
              </a>
            </li>
            <li>
              Beacon Verifier (verify the configuration of your implementation):{" "}
              <a
                href="https://beacon-verifier-demo.ega-archive.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://beacon-verifier-demo.ega-archive.org/
              </a>
            </li>
            <li>
              Add your Beacon implementation to our Beacon registry:{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScORwEVRAlsa8qe9SerKZLGy6qjphApjsHXC8-EcaOrUpW8tw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://docs.google.com/forms/d/e/1FAIpQLScORwEVRAlsa8qe9SerKZLGy6qjphApjsHXC8-EcaOrUpW8tw/viewform
              </a>
            </li>
            <img src={qrcode} className="qrcode" />
          </ul>
        </div>
        <div className="sidebarColumn">
          <OnThisPage />
        </div>
      </div>
    </div>
  );
};

export default Resources;
