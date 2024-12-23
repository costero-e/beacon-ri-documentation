import "./AutomatedDeployment.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import copyIcon from "../../assets/copy-symbol.svg";

const AutomatedDeployment = () => {
  const location = useLocation();

  // State to manage copy success for each snippet independently
  const [copySuccess, setCopySuccess] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          const yOffset = -80; // Adjust this value based on your header height
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 0);
    }
  }, [location]);

  const copyToClipboard = (snippetId: string) => {
    const textToCopy =
      snippetId === "cloning-repository"
        ? "git clone https://github.com/EGA-archive/beacon2-ri-api.git"
        : "bash start.sh";

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopySuccess((prevState) => ({
          ...prevState,
          [snippetId]: true,
        }));
        setTimeout(
          () =>
            setCopySuccess((prevState) => ({
              ...prevState,
              [snippetId]: false,
            })),
          1500
        ); // Reset copy success after 1.5 seconds
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="deploymentContainer">
      <h2 className="user-path">
        Documentation
        <img
          src="arrow-right-light.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        Beacon 2 RI API
        <img
          src="arrow-right-bold.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <span className="user-path-title"> Automated Deployment</span>
      </h2>
      <h3>Beacon 2 RI API</h3>
      <h1>Automated Deployment</h1>
      <p>
        This deployment just uses a bash script and a Makefile which won’t
        deploy the idp authentication service. If you wish to build the idp
        service you will have to go to Manual Deployment.
      </p>

      <h2 id="cloning-repository">Cloning the repository</h2>
      <p>
        First of all, start by cloning the GitHub repository in your system.
      </p>
      <div className="codeSnippet">
        <pre>
          <code>
            git clone{" "}
            <a href="https://github.com/EGA-archive/beacon2-ri-api.git">
              https://github.com/EGA-archive/beacon2-ri-api.git
            </a>
          </code>
          <button
            className="copyButtonCode"
            onClick={() => copyToClipboard("cloning-repository")}
          >
            {copySuccess["cloning-repository"] ? (
              "Copied!"
            ) : (
              <img className="copySymbol" src={copyIcon} alt="Copy" />
            )}
          </button>
        </pre>
      </div>
      <p className="paragraph-ports">
        Make sure the next list of ports are free of use in your system:
      </p>
      <ul>
        <li>27017 → mongo</li>
        <li>5050 → beacon</li>
        <li>5051 → permissions</li>
      </ul>

      <h2 id="execute-start-script">Execute start script from root</h2>
      <div className="codeSnippet">
        <pre>
          <code>bash start.sh</code>
          <button
            className="copyButtonCode"
            onClick={() => copyToClipboard("execute-start-script")}
          >
            {copySuccess["execute-start-script"] ? (
              "Copied!"
            ) : (
              <img className="copySymbol" src={copyIcon} alt="Copy" />
            )}
          </button>
        </pre>
      </div>
      <p className="paragraph-final">
        If the operation is successful, you will have a beacon up and running at{" "}
        <a
          href="http://localhost:5050/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://localhost:5050/api
        </a>
        .
      </p>
    </div>
  );
};

export default AutomatedDeployment;
