import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import LandingPage from "./pages/LandingPage";
import { SearchableContentProvider } from "./context/SearchableContentContext";
import ManualDeployment from "./pages/Beacon2RIAPI/ManualDeployment";
import ContentPreloader from "./components/ContentPreloader";
import AutomatedDeployment from "./pages/Beacon2RIAPI/AutomatedDeployment";
import DataLinking from "./pages/Beacon2RIAPI/DataLinking";
import ApiConfiguration from "./pages/Beacon2RIAPI/ApiConfiguration";
import QueryingApi from "./pages/Beacon2RIAPI/QueryingApi";
import StartingGuide from "./pages/Beacon2RITools/StartingGuide";
import ConfigFileTools from "./pages/Beacon2RITools/ConfigFileTools";
import CreatingCSVs from "./pages/Beacon2RITools/CreatingCSVs";
import ConversionCSVBFF from "./pages/Beacon2RITools/ConversionCSVBFF";
import ConversionVCFBFF from "./pages/Beacon2RITools/ConversionVCFBFF";
import BeaconUIDeployment from "./pages/BeaconUI/BeaconUIDeployment";
import BeaconUIConfiguration from "./pages/BeaconUI/BeaconUIConfiguration";
import BeaconUIQueries from "./pages/BeaconUI/BeaconUIQueries";
import NetworkUIDeployment from "./pages/BeaconNetworkUI/NetworkUIDeployment";
import NetworkUIConfiguration from "./pages/BeaconNetworkUI/NetworkUIConfiguration";
import NetworkUIQueries from "./pages/BeaconNetworkUI/NetworkUIQueries";
import PiApiConfiguration from "./pages/Beacon2PIAPI/PiApiConfiguration";
import PiQueryingAPI from "./pages/Beacon2PIAPI/PiQueryingApi";
import PiManualDeployment from "./pages/Beacon2PIAPI/PiManualDeployment";
import FilteringTerms from "./pages/Beacon2PIAPI/FilteringTerms";
import PiAutomatedDeployment from "./pages/Beacon2PIAPI/PiAutomatedDeployment";

interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchResults: string[];
  setSearchResults: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SearchContext = React.createContext<SearchContextProps>({
  searchTerm: "",
  setSearchTerm: () => {},
  searchResults: [],
  setSearchResults: () => {},
});

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const results: string[] = [];
    setSearchResults(results);
  };

  return (
    <SearchableContentProvider>
      <Router>
        <ContentPreloader />
        <div className="appContainer">
          <Navbar onSearch={handleSearch} />
          <div className="contentContainer">
            <Menu isSubmenuOpen={isSubmenuOpen} toggleSubmenu={toggleSubmenu} />
            <div
              className={`contentContainer ${
                isSubmenuOpen ? "withSubmenuOpen" : "withSubmenuClosed"
              }`}
            >
              <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route
                  path="/automated-deployment"
                  element={<AutomatedDeployment />}
                />

                <Route
                  path="/pi-automated-deployment"
                  element={<PiAutomatedDeployment />}
                />
                <Route
                  path="/manual-deployment"
                  element={<ManualDeployment />}
                />
                <Route
                  path="/pi-manual-deployment"
                  element={<PiManualDeployment />}
                />
                <Route path="/data-linking" element={<DataLinking />} />
                <Route path="/filtering-terms" element={<FilteringTerms />} />
                <Route
                  path="/api-configuration"
                  element={<ApiConfiguration />}
                />
                <Route
                  path="/pi-api-configuration"
                  element={<PiApiConfiguration />}
                />
                <Route path="/pi-querying-api" element={<PiQueryingAPI />} />
                <Route path="/querying-api" element={<QueryingApi />} />
                <Route path="/starting-guide" element={<StartingGuide />} />
                <Route
                  path="/configuration-file"
                  element={<ConfigFileTools />}
                />
                <Route path="/creating_csvs" element={<CreatingCSVs />} />
                <Route
                  path="/conversion_csv_bff"
                  element={<ConversionCSVBFF />}
                />
                <Route
                  path="/conversion_vcf_bff"
                  element={<ConversionVCFBFF />}
                />
                <Route path="/ui_deployment" element={<BeaconUIDeployment />} />
                <Route
                  path="/ui_configuration"
                  element={<BeaconUIConfiguration />}
                />
                <Route path="/ui_queries" element={<BeaconUIQueries />} />
                <Route
                  path="/networkui_deployment"
                  element={<NetworkUIDeployment />}
                />
                <Route
                  path="/networkui_configuration"
                  element={<NetworkUIConfiguration />}
                />
                <Route
                  path="/networkui_queries"
                  element={<NetworkUIQueries />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </SearchableContentProvider>
  );
}

export default App;
