import "./ConversionCSVBFF.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import copyIcon from "../../assets/copy-symbol.svg";
import OnThisPage from "../../components/OnThisPage";

const ConversionCSVBFF = () => {
  const location = useLocation();

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
      <h2 className="user-path">
        <a href="/" className="no-undeline">
          Documentation
        </a>
        <img
          src="arrow-right-light.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/conversion-from-csv-to-bff" className="no-undeline">
          Beacon 2 RI Tools v2
        </a>
        <img
          src="arrow-right-bold.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/conversion-from-csv-to-bff" className="no-undeline">
          <span className="user-path-title">Conversion from CSV to BFF</span>
        </a>
      </h2>
      <div className="contentWrapper">
        <div className="contentColumn">
          <h3>Beacon 2 RI Tools v2</h3>
          <h1>Conversion from CSV to BFF</h1>
          <p>
            Before getting the BFF (json) final documents, please make sure your{" "}
            <a
              href="https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main/conf/conf.py"
              target="_blank"
              rel="noopener noreferrer"
            >
              conf.py
            </a>
            , which you will find inside the{" "}
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
            Now you can execute the next bash command from the root folder in
            your terminal.
          </p>
          <p>
            If you want to convert all the csv you have at the same time, after
            saving them in the csv input folder (see configuration head), just
            execute:
          </p>

          <div className="codeSnippet">
            <pre>
              <code>docker exec -it ri-tools python convert_csvTObff.py</code>
              <button
                className="copyButtonCode"
                onClick={() =>
                  copyToClipboard(
                    "convert-all",
                    "docker exec -it ri-tools python convert_csvTObff.py"
                  )
                }
              >
                {copySuccess["convert-all"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>

          <p>
            On the other hand, you can convert one by one only, picking one of
            the following commands for the entry type you need:
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
              <code>
                docker exec -it ri-tools python genomicVariations_csv.py
              </code>
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
            Once you execute any of the conversion scripts, it will generate the
            final JSON files (BFF) in the output_docs folder with the name of
            the collection followed by the .json extension (e.g. cohorts.json).
          </p>
          <p>
            These files can be used in a MongoDB for beacon usage. To know how
            to import them into a Beacon v2, please follow the instructions
            described in{" "}
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
        <div className="sidebarColumn">
          <OnThisPage />
        </div>
      </div>
    </div>
  );
};

export default ConversionCSVBFF;
