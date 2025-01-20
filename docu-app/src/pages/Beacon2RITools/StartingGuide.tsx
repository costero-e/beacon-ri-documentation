import React, { useState } from "react";
import copyIcon from "../../assets/copy-symbol.svg";
import "./StartingGuide.css";
import OnThisPage from "../../components/OnThisPage";

const StartingGuide: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState<{ [key: string]: boolean }>(
    {}
  );

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess({ ...copySuccess, [id]: true });
      setTimeout(() => setCopySuccess({ ...copySuccess, [id]: false }), 2000);
    });
  };

  return (
    <div className="startingGuideContainer">
      <h2 className="user-path">
        <a href="/" className="no-undeline">
          Documentation
        </a>
        <img
          src="arrow-right-light.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/starting-guide" className="no-undeline">
          Beacon 2 RI Tools v2
        </a>

        <img
          src="arrow-right-bold.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/starting-guide" className="no-undeline">
          <span className="user-path-title">Starting Guide</span>
        </a>
      </h2>
      <div className="contentWrapper">
        <div className="contentColumn">
          <h3>Beacon 2 RI Tools v2</h3>
          <h1>Tools Introduction</h1>
          <p>
            The Beacon2 RI tools v2 is a set of tools written in Python
            available in the following 
            <a
              href="https://github.com/EGA-archive/beacon2-ri-tools-v2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </a>
            .
          </p>
          <p>
            Notice that Beacon RI Tools v2 is meant to work with either Beacon 2
            RI API or Beacon 2 PI API. Furthermore, it specifically comes with
            all the features that are needed for generating Beacon v2 PI API
            compatible data.
          </p>

          <p>
            The main goal of Beacon RI tools v2.0 is to obtain the{" "}
            <b>Beacon Friendly Format (BFF) files </b>, which are JSON files
            following Beacon v2 official specifications. These files have the
            correct format and structure to be injected into a Beacon v2 MongoDB
            database.
          </p>
          <div className="note">
            <img
              className="note-symbol"
              src="/note-symbol.png"
              alt="Note symbol"
            />
            <div>
              <p className="note-paragraph">
                Discover how to set up a Beacon v2 with MongoDB and learn to
                inject BFF files by visiting the official{" "}
                <a
                  href="https://github.com/EGA-archive/beacon2-ri-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beacon v2 PI API
                </a>
                — where you can download your own Beacon v2 for free!
              </p>
            </div>
          </div>
          <p>
            The Beacon data model consists of 7 collections:
            <ul>
              <li> Analyses</li>
              <li> Biosamples</li>
              <li> Cohorts</li>
              <li> Datasets</li>
              <li> GenomicVariations</li>
              <li> Individuals</li>
              <li> Runs</li>
            </ul>{" "}
          </p>
          <p>
            Therefore the Beacon RI tools v2.0 allows the user to create the
            different 7 BFF options.
          </p>
          <p>
            The 6 metadata BFF files are created populating a CSV file with a
            defined structure that follows the Beacon data model. However, the
            genomicVariations collection can be created either from a CSV or
            from a VCF file, minimising conversion time.
          </p>
          <p>
            The initial step, since the Beacon2 RI tools v2 cannot convert the
            data from any source, is to populate the CSV templates that are
            built following the 7 collections of the Beacon data model. This
            enables the Beacon2 RI tools v2 to convert from CSV to BFF. Note
            that you can find the CSV templates in the {""}
            <a
              href="https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main/csv/templates"
              target="_blank"
              rel="noopener noreferrer"
            >
              templates folder
            </a>
            {""} of the same repository.
          </p>

          <h2 id="installation-guide">Installation Guide</h2>
          <p>
            First of all, clone or download the Beacon2 RI tools v2 repository
            to your computer:
          </p>
          <div className="codeSnippet">
            <pre>
              <code>
                git clone https://github.com/EGA-archive/beacon2-ri-tools-v2.git
              </code>
              <button
                className="copyButtonCode"
                onClick={() =>
                  copyToClipboard(
                    "git clone https://github.com/EGA-archive/beacon2-ri-tools-v2.git",
                    "clone-repo"
                  )
                }
              >
                {copySuccess["clone-repo"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <p>
            To light up the container with Beacon RI tools v2, execute the
            docker-compose command inside the root folder of the repository:
          </p>
          <div className="codeSnippet">
            <pre>
              <code>docker-compose up -d --build</code>
              <button
                className="copyButtonCode"
                onClick={() =>
                  copyToClipboard(
                    "docker-compose up -d --build",
                    "docker-command"
                  )
                }
              >
                {copySuccess["docker-command"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <p>
            Once the container is up and running, you can start using Beacon RI
            tools v2, congratulations!
          </p>
        </div>
        <div className="sidebarColumn">
          <OnThisPage />
        </div>
      </div>
    </div>
  );
};

export default StartingGuide;
