import { useState } from "react";
import copyIcon from "../../assets/copy-symbol.svg";
import "../Beacon2RIAPI/ApiConfiguration.css";
import OnThisPage from "../../components/OnThisPage";

const PiApiConfiguration = () => {
  const [copySuccess, setCopySuccess] = useState<{ [key: string]: boolean }>(
    {}
  );

  const copyToClipboard = (snippetId: string) => {
    const textToCopy = {
      "method-1-public": "public_datasets:\n- dataset_id",
      "method-1-registered": "registered_datasets:\n- dataset_id",
      "method-1-controlled": "username:\n- dataset_id",
      "method-2-env": `SECRET_KEY="your_permissions_ui_secret_key"\nOIDC_RP_CLIENT_ID='your_client_id'\nOIDC_RP_CLIENT_SECRET='your_client_secret'`,
      "method-2-start":
        "docker exec beacon-permissions bash permissions/permissions-ui/start.sh",
      "aai-env": `LSAAI_CLIENT_ID='your_lsaai_client_id'\nLSAAI_CLIENT_SECRET='your_lsaai_client_secret'\nKEYCLOAK_CLIENT_ID='your_keycloak_client_id'\nKEYCLOAK_CLIENT_SECRET='your_keycloak_client_secret'`,
      "beacon-rebuild": "cd deploy && docker-compose up -d --build beacon",
      "cors-main": `cors_urls = ["http://localhost:3000","https://cancer-beacon-demo.ega-archive.org", "https://beacon-network-demo2.ega-archive.org", "https://beacon.ega-archive.org"]`,
      "cors-routes": `for route in list(beacon.router.routes()):\n        cors.add(route, {\n        "your_URL":\n            aiohttp_cors.ResourceOptions(allow_credentials=True,\n            expose_headers="*",\n            allow_methods=("POST", "PATCH", "GET", "OPTIONS"),\n            allow_headers=DEFAULT_ALLOW_HEADERS)`,
      "beacon-info": `beacon_id = 'org.ega-archive.beacon-ri-demo'\nbeacon_name = 'Beacon Reference Implementation demo'\napi_version = 'v2.0.0'\nuri = 'https://beacon-apis-demo.ega-archive.org/api/'\norg_id = 'EGA'\norg_name = 'European Genome-Phenome Archive (EGA)'\norg_description = 'The European Genome-phenome Archive (EGA) is a service for permanent archiving and sharing of all types of personally identifiable genetic and phenotypic data resulting from biomedical research projects.'\norg_adress = 'C/ Dr. Aiguader, 88\nPRBB Building\n08003 Barcelona, Spain'\norg_welcome_url = 'https://ega-archive.org/'\norg_contact_url = 'mailto:beacon.ega@crg.eu'\norg_logo_url = 'https://legacy.ega-archive.org/images/logo.png'\norg_info = ''\ndescription = "This Beacon is based on synthetic data hosted at the <a href='https://ega-archive.org/datasets/EGAD00001003338'>EGA</a>. The dataset contains 2504 samples including genetic data based on 1K Genomes data, and 76 individual attributes and phenotypic data derived from UKBiobank."\nversion = 'v2.0'\nwelcome_url = 'https://beacon.ega-archive.org/'\nalternative_url = 'https://beacon-apis-demo.ega-archive.org/api/'\ncreate_datetime = '2021-11-29T12:00:00.000000'\nupdate_datetime = ''`,
      "granularity-conf": `default_beacon_granularity = "record"\nmax_beacon_granularity = "record"`,
      "granularity-response": `dummy_user:\n- record`,
      "beacon-handovers": `beacon_handovers = [
    {
        handoverType: {
            id: 'CUSTOM:000001',
            label: 'Project description'
        },
        note: 'Project description',
        url: 'https://www.nist.gov/programs-projects/genome-bottle'
    }
]`,
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
          ); // Reset copy success after 1.5 seconds
        })
        .catch((error) => console.log(error));
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
        <a href="/configuration" className="no-undeline">
          <span className="user-path-title">Configuration</span>
        </a>
      </h2>
      <div className="contentWrapper">
        <div className="contentColumn">
          <h3>Beacon 2 Production Implementation API</h3>
          <h1>Configuration</h1>
          <p>
            Beacon2 PI API has two folders where a user can configure their
            beacons: conf for general configuration of the beacon and source for
            configuring the model of the beacon: e.g. entry types and the
            databases related to each entry type.
          </p>
          <h2 id="editing-beacon-info">Editing your beacon information</h2>
          <p>
            To show correctly your beacon’s information you will need to edit
            both conf.py files from beacon and deploy folders.
            <br />
            To do so, edit the following variables:
          </p>
          <div className="codeSnippet">
            <pre>
              <code>
                {`beacon_id = 'org.ega-archive.beacon-ri-demo'\n`}
                <br />
                {`beacon_name = 'Beacon Reference Implementation demo'\n`}
                <br />
                {`api_version = 'v2.0.0'\n`}
                <br />
                {`uri = 'https://beacon-apis-demo.ega-archive.org/api/'\n`}
                <br />
                {`org_id = 'EGA'\n`}
                <br />
                {`org_name = 'European Genome-Phenome Archive (EGA)'\n`}
                <br />
                {`org_description = 'The European Genome-phenome Archive (EGA) is a service for permanent archiving and sharing of all types of personally identifiable genetic and phenotypic data resulting from biomedical research projects.'\n`}
                <br />
                {`org_adress = 'C/ Dr. Aiguader, 88\nPRBB Building\n08003 Barcelona, Spain'\n`}
                <br />
                {`org_welcome_url = 'https://ega-archive.org/'\n`}
                <br />
                {`org_contact_url = 'mailto:beacon.ega@crg.eu'\n`}
                <br />
                {`org_logo_url = 'https://legacy.ega-archive.org/images/logo.png'\n`}
                <br />
                {`org_info = ''\n`}
                <br />
                <code>
                  {`description = "This Beacon is based on synthetic data hosted at the `}
                  <a
                    href="https://ega-archive.org/datasets/EGAD00001003338"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EGA
                  </a>
                  {`. The dataset contains 2504 samples including genetic data based on 1K Genomes data, and 76 individual attributes and phenotypic data derived from UKBiobank."`}
                </code>

                <br />
                {`version = 'v2.0'\n`}
                <br />
                {`welcome_url = 'https://beacon.ega-archive.org/'\n`}
                <br />
                {`alternative_url = 'https://beacon-apis-demo.ega-archive.org/api/'\n`}
                <br />
                {`create_datetime = '2021-11-29T12:00:00.000000'\n`}
                <br />
                {`update_datetime = ''`}
                <br />
              </code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("beacon-info")}
              >
                {copySuccess["beacon-info"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
            <p className="note">
              <img
                className="note-symbol"
                src="https://github.com/costero-e/beacon-ri-documentation/blob/main/docu-app/public/note-symbol.png?raw=true"
                alt="Note symbol"
              />
              <div>
                Note that this is the info that will be shown in the /info
                endpoint for your beacon.
              </div>
            </p>
          </div>
          <h2 id="managing-dataset-permissions">
            Managing dataset permissions
          </h2>
          <p>
            There are 3 possible levels of beacon security for a dataset:
            public, registered and controlled.
          </p>
          <ul>
            <li>
              A public dataset is a dataset that will be returned in a beacon
              query without an authentication token. 
            </li>
            <li>
              A registered dataset is a dataset that will be shown after a user
              sends a valid token (in other words, is logged in).
            </li>
            <li>
              A controlled dataset is a dataset that needs a user to send a
              valid token for authentication and the user needs to be allowed to
              query that dataset.
            </li>
          </ul>
          <br></br>
          <h4 id="edit-yml-files">
            Edit the .yml files inside permissions/datasets
          </h4>
          <p>
            For a <b>public dataset</b>, edit the public_datasets.yml file
            inside permissions folder and add the dataset with the exact name it
            appears in the id from its pertinent record in datasets mongo
            collection:
          </p>
          <div className="codeSnippet">
            <pre>
              <code>
                public_datasets:
                <br />
                -dataset_id
              </code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("method-1-public")}
              >
                {copySuccess["method-1-public"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <p>
            For a <b>registered dataset</b>, edit the registered_datasets.yml
            file inside permissions folder and add the dataset with the exact
            name it appears in the id from its pertinent record in datasets
            mongo collection:
          </p>
          <div className="codeSnippet">
            <pre>
              <code>
                registered_datasets: <br /> -dataset_id
              </code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("method-1-registered")}
              >
                {copySuccess["method-1-registered"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <p>
            For a <b>controlled dataset</b>, edit the controlled_datasets.yml
            file inside permissions folder and add the dataset inside the
            username you wish to give permissions with the exact name for the
            dataset as it appears in the id from its pertinent record in
            datasets mongo collection and the exact name the user has in
            Keycloak:
          </p>
          <div className="codeSnippet">
            <pre>
              <code>
                username: <br />
                -dataset_id
              </code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("method-1-controlled")}
              >
                {copySuccess["method-1-controlled"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <h2 id="supplying-aai-credentials">
            Supplying AAI credentials for your Identity Provider (IDP)
          </h2>
          <p>
            For making any IDP (based on OpenID and Oauthv2) work with beacon,
            you will need to add the <b>client ID </b>and <b>client secret</b>{" "}
            for each IDP in a new file you have to create inside
            auth/idp_providers folder (for each IDP). This file must have a name
            with an .env extension (e.g. something.env) and needs to have the
            following variables:
          </p>
          <div className="codeSnippet">
            <pre>
              <code>
                CLIENT_ID=beacon <br />
                CLIENT_SECRET='b26ca0f9-1137-4bee-b453-ee51eefbe7ba' <br />
                USER_INFO='http://idp:8080/auth/realms/Beacon/protocol/openid-connect/userinfo'{" "}
                <br />
                INTROSPECTION='http://idp:8080/auth/realms/Beacon/protocol/openid-connect/token/introspect'{" "}
                <br />
                ISSUER='http://localhost:8080/auth/realms/Beacon' <br />
                JWKS_URL='http://idp:8080/auth/realms/Beacon/protocol/openid-connect/certs'
              </code>

              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("aai-env")}
              >
                {copySuccess["aai-env"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <p>After that, make sure you build your beacon container again:</p>
          <div className="codeSnippet">
            <pre>
              <code>docker-compose up -d --build beaconprod</code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("beacon-rebuild")}
              >
                {copySuccess["beacon-rebuild"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <h2 id="handling-cors">Handling CORS</h2>
          <p>
            To avoid CORS using beacon and the frontend or a third-party
            authorization site like Keycloak, you will have to include all these
            URLs inside variable cors_urls in <b>beacon/conf/conf.py file</b>.
            <br></br>
            Example usage:
          </p>
          <div className="codeSnippet">
            <pre>
              <code>
                cors_urls =
                ["http://localhost:3000","https://cancer-beacon-demo.ega-archive.org",
                "https://beacon-network-demo2.ega-archive.org",
                "https://beacon.ega-archive.org"]
              </code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("cors-main")}
              >
                {copySuccess["cors-main"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <h2 id="setting-default-granularity">
            Setting the default granularity
          </h2>
          <p>
            Beacon PI can only limit the granularity for all the beacon at the
            moment. If you want to limit the granularity for all users across
            all datasets, you can point it in <b>becon/conf/conf.py</b>, by
            editing the next variables:
          </p>
          <div className="codeSnippet">
            <pre>
              <code>max_beacon_granularity = "record"</code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("granularity-conf")}
              >
                {copySuccess["granularity-conf"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <h2 id="adding-beacon-handovers">Adding beacon handovers</h2>
          <p>
            A handover can be added to the general beacon response or to the
            response per dataset.
            <br />
            In any of the cases, you have to modify the{" "}
            <b>beacon/utils/handovers.py</b> file and you can write your
            handover there following the Beacon v2 spec response for handovers,
            e.g.
          </p>
          <div className="codeSnippet custom-codeSnippet">
            <pre>
              <code>
                handover_1= &#123;
                <br />
                &nbsp;&nbsp;"note": "Description of the handover",
                <br />
                &nbsp;&nbsp;"url": "Link for the handover",
                <br />
                &nbsp;&nbsp;"handoverType": &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;"id": "NCIT:C189151",
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;"label": "Study Data Repository"
                &nbsp;&nbsp;&#125; &#125;
              </code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("beacon-handovers")}
              >
                {copySuccess["beacon-handovers"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <h4>General response</h4>
          <p>
            After doing that if you want to just show the handover in general
            (not per dataset) you will need to include it in the
            list_of_handovers array:
          </p>
          <div className="codeSnippet custom-codeSnippet">
            <pre>
              <code>list_of_handovers=[handover_1]</code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("beacon-handovers")}
              >
                {copySuccess["beacon-handovers"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <h4>Handover per dataset</h4>
          <p>
            If you want to add the handover per dataset, then you will need to
            create first a dictionary per dataset with the handover and the
            dataset id, like this:
          </p>{" "}
          <div className="codeSnippet custom-codeSnippet">
            <pre>
              <code>
                {`dataset1_handover = { "dataset": dataset1_id, "handover": handover_1 }`}
              </code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("beacon-handovers")}
              >
                {copySuccess["beacon-handovers"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <p>And then you will need to add it in the next array:</p>{" "}
          <div className="codeSnippet custom-codeSnippet">
            <pre>
              <code>list_of_handovers_per_dataset=[dataset1_handover]</code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("beacon-handovers")}
              >
                {copySuccess["beacon-handovers"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <h2 id="configuring-entry-types">Configuring your entry types</h2>
          <p>
            If you go to the source folder inside beacon folder, you will find a
            file called <b>manage.py</b> that you will need to edit in order to
            tell the API what is implemented in your beacon for each entry type
            and in what database you have the data related to each entry_type.{" "}
            <br />
            <br />
            In order to do this, you will just need to put a True or False
            response to what granularity you have implemented per each
            entryType. See the next example:
          </p>
          <div className="codeSnippet">
            <pre>
              <code>
                {`g_variants={ 'granularity': {
                  'boolean': True,
                  'count': True,
                  'record': True },
          'singleEntryUrl': True,
          'endpoints': {'analysis': True, 'biosample': True, 'individual': True, 'run': True },
          'testMode': True,
          'database': 'mongo' }`}
              </code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("granularity-conf")}
              >
                {copySuccess["granularity-conf"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <p>
            If none of the granularities are True, then beacon will not look at
            the other variables (as entryType will be programmed as not
            implemented). If some of the granularities are True, then,
            singleEntryUrl will tell if a beacon has the id queries implemented
            for this entryType and for each endpoint inside endpoints, which
            cross query with this entryType and the id parameter is implemented
            as well. The <b>testMode</b> is to point if the entryType can be
            queried using testMode and the database field will tell the users
            which database has the data for that particular entryType.
          </p>
          <p className="note">
            <img
              className="note-symbol"
              src="https://github.com/costero-e/beacon-ri-documentation/blob/main/docu-app/public/europe_logo.png?raw=true"
              alt="Note symbol"
            />
            <div>
              Bear in mind that the name of the database variable needs to be
              the exact same name that the name for the folder it corresponds to
              in beacon/connections.
            </div>
          </p>
          <h2 id="setting-logs">Setting the logs</h2>
          <p>
            In this production instance of beacon, you can set the level of the
            logs you want to output and where do you want to see the output in.{" "}
            <br />
            <br />
            All the outputs will be streamed but if you define a path for a log
            file (file with extension .log) you will be able to have all the
            history of logs for your beacon saved in this file. <br />
            <br />
            For setting the level of the logs, specify one amongst NOTSET,
            DEBUG, ERROR, INFO in the variable level (after logging.):
          </p>
          <div className="codeSnippet">
            <pre>
              <code>level=logging.NOTSET</code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("granularity-conf")}
              >
                {copySuccess["granularity-conf"] ? (
                  "Copied!"
                ) : (
                  <img className="copySymbol" src={copyIcon} alt="Copy" />
                )}
              </button>
            </pre>
          </div>
          <p>
            For setting the path to the file, define it in the variable
            log_file:
          </p>
          <div className="codeSnippet">
            <pre>
              <code>log_file=None</code>
              <button
                className="copyButtonCode"
                onClick={() => copyToClipboard("granularity-conf")}
              >
                {copySuccess["granularity-conf"] ? (
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
              src="https://github.com/costero-e/beacon-ri-documentation/blob/main/docu-app/public/europe_logo.png?raw=true"
              alt="Note symbol"
            />
            <div>
              <p className="note-paragraph">
                To save the logs in a file out of docker, you will need to
                create a volume for the file. There is a default log file volume
                defined in the docker-compose, which is -
                <b>./beacon/logs/logs.log:/beacon/logs/logs.log </b>, hence no
                need to create any other volume if you use this same file for
                logs.
              </p>
            </div>
          </p>
          <h2 id="TLS-configuration">TLS configuration</h2>
          <p>
            To enable TLS for the Becaon API set beacon_server_crt and
            beacon_server_key to the full paht of the server certificate and
            server key in <b>beacon/conf/conf.py</b> file.
          </p>
          <h2 id="TLS-secured-MongoDB">TLS secured MongoDB</h2>
          <p>
            Edit the file <b>beacon/connections/mongo/conf.py </b> and
            set database_certificate to the full path to the client certificate.
            If a private CA is used also set the database_cafile to the full
            path to the CA certificate.
            <li>
              The MongoDB client certificate should be in the combined PEM
              format client.key + "\n" + client.crt
            </li>
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

export default PiApiConfiguration;
