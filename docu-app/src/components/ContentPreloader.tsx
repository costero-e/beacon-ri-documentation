import { useRegisterTextContent } from "../hooks/useRegisterTextContent";

// Introduction
import IntroductionText from "../content/introduction.txt";
// Beacon 2 PI API
import PiAutomatedDeploymentText from "../content/pi_automated_deployment.txt";
import PiManualDeploymentText from "../content/pi_manual_deployment.txt";
import FilteringTermsText from "../content/filtering_terms.txt";
import ConfigurationPiText from "../content/configuration_pi.txt";
import PiQueryingApiText from "../content/pi_query_api.txt";
// Beacon 2 RI API
import AutomatedDeploymentText from "../content/automated_deployment.txt";
import ManualDeploymentText from "../content/manual_deployment.txt";
import DataLinkingText from "../content/data_linking.txt";
import QueryingApiText from "../content/query_api.txt";
import ConfigurationRiText from "../content/configuration_ri.txt";
// Beacon 2 RI API Tools v2
import StartingGuideText from "../content/starting_guide.txt";
import ConfigurationFile from "../content/configuration_file.txt";
import CreatingCSVFilesText from "../content/creating_csv_files.txt";
import ConversionCSVBFFText from "../content/conversion_csvbff.txt";
import ConversionVCFBFFText from "../content/conversion_vcfbff.txt";
// Beacon UI
import QueryingUIText from "../content/querying_ui.txt";
import DeploymentUIText from "../content/deployment_ui.txt";
import ConfigurationUIText from "../content/configuration_ui.txt";
// Beacon Network UI
import NetworkQueryingTheUIText from "../content/network_querying_ui.txt";
import NetworkDeploymentUIText from "../content/deployment_networkui.txt";
import NetworkConfigurationUIText from "../content/configuration_networkui.txt";
// Tutorials
import TutorialsText from "../content/tutorials.txt";
// Resources
import ResourcesText from "../content/resources.txt";

const ContentPreloader = () => {
  // Introduction
  useRegisterTextContent("/", IntroductionText, "Introduction");

  // Beacon 2 PI API
  useRegisterTextContent(
    "/pi-automated-deployment",
    PiAutomatedDeploymentText,
    "Automated Deployment"
  );
  useRegisterTextContent(
    "/pi-manual-deployment",
    PiManualDeploymentText,
    "Manual Deployment"
  );
  useRegisterTextContent(
    "/filtering-terms",
    FilteringTermsText,
    "Filtering Terms"
  );
  useRegisterTextContent(
    "/configuration",
    ConfigurationPiText,
    "Configuration"
  );
  useRegisterTextContent(
    "/pi-querying-the-api",
    PiQueryingApiText,
    "Querying the API"
  );

  // Beacon 2 RI API
  useRegisterTextContent(
    "/automated-deployment",
    AutomatedDeploymentText,
    "Automated Deployment"
  );
  useRegisterTextContent(
    "/manual-deployment",
    ManualDeploymentText,
    "Manual Deployment"
  );
  useRegisterTextContent("/data-linking", DataLinkingText, "Data Linking");
  useRegisterTextContent(
    "/api-configuration",
    ConfigurationRiText,
    "Configuration"
  );
  useRegisterTextContent(
    "/querying-the-api",
    QueryingApiText,
    "Querying the API"
  );

  // Beacon 2 RI API Tools v2
  useRegisterTextContent(
    "/starting-guide",
    StartingGuideText,
    "Starting Guide"
  );
  useRegisterTextContent(
    "/configuration-file",
    ConfigurationFile,
    "Configuration File"
  );
  useRegisterTextContent(
    "/creating-the-csv-files",
    CreatingCSVFilesText,
    "Creating the CSV files"
  );
  useRegisterTextContent(
    "/conversion-from-csv-to-bff",
    ConversionCSVBFFText,
    "Conversion from CSV to BFF"
  );
  useRegisterTextContent(
    "/conversion-from-vcf-to-bff",
    ConversionVCFBFFText,
    "Conversion from VCF to BFF"
  );

  // Beacon UI
  useRegisterTextContent("/deployment", DeploymentUIText, "Deployment");

  useRegisterTextContent(
    "/configuration-ui",
    ConfigurationUIText,
    "Configuration UI"
  );

  useRegisterTextContent("/querying-the-ui", QueryingUIText, "Querying the UI");

  // Beacon Network UI
  useRegisterTextContent(
    "/network-deployment",
    NetworkDeploymentUIText,
    "Network Deployment"
  );

  useRegisterTextContent(
    "/network-configuration-ui",
    NetworkConfigurationUIText,
    "Network Configuration UI"
  );

  useRegisterTextContent(
    "/network-querying-the-ui",
    NetworkQueryingTheUIText,
    "Network Querying the UI"
  );

  // Tutorials
  useRegisterTextContent("/tutorials", TutorialsText, "Tutorials");

  // Resources
  useRegisterTextContent("/resources", ResourcesText, "Resources");
  return null;
};

export default ContentPreloader;
