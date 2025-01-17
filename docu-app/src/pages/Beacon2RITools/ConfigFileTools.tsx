import React, { useState } from "react";
import "./ConfigFileTools.css";
import copyIcon from "../../assets/copy-symbol.svg";
import OnThisPage from "../../components/OnThisPage";

const ConfigFileTools: React.FC = () => {
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
    <div className="configFileToolsContainer">
      <h2 className="user-path">
        <a href="/" className="no-undeline">
          Documentation
        </a>
        <img
          src="arrow-right-light.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/configuration-file" className="no-undeline">
          Beacon 2 RI Tools
        </a>
        <img
          src="arrow-right-bold.svg"
          alt="arrow right"
          className="arrow-icon"
        />
        <a href="/configuration-file" className="no-undeline">
          <span className="user-path-title">Configuration File</span>
        </a>
      </h2>
      <div className="contentWrapper">
        <div className="contentColumn">
          <h3>Beacon 2 RI Tools</h3>
          <h1>Configuration File</h1>
          <p>
            In order to use Beacon2 RI tools v2 one needs to modify a
            configuration file with the desired files and options for the
            different collections.
          </p>
          <p>
            You will find conf.py inside the{" "}
            <a
              href="https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main/conf"
              target="_blank"
              rel="noopener noreferrer"
            >
              conf directory
            </a>
            . Inside this file, you will find the following information:
          </p>

          <h2 id="input-output-files-config">
            Input and Output files config parameters
          </h2>
          <div className="codeSnippet">
            <pre>
              <code id="input-output-config">
                csv_filename='csv/examples/cohorts.csv'
                output_docs_folder='output_docs/CINECA_dataset/'
              </code>
              <button
                className="copyButtonCode"
                onClick={() => {
                  const codeText = document.getElementById(
                    "input-output-config"
                  )?.innerText;
                  if (codeText) {
                    copyToClipboard(codeText, "input-output-config");
                  }
                }}
              >
                {copySuccess["input-output-config"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>

          <h2 id="VCF-conversion">VCF conversion config parameters</h2>
          <div className="codeSnippet">
            <pre>
              <code id="vcf-config">
                allele_frequency=1 # introduce float number, leave 1 if you want
                to convert all the variants <br />
                reference_genome='GRCh38' # Choose one between NCBI36, GRCh37,
                GRCh38
                <br />
                datasetId='coadread_tcga_pan_can_atlas_2018'
                <br />
                case_level_data=False
                <br />
                num_rows=7000000
                <br />
                population='Finnish'
              </code>
              <button
                className="copyButtonCode"
                onClick={() => {
                  const codeText =
                    document.getElementById("vcf-config")?.innerText;
                  if (codeText) {
                    copyToClipboard(codeText, "vcf-config");
                  }
                }}
              >
                {copySuccess["vcf-config"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>

          <h2 id="generic-config-parameters">Generic config parameters</h2>
          <p>
            The first part of this configuration only concerns the conversion of
            CSV to BFF. It is used only when you are converting from CSV.
          </p>
          <p>
            The <i>csv_filename</i> variable sets where the CSV file is and from
            where the script will read the data. Bear in mind that the CSV must
            be inside the folder
            <i>csv</i>, and you can use subfolders within it. This CSV file
            needs to have the headers written as you can find in the files
            inside{" "}
            <a
              href="https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main/csv/templates"
              target="_blank"
              rel="noopener noreferrer"
            >
              templates
            </a>
            . Note that any header that has a different name from the ones that
            appear inside the templates will not be read by the Beacon2 RI tools
            v2.
          </p>
          <p>
            The <i>output_docs_folder</i> sets the folder where your final BFF
            (JSON files) will be saved once execution of beacon tools finishes.
            This folder is mandatory to be always inside <i>output_docs</i>, so
            only the subdirectory inside <i>output_docs</i>
            can be modified in this path.
          </p>

          <h2 id="VCF-conversion-config-parameters">
            VCF conversion config parameters
          </h2>
          <p>
            The second part of the configuration file pertains to the VCF to BFF
            conversion. This only needs to be used in case you are using a VCF
            as a source for the genomic variants collection.
          </p>
          <p>
            The <i>num_variants</i> is the variable you need to write in case
            you are executing the VCF conversor{" "}
            <i>(genomicVariations_vcf.py)</i>. This will tell the script how
            many variants will be read and converted from the file(s).
          </p>
          <p>
            The <i>reference_genome</i> field is the genome used to map the
            reads. 
          </p>
          <p>
            The <i>allele_frequency</i> field lets you set a threshold for the
            allele frequency (AF) of the variants you want to convert from the
            VCF file. If you set it at 0.5, all the variants with 0.5 or less AF
            will be converted to BFF. 1 is the default value (all variants will
            be converted).
          </p>
          <p>
            The <i>datasetId</i> needs to match the id of your datasets.csv or
            datasets.json file. This will add a datasetId field in every record
            to match the record with the dataset it belongs to.
          </p>
          <p>
            The <i>case_level_data</i> is a boolean parameter (True or False)
            which will relate your variants to the samples they belong to. In
            case you set this to true, please, read as well the case level data
            paragraph below.
          </p>
          <p>
            The <i>zygosity</i> is a boolean parameter (True or False) which
            will insert if your sample is homozygous or heterozygous in case you
            have case_level_data activated.
          </p>
          <p>
            The <i>num_rows</i>  is an approximate calculation of the total
            number variants in each VCFf. Make sure this is greater than the
            total variants expected. This was automatically calculated before
            but it was very slow sometimes to calculate all the variants number
            in a VCF.
          </p>
        </div>
        <div className="sidebarColumn">
          <OnThisPage />
        </div>
      </div>
    </div>
  );
};

export default ConfigFileTools;
