import React, { useState } from "react";
import "./CreatingCSVs.css";
import copyIcon from "../../assets/copy-symbol.svg";
import OnThisPage from "../../components/OnThisPage";

const CreatingCSVs: React.FC = () => {
  // State to manage copy success
  const [copySuccess, setCopySuccess] = useState<{ [key: string]: boolean }>(
    {}
  );

  // Function to handle copying text to clipboard
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
    <div className="creatingCSVsContainer">
      <h2 className="user-path">
        <a href="/introduction" className="no-undeline">
          Documentation
        </a>
        <img
          src="arrow-right-light.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/creating-the-csv-files" className="no-undeline">
          Beacon 2 RI Tools
        </a>

        <img
          src="arrow-right-bold.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/creating-the-csv-files" className="no-undeline">
          <span className="user-path-title">Creating the CSV files</span>
        </a>
      </h2>
      <div className="contentWrapper">
        <div className="contentColumn">
          <h3>Beacon 2 RI Tools</h3>
          <h1>Creating the CSV files</h1>
          <p>
            The CSV file is an intermediate file to allow Beacon2 RI tools v2
            convert to BFF since the CSVs follow an harmonized structure.
          </p>
          <h4>Picking headers</h4>
          <p>
            You will find all the possible headers to be used for each entry
            type (analyses, biosamples, individuals…) in their respective
            template.csv file inside the
            <a
              href="https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main/csv/templates"
              target="_blank"
              rel="noopener noreferrer"
            >
              csv templates folder
            </a>
            . For example, if we go to <i>biosamples.csv</i>, you will see the
            first column header named like <b>biosampleStatus|id</b>.
          </p>
          <p>
            This nomenclature is the same used in the{" "}
            <a
              href="https://github.com/ga4gh-beacon/beacon-v2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beacon v2 spec
            </a>
            . The purpose of the pipe (|) is to separate different field names
            in the spec, being the left field the one that contains the field in
            the right.
          </p>
          <p>
            For this case, in the spec, we would have the biosampleStatus|id,
            defined in here:
          </p>
          <div className="codeSnippet">
            <pre>
              <code id="biosample-status">
                "biosampleStatus": {"{"}
                <br />
                &nbsp;&nbsp;"$ref":
                "https://raw.githubusercontent.com/ga4gh-beacon/beacon-v2/main/framework/json/common/ontologyTerm.json",
                <br />
                &nbsp;&nbsp;"description": "Ontology value from Experimental
                Factor Ontology (EFO) Material Entity term (BFO:0000040).
                Classification of the sample in abnormal sample (EFO:0009655) or
                reference sample (EFO:0009654).",
                <br />
                &nbsp;&nbsp;"examples": [
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"{"}"id": "EFO:0009654", "label":
                "reference sample"{"}"},<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"{"}"id": "EFO:0009655", "label":
                "abnormal sample"{"}"},<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"{"}"id": "EFO:0009656", "label":
                "neoplastic sample"{"}"},<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"{"}"id": "EFO:0010941", "label":
                "metastasis sample"{"}"},<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"{"}"id": "EFO:0010942", "label":
                "primary tumor sample"{"}"},<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"{"}"id": "EFO:0010943", "label":
                "recurrent tumor sample"{"}"}
                <br />
                &nbsp;&nbsp;]
                <br />
                {"}"}
              </code>
              <button
                className="copyButtonCode"
                onClick={() => {
                  const codeText =
                    document.getElementById("biosample-status")?.innerText;
                  if (codeText) {
                    copyToClipboard(codeText, "biosample-status");
                  }
                }}
              >
                {copySuccess["biosample-status"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <p>
            Being <b>biosampleStatus|id</b> the ontology inside id that belongs
            to biosampleStatus. So, the rows for this biosampleStatus|id column
            header should always have an ontology written, like this:
          </p>
          <div className="codeSnippet">
            <pre>
              <code id="biosample-status-id">
                biosampleStatus|id
                <br />
                EFO:0009654
                <br />
                EFO:0009655
                <br />
              </code>
              <button
                className="copyButtonCode"
                onClick={() => {
                  const codeText = document.getElementById(
                    "biosample-status-id"
                  )?.innerText;
                  if (codeText) {
                    copyToClipboard(codeText, "biosample-status-id");
                  }
                }}
              >
                {copySuccess["biosample-status-id"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <p>
            In case we add a <b>biosampleStatus|label</b>, then the csv would
            look like this (each row would be a different sample).
          </p>
          <div className="codeSnippet">
            <pre>
              <code id="biosample-status-label">
                biosampleStatus|id, biosampleStatus|label
                <br />
                EFO:0009654, reference sample
                <br />
                EFO:0009655, abnormal sample
                <br />
              </code>
              <button
                className="copyButtonCode"
                onClick={() => {
                  const codeText = document.getElementById(
                    "biosample-status-id"
                  )?.innerText;
                  if (codeText) {
                    copyToClipboard(codeText, "biosample-status-label");
                  }
                }}
              >
                {copySuccess["biosample-status-label"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <p>
            Find out more info on how to fill data in the next section (Filling
            data).
          </p>
          <h4>Filling data</h4>
          <p>
            If you want to convert metadata or phenoclinic data into BFF, you
            will have to create the different CSV files for each collection
            needed, writing the records according to the header columns, which
            indicate the field of the schema that this data will be placed in.
            Every new row will be appended to the final output file as a new and
            independent document. You can find the templates and examples of the
            different CSV files in the
            <a
              href="https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main/csv/examples"
              target="_blank"
              rel="noopener noreferrer"
            >
              csv folder
            </a>
            of the repository.
          </p>

          <p>Fill in the CSV file, following the next rules:</p>
          <ul>
            <li>
              If you want to write data that needs to be appended in the same
              document (e.g., two different measures, two different IDs), please
              write data separated with ‘|’.  For example, if you need to write
              two IDs, the structure would be <i>‘HG00001|HG00002’</i>. In
              addition, you’ll need to respect this order for their correlatives
              in the same document. For example, the next row label would need
              to be: <i> ‘labelforHG00001|labelforHG00002’</i>
            </li>
            <li>
              As the<i>info</i> field for each collection is very generic and
              can be filled with different data, you will need to fill the
              column data directly with JSON type data. In case you are
              converting variants with CSV, for copies and subjects for 
              <i>genomicVariations</i>, JSON data is also needed.
            </li>
            <li>
              Please, respect the columns like the files inside the templates
              folder, as the script will read only the columns with the
              "correctly spelled" headers.
            </li>
            <li>
              Note that you do not have to write inside all the columns, as some
              of the columns are optional and others are part of a possible
              option of the Beacon specification but incompatible with other
              columns (an exception will raise in case a column is misfilled).
              Beacon2 RI tools will only convert the columns that contain
              information, the rest can be removed if wanted.
            </li>
          </ul>
          <p className="note">
            <img
              className="note-symbol"
              src="/note-symbol.png"
              alt="Note symbol"
            />
            <div>
              We have filled the different CSV files using the CINECA UK1
              dataset as an example for each collection ready to be converted to
              BFF. Please, take a look at it if you wish inside the
              <a
                href="https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main/csv/examples"
                target="_blank"
                rel="noopener noreferrer"
              >
                examples folder
              </a>
              .
            </div>
          </p>
          <p>
            Remember that not all the different CSVs for the different
            collections have to be filled up. If a user does not have
            information for one collection, Beacon will not complain. However,
            if you want to populate a collection, there are mandatory fields
            that need to be added in order to convert your data to BFF. You can
            find the mandatory fields in the {""}
            <a
              href="https://github.com/ga4gh-beacon/beacon-v2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beacon specification
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

export default CreatingCSVs;
