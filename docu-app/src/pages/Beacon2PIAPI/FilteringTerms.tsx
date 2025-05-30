import { useState } from "react";
import copyIcon from "../../assets/copy-symbol.svg";
import "../Beacon2RIAPI/ApiConfiguration.css";
import OnThisPage from "../../components/OnThisPage";

const FilteringTerms = () => {
  const [copySuccess, setCopySuccess] = useState<{ [key: string]: boolean }>(
    {}
  );

  const copyToClipboard = (snippetId: string) => {
    const textToCopy: { [key: string]: string } = {
      "extract-terms": `docker exec beaconprod python beacon/connections/mongo/extract_filtering_terms.py`,
      "manual-filtering-terms": `db.filtering_terms.insertMany([
  {
    "type": "alphanumeric",
    "id": "libraryStrategy",
    "scope": ["runs"]
  }
])`,
      "get-descendant-terms": `docker exec beaconprod python beacon/connections/mongo/get_descendants.py`,
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
        <a href="/filtering-terms" className="no-undeline">
          <span className="user-path-title">Filtering Terms</span>
        </a>
      </h2>
      <div className="contentWrapper">
        <div className="contentColumn">
          <h3>Beacon 2 Production Implementation API</h3>
          <h1>Filtering Terms</h1>
          <p>
            Filtering terms are metadata fields that allow users to query your
            Beacon more precisely — for example, by filtering results based on
            sequencing strategy (libraryStrategy), tissue type, disease, or
            other structured attributes. These terms often rely on ontologies to
            ensure consistent vocabulary across datasets.
          </p>
          <p>
            This section explains how to extract, add, and enhance filtering
            terms for your Beacon instance.
          </p>

          {/* FINISHED HERE */}
          <h2 id="automatically-extract-filtering-terms">
            Automatically Extract Filtering Terms
          </h2>
          <p>
            If your data collections (e.g., runs, biosamples, etc.) already
            contain structured metadata using ontology terms (like NCIT, UBERON,
            EFO...), you can extract filtering terms automatically.<br></br>{" "}
            This will populate the <em>/filteringTerms</em> endpoint of your
            Beacon, enabling more advanced queries.
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
          <h2 id="manually-add-filtering-terms">
            Manually Add Filtering Terms{" "}
            <span className="optional">(optional)</span>
          </h2>
          <p>
            If you want to enable filtering for fields that aren’t auto-detected
            or don’t use ontologies (e.g., simple alphanumeric fields like{" "}
            <em>libraryStrategy</em>), you can add them manually.
          </p>
          <p>Execute the following command:</p>
          <div className="codeSnippet">
            <pre>
              <code>
                db.filtering_terms.insertMany([{`\n`}
                {"  "}
                {"{"}
                {`\n`}
                {"    "} "type": "alphanumeric",{`\n`}
                {"    "} "id": "libraryStrategy",{`\n`}
                {"    "} "scope": ["runs"]{`\n`}
                {"  "}
                {"}"}
                {`\n`}
                ])
              </code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("manual-filtering-terms")}
              >
                {copySuccess["manual-filtering-terms"] ? (
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
          <p>
            Field descriptions:
            <ul>
              <li>
                <b>type</b>: alphanumeric indicates this is a plain text value,
                not an ontology term.
              </li>
              <li>
                <b>id</b>: The metadata field name.
              </li>
              <li>
                <b>scope</b>: The collection where this field is used (e.g.,
                runs, biosamples, analyses).
              </li>
            </ul>
          </p>
          <h2 id="enhance-ontology-filtering-with-descendants">
            Enhance Ontology Filtering with Descendants and semantic
            similarities <span className="optional">(optional)</span>
          </h2>
          <p>
            To make ontology-based filtering more powerful and user-friendly,
            you can enable two features:
            <ul>
              <li>
                <b>Descendant terms</b>: Automatically include all subcategories
                of a given ontology term (e.g., querying for “cancer” also
                returns “lung cancer”, “breast cancer”, etc.).
              </li>
              <li>
                <b>id</b>: The metadata field name.
              </li>
              <li>
                <b>Semantic similarity</b>: Enable matching to related ontology
                terms based on meaning, not just hierarchy. This allows for more
                flexible queries when users don’t know the exact term used in
                the data.
              </li>
            </ul>
          </p>
          <h2>Example</h2>
          <p>
            If your data uses the term <b>“glioblastoma”</b>, but a user
            searches for <b>“brain tumor”</b>, semantic similarity can help
            bridge the gap — even if “brain tumor” isn’t a direct parent of
            “glioblastoma”.
          </p>
          <h2>How to Enable</h2>
          <ol>
            <li>
              Add your <em>.obo</em> ontology files
            </li>
            <p className="lessMargin">
              Place ontology files into the ontologies/ folder in your Beacon
              instance. The filename must match the ontology prefix in lowercase
              (e.g., ncit.obo, uberon.obo, etc.).
            </p>
            <li>Run the script to enhance filtering terms</li>
          </ol>

          <div className="codeSnippet">
            <pre>
              <code>
                docker exec beaconprod python
                beacon/connections/mongo/get_descendants.py
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
          <p>
            This script:
            <ul>
              <li>
                Adds descendant terms from the ontologies to each filtering
                term.
              </li>
              <li>
                Computes semantic similarities based on the ontology structure,
                enriching your Beacon’s ability to match related terms.
              </li>
            </ul>
          </p>
          <br></br>
          <br></br>
        </div>

        <div className="sidebarColumn">
          <OnThisPage />
        </div>
      </div>
    </div>
  );
};

export default FilteringTerms;
