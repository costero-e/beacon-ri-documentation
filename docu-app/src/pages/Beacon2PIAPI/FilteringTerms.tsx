import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import copyIcon from "../../assets/copy-symbol.svg";
import "../Beacon2RIAPI/ApiConfiguration.css";
import OnThisPage from "../../components/OnThisPage";

const FilteringTerms = () => {
  const location = useLocation();

  const [copySuccess, setCopySuccess] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1); // Remove the '#' from the hash
      const element = document.getElementById(elementId);
      if (element) {
        const yOffset = -100; // Adjust for fixed headers
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location.hash]);

  const copyToClipboard = (snippetId: string) => {
    const textToCopy: { [key: string]: string } = {
      "extract-terms": `docker exec beaconprod python beacon/connections/mongo/extract_filtering_terms.py`,
      "manual-filtering-terms": `db.filtering_terms.insertMany([{
        "type": "alphanumeric",
        "id": "libraryStrategy",
        "scope": ["runs"]
      }])`,
      "conf-py": `alphanumeric_terms = ['libraryStrategy',
        'molecularAttributes.geneIds',
        'diseases.ageOfOnset.iso8601duration']`,
      "get-descendant-terms": `docker exec beaconprod python /beacon/connections/mongo/get_descendants.py`,
    };

    if (textToCopy[snippetId]) {
      navigator.clipboard
        .writeText(textToCopy[snippetId])
        .then(() => {
          setCopySuccess((prevState) => ({
            ...prevState,
            [snippetId]: true,
          }));
          setTimeout(() => {
            setCopySuccess((prevState) => ({
              ...prevState,
              [snippetId]: false,
            }));
          }, 1500);
        })
        .catch(console.error);
    }
  };

  return (
    <div className="apiConfigContainer">
      <h2 className="user-path">
        <a href="/introduction" className="no-undeline">
          Documentation
        </a>
        <img
          src="arrow-right-light.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/filtering-terms" className="no-undeline">
          Beacon 2 PI API
        </a>
        <img
          src="arrow-right-bold.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/filtering-terms" className="no-undeline">
          <span className="user-path-title">Filtering Terms</span>
        </a>
      </h2>
      <div className="contentWrapper">
        <div className="contentColumn">
          <h3>Beacon 2 Production Implementation API</h3>
          <h1>Filtering Terms</h1>
          <h2 id="extract-terms">Extract filtering terms</h2>
          <p>
            To automatically fill in the filtering terms endpoint and be able to
            apply the ontologies that are found inside your data to query your
            beacon, please execute the next script:
          </p>
          <div className="codeSnippet">
            <pre>
              <code>
                docker exec beaconprod python
                beacon/connections/mongo/extract_filtering_terms.py
              </code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("extract-terms")}
              >
                {copySuccess["extract-terms"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <h2 id="manually-adding-terms">
            Manually adding filtering terms{" "}
            <span className="optional">(optional)</span>
          </h2>
          <p>
            To manually add filtering terms to your beacon, execute the
            following command in MongoDB for the `libraryStrategy` field in the
            `runs` collection:
          </p>
          <div className="codeSnippet">
            <pre>
              <code>
                db.filtering_terms.insertMany([{"{"} "type": "alphanumeric",
                "id": "libraryStrategy", "scope": [ "runs"] {"}"}])
              </code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("manual-filtering-terms")}
              >
                {copySuccess["manual-filtering-terms"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <h2 id="get-descendant-terms">
            Get descendant terms <span className="optional">(optional)</span>
          </h2>
          <p>
            To add descendant terms and similarity for ontologies, execute this
            script:
          </p>
          <div className="codeSnippet">
            <pre>
              <code>
                docker exec beaconprod python
                /beacon/connections/mongo/get_descendants.py
              </code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("get-descendant-terms")}
              >
                {copySuccess["get-descendant-terms"] ? (
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

export default FilteringTerms;
