import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landingPage">
      <div>
        {" "}
        <a href="/introduction" className="no-undeline">
          <h2>Documentation</h2>
        </a>
        <h3>Beacon v2 Reference/Production Implementation Documentation</h3>
        <p>
          Welcome to the documentation for the Beacon v2 Reference/Production
          Implementation!
        </p>
        <p>
          <b>Beacon v2 Reference Implementation (B2RI) </b>and{" "}
          <b>Beacon v2 Production Implementation (B2PI) </b>are a set of tools
          that allow you to have a REST API, with genomic and phenotypic data
          according to Beacon v2 standards, that you can then query to explore
          and do some research on the data. Below, you can find the schema
          process of using B2RI/B2PI, which consists on processing data from raw
          to a .json that is Beacon v2 compliant, to then upload this data to
          the API and finally querying the API through a user-friendly
          interface. The four services that are used along this process are the
          next ones:
        </p>
        <li>
          <b>Beacon RI Tools v2.</b> Which allows you to convert .csv/.vcf files
          to .json files in a Beacon Friendly Format (BFF). Notice that Beacon
          RI Tools v2 is meant to work with either Beacon 2 RI API or Beacon 2
          PI API. Furthermore, it specifically comes with all the features that
          are needed for generating Beacon v2 PI API compatible data.
        </li>
        <li>
          <b>Beacon RI API / PI API.</b> The API, which is connected to a
          MongoDB that stores all the .json files, and that you can then query
          following the standards (rules for how to query the data). In case of
          B2PI, we provide an upgraded version of Beacon v2 RI API but meant to
          work for production environments (this replaces Beacon v2 RI API and
          is recommended to use for better experience and performance).
        </li>
        <li>
          <b>Beacon Verifier v2.</b> A tool that will check that the data in the
          API is Beacon v2 compliant and will generate a report about the
          validity of the API.
        </li>
        <li>
          <b>Beacon User Interface.</b> The friendly way of querying the API
          without concerning about the standards, just throwing intuitive
          queries and also enabling authentication through LifeScience or
          Keycloak.
        </li>
        <p>
          Related to this final point, security is one of the main concerns of
          beacon and API will always validate through the identity provider
          chosen if the authentication is correct, based on the OIDC and Oauth
          globally accepted protocols.
        </p>
      </div>
      <img
        className="relationship-elements"
        alt="Relationship-elements"
        src="/scheme_RI.svg"
      />
      <h2 className="h2-subtitle">
        What brings the new Beacon v2 Production Implementation?
      </h2>
      <p>
        As stated before, Beacon v2 PI API is a beacon instance for production
        environments. The steps that this production instance follows are the
        next ones shown in the next flowchart:
      </p>
      <img
        className="relationship-elements"
        alt="Relationship-elements"
        src="/scheme_PI.svg"
      />
      <p>
        The process to deploy and inject data is the same than in Beacon v2 RI
        API (data comes from Beacon v2 RI Tools v2) but this instance is
        optimized and tested, having the next upgrades from Beacon v2 RI API:
        <li>Handlers of the endpoints are classes, not functions.</li>
        <li>
          Unit testing has been developed for the application, starting with 108
          unit tests that cover 4000 lines of code approximately (100%).
        </li>
        <li>
          Concurrency testing has been applied for this new beacon instance,
          showing results of responses for more than 3 million genomic variants
          splitted in different datasets in less than 100 millisecs, for a total
          of 1000 requests made by 10 users per second at the same time.{" "}
        </li>
        <li>Linking ids to a dataset in a yaml file is not needed anymore. </li>
        <li>
          A couple more indexes for mongoDB have been applied, that, in addition
          to the restructuration of the code, have improved the quickness of the
          responses.{" "}
        </li>
        <li>
          Authentication/Authorization is now applied as a decorator, not as a
          different container.{" "}
        </li>
        <li>
          LOGS now show more relevant information about the different processes
          (from request to response) including transaction id, the time of
          execution of each function and the initial call and the return call.
        </li>
        <li>
          Exceptions now are raised from the lower layer to the top layer, with
          information and status for the origin of the exception.{" "}
        </li>
        <li>
          Architecture of the code is not dependent on a particular database,
          meaning that different types of databases (and more than one) can be
          potentially applied to this instance (although now only MongoDB is the
          one developed).{" "}
        </li>
        <li>Parameters are sanitized. </li>{" "}
        <li>
          Users can manage what entry types want their beacon to show by editing
          a manage conf file inside source (Endpoint Mapper).{" "}
        </li>
      </p>
      <div className="collaborators-div">
        <h3>Collaborators</h3>
        <div className="collaborators-images">
          <img
            className="collaborators-img"
            alt="Europe"
            src="/europe_logo.png"
          />
          <img
            className="collaborators-img"
            alt="CaixaBank"
            src="/caixabank_logo.png"
          />
          <img className="collaborators-img" alt="EGA" src="/ega_logo.png" />
          <img className="collaborators-img" alt="CRG" src="/crg_logo.png" />

          <img
            className="collaborators-img"
            alt="ELIXIR"
            src="/elixir_logo.png"
          />
          <img
            className="collaborators-img"
            alt="EMBL-EBI"
            src="/embl-ebi_logo.png"
          />
        </div>
      </div>

      <footer className="footer">
        <span className="footer-text">
          © Copyright 2024, B2RI Documentation Contributors
        </span>
      </footer>
    </div>
  );
}

export default LandingPage;
