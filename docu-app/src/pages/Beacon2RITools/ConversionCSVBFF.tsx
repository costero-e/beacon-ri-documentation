import "./ConversionCSVBFF.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import copyIcon from "../../assets/copy-symbol.svg";

const ConversionCSVBFF = () => {
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

  const copyToClipboard = (snippetId: string, textToCopy: string) => {
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
    <div className="conversionContainer">
      <h3>Beacon 2 RI Tools</h3>
      <h1>Conversion from CSV to BFF</h1>
      <p>
        Before getting the BFF (json) final documents, please make sure your{" "}
        {""}
        <a
          href="https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main/conf/conf.py"
          target="_blank"
          rel="noopener noreferrer"
        >
          conf.py
        </a>
        , which you will find inside the {""}
        <a
          href="https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main/conf"
          target="_blank"
          rel="noopener noreferrer"
        >
          conf folder
        </a>
        , is reading the right CSV document.
      </p>
      <p>
        Now you can execute the next bash command from the root folder in your
        terminal. All the possible scripts you can execute (individually) to
        convert CSV data for each collection are:
      </p>

      <div className="codeSnippet">
        <pre>
          <code>docker exec -it ri-tools python analyses_csv.py</code>
          <button
            className="copyButtonCode"
            onClick={() =>
              copyToClipboard(
                "analyses",
                "docker exec -it ri-tools python analyses_csv.py"
              )
            }
          >
            {copySuccess["analyses"] ? (
              "Copied!"
            ) : (
              <img className="copySymbol" src={copyIcon} alt="Copy" />
            )}
          </button>
        </pre>
      </div>

      <div className="codeSnippet">
        <pre>
          <code>docker exec -it ri-tools python biosamples_csv.py</code>
          <button
            className="copyButtonCode"
            onClick={() =>
              copyToClipboard(
                "biosamples",
                "docker exec -it ri-tools python biosamples_csv.py"
              )
            }
          >
            {copySuccess["biosamples"] ? (
              "Copied!"
            ) : (
              <img className="copySymbol" src={copyIcon} alt="Copy" />
            )}
          </button>
        </pre>
      </div>

      <div className="codeSnippet">
        <pre>
          <code>docker exec -it ri-tools python cohorts_csv.py</code>
          <button
            className="copyButtonCode"
            onClick={() =>
              copyToClipboard(
                "cohorts",
                "docker exec -it ri-tools python cohorts_csv.py"
              )
            }
          >
            {copySuccess["cohorts"] ? (
              "Copied!"
            ) : (
              <img className="copySymbol" src={copyIcon} alt="Copy" />
            )}
          </button>
        </pre>
      </div>

      <div className="codeSnippet">
        <pre>
          <code>docker exec -it ri-tools python datasets_csv.py</code>
          <button
            className="copyButtonCode"
            onClick={() =>
              copyToClipboard(
                "datasets",
                "docker exec -it ri-tools python datasets_csv.py"
              )
            }
          >
            {copySuccess["datasets"] ? (
              "Copied!"
            ) : (
              <img className="copySymbol" src={copyIcon} alt="Copy" />
            )}
          </button>
        </pre>
      </div>

      <div className="codeSnippet">
        <pre>
          <code>docker exec -it ri-tools python genomicVariations_csv.py</code>
          <button
            className="copyButtonCode"
            onClick={() =>
              copyToClipboard(
                "genomicVariations",
                "docker exec -it ri-tools python genomicVariations_csv.py"
              )
            }
          >
            {copySuccess["genomicVariations"] ? (
              "Copied!"
            ) : (
              <img className="copySymbol" src={copyIcon} alt="Copy" />
            )}
          </button>
        </pre>
      </div>

      <div className="codeSnippet">
        <pre>
          <code>docker exec -it ri-tools python individuals_csv.py</code>
          <button
            className="copyButtonCode"
            onClick={() =>
              copyToClipboard(
                "individuals",
                "docker exec -it ri-tools python individuals_csv.py"
              )
            }
          >
            {copySuccess["individuals"] ? (
              "Copied!"
            ) : (
              <img className="copySymbol" src={copyIcon} alt="Copy" />
            )}
          </button>
        </pre>
      </div>

      <div className="codeSnippet">
        <pre>
          <code>docker exec -it ri-tools python runs_csv.py</code>
          <button
            className="copyButtonCode"
            onClick={() =>
              copyToClipboard(
                "runs",
                "docker exec -it ri-tools python runs_csv.py"
              )
            }
          >
            {copySuccess["runs"] ? (
              "Copied!"
            ) : (
              <img className="copySymbol" src={copyIcon} alt="Copy" />
            )}
          </button>
        </pre>
      </div>

      <p>
        Once you execute one of the scripts listed above, it will generate the
        final JSON files (BFF) in the <code>output_docs</code> folder with the
        name of the collection followed by the <code>.json</code> extension
        (e.g. <code>cohorts.json</code>).
      </p>
      <p>
        These files can be used in a MongoDB for beacon usage. To know how to
        import them into a Beacon v2, please follow the instructions described
        in {""}
        <a
          href="https://github.com/EGA-archive/beacon2-ri-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beacon v2 RI API
        </a>
        .
      </p>
    </div>
  );
};

export default ConversionCSVBFF;
