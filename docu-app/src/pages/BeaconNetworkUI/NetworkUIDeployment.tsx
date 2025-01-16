import React, { useState } from "react";
import "./NetworkUIDeployment.css";
import copyIcon from "../../assets/copy-symbol.svg";
import OnThisPage from "../../components/OnThisPage";

const NetworkUIDeployment: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState<{ [key: string]: boolean }>(
    {}
  );

  const copyToClipboard = (text: string, snippetId: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess((prev) => ({ ...prev, [snippetId]: true }));
        setTimeout(() => {
          setCopySuccess((prev) => ({ ...prev, [snippetId]: false }));
        }, 1500);
      })
      .catch((error) => console.error("Failed to copy text: ", error));
  };

  return (
    <div className="networkUIDeploymentContainer">
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
        <span className="user-path-title">Deployment</span>
      </h2>
      <div className="contentWrapper">
        <div className="contentColumn">
          <h3>Network UI</h3>
          <h1>Deployment</h1>

          <p>
            Please run the following command in order to build the Docker images
            as defined in the <code>docker-compose.yml</code> file and to start
            the containers in detached mode (running in the background):
          </p>

          <div className="codeSnippet">
            <pre>
              <code>docker-compose up -d --build</code>
              <button
                className="copyButtonCode"
                onClick={() =>
                  copyToClipboard(
                    "docker-compose up -d --build",
                    "docker-compose-command"
                  )
                }
              >
                {copySuccess["docker-compose-command"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
        </div>
        <div className="sidebarColumn">
          <OnThisPage />
        </div>
      </div>
    </div>
  );
};

export default NetworkUIDeployment;
