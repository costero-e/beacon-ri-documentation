import "../Beacon2RIAPI/ManualDeployment.css";
import { useState } from "react";
import copyIcon from "../../assets/copy-symbol.svg";
import OnThisPage from "../../components/OnThisPage";

const PiManualDeployment = () => {
  const [copySuccess, setCopySuccess] = useState<{ [key: string]: boolean }>(
    {}
  );

  const copyToClipboard = (snippetId: string) => {
    const textToCopy = {
      "cloning-repository":
        "git clone https://github.com/EGA-archive/beacon2-pi-api.git",
      "cd-deploy": "docker compose up -d --build",
      "create-network": "docker compose up -d –build beaconprod db",
      "data-injection": [
        'docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/datasets.json --collection datasets',
        'docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/individuals.json --collection individuals',
        'docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/cohorts.json --collection cohorts',
        'docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/analyses.json --collection analyses',
        'docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/biosamples.json --collection biosamples',
        'docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/genomicVariations.json --collection genomicVariations',
        'docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/runs.json --collection runs',
        'docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/targets.json --collection targets',
        'docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/caseLevelData.json --collection caseLevelData',
      ].join("\n"),
      "data-indexing":
        "docker exec beaconprod python -m beacon.connections.mongo.reindex",
    }[snippetId];

    if (textToCopy) {
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
          );
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="deploymentContainer">
      <h2 className="user-path">
        <a href="/" className="no-undeline">
          Documentation
        </a>
        <img
          src="arrow-right-light.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/pi-manual-deployment" className="no-undeline">
          Beacon 2 PI API
        </a>
        <img
          src="arrow-right-bold.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/pi-manual-deployment" className="no-undeline">
          <span className="user-path-title"> Manual Deployment</span>
        </a>
      </h2>
      <div className="contentWrapper">
        <div className="contentColumn">
          <h3>Beacon 2 Production Implementation API</h3>
          <h1>Manual Deployment</h1>
          <h2 id="cloning-repository">Cloning the repository</h2>
          <p>
            First of all, start by cloning the GitHub repository in your system.
          </p>
          <div className="codeSnippet">
            <pre>
              <code>
                git clone{" "}
                <a href="https://github.com/EGA-archive/beacon2-pi-api.git">
                  https://github.com/EGA-archive/beacon2-pi-api.git
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

          <h2 id="creating-the-containers">Creating the containers</h2>
          <p>
            Make sure the next list of ports are free of use in your system:
          </p>

          <ul>
            <li>27017 → mongo</li>
            <li>8081 → mongo-express (optional)</li>
            <li>5050 → beacon</li>
            <li>8080 → Keycloak (optional)</li>
            <li>9991 → Keycloak SSL (optional)</li>
          </ul>

          <p>Light up the containers from the deploy folder.</p>
          <div className="codeSnippet">
            <pre>
              <code>docker compose up -d --build</code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("cd-deploy")}
              >
                {copySuccess["cd-deploy"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>

          <p>
            If you wish to light up only some of the services, not all, just
            write the name of the services in the <b>docker-compose.yml</b> file
            right after the command (e.g. for having the mandatory services
            only):
          </p>

          <div className="codeSnippet">
            <pre>
              <code>docker compose up -d –build beaconprod db</code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("create-network")}
              >
                {copySuccess["create-network"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>

          <p>If the containers are built correctly:</p>
          <ul>
            <li>
              The API will run in{" "}
              <a
                href="http://localhost:5050/api"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://localhost:5050/api
              </a>
              .
            </li>
            <li>
              The mongo-express UI will run in{" "}
              <a
                href="http://localhost:8081"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://localhost:8081
              </a>
              .
            </li>
            <li>
              The Keycloak UI will run in{" "}
              <a
                href="http://localhost:8080/auth"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://localhost:8080/auth
              </a>
              .
            </li>
          </ul>

          <h2 id="data-injection">Data injection</h2>
          <p>
            Copy all the available BFF files you have to the{" "}
            <a
              href="https://github.com/EGA-archive/beacon2-pi-api/tree/main/beacon/connections/mongo/data"
              target="_blank"
              rel="noopener noreferrer"
            >
              data folder for mongo database
            </a>
            .
          </p>
          <p className="note">
            <img
              className="note-symbol"
              src="https://github.com/costero-e/beacon-ri-documentation/blob/main/docu-app/public/note-symbol.png?raw=true"
              alt="Note symbol"
            />
            <div>
              Tip: A beacon can run without data or data for a single collection
              (e.g. only individuals).
            </div>
          </p>
          <p>
            Now execute the insertion of the files copied into the mongo
            database.
          </p>
          <div className="codeSnippet codeSnippet-mongodb">
            <pre>
              <code>
                {`docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/datasets.json --collection datasets\n`}
                <br />
                {`docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/individuals.json --collection individuals\n`}
                <br />
                {`docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/cohorts.json --collection cohorts\n`}
                <br />
                {`docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/analyses.json --collection analyses\n`}
                <br />
                {`docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/biosamples.json --collection biosamples\n`}
                <br />
                {`docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/genomicVariations.json --collection genomicVariations\n`}
                <br />
                {`docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/runs.json --collection runs\n`}
                <br />
                {`docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/targets.json --collection targets\n`}
                <br />
                {`docker exec mongoprod mongoimport --jsonArray --uri "mongodb://root:example@127.0.0.1:27017/beacon?authSource=admin" --file /data/caseLevelData.json --collection caseLevelData`}
              </code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("data-injection")}
              >
                {copySuccess["data-injection"] ? (
                  "Copied!"
                ) : (
                  <img
                    className="copySymbol copySymbol-custom"
                    src={copyIcon}
                    alt="Copy"
                  />
                )}
              </button>
            </pre>
          </div>

          <h2 id="data-indexing">Data indexing</h2>
          <p>
            For the API to respond fast to the queries, you have to index your
            database. You can create the necessary indexes by running the next
            script:
          </p>
          <div className="codeSnippet">
            <pre>
              <code>
                docker exec beaconprod python -m
                beacon.connections.mongo.reindex
              </code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("data-indexing")}
              >
                {copySuccess["data-indexing"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <p className="note">
            <img
              className="note-symbol"
              src="https://github.com/costero-e/beacon-ri-documentation/blob/main/docu-app/public/note-symbol.png?raw=true"
              alt="Note symbol"
            />
            <div>
              Note that you will need to run this script each time you inject
              new data.
            </div>
          </p>
        </div>
        <div className="sidebarColumn">
          <OnThisPage />
        </div>
      </div>
    </div>
  );
};

export default PiManualDeployment;
