import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import LandingPage from './pages/LandingPage'
import { SearchableContentProvider } from './context/SearchableContentContext'
import ManualDeployment from './pages/ManualDeployment'
import ContentPreloader from './components/ContentPreloader'
import AutomatedDeployment from './pages/AutomatedDeployment'
import DataLinking from './pages/DataLinking'
import ApiConfiguration from './pages/ApiConfiguration' // Import ApiConfiguration component
import QueryingApi from './pages/QueryingApi' // Import QueryingApi component
import StartingGuide from './pages/StartingGuide'
import ConfigFileTools from './pages/ConfigFileTools'
import CreatingCSVs from './pages/CreatingCSVs'
import ConversionCSVBFF from './pages/ConversionCSVBFF'
import ConversionVCFBFF from './pages/ConversionVCFBFF'
import BeaconUIDeployment from './pages/BeaconUIDeployment'
import BeaconUIConfiguration from './pages/BeaconUIConfiguration'
import BeaconUIQueries from './pages/BeaconUIQueries'
import NetworkUIDeployment from './pages/NetworkUIDeployment'
import NetworkUIConfiguration from './pages/NetworkUIConfiguration'
import NetworkUIQueries from './pages/NetworkUIQueries'

interface SearchContextProps {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  searchResults: string[]
  setSearchResults: React.Dispatch<React.SetStateAction<string[]>>
}

export const SearchContext = React.createContext<SearchContextProps>({
  searchTerm: '',
  setSearchTerm: () => {},
  searchResults: [],
  setSearchResults: () => {}
})

function App () {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen)
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    const results: string[] = []
    setSearchResults(results)
  }

  return (
    <SearchableContentProvider>
      <Router>
        <ContentPreloader /> {/* Preload content for search */}
        <div className='appContainer'>
          <Navbar onSearch={handleSearch} />
          <div className='contentContainer'>
            <Menu isSubmenuOpen={isSubmenuOpen} toggleSubmenu={toggleSubmenu} />
            <div
              className={`contentContainer ${
                isSubmenuOpen ? 'withSubmenuOpen' : 'withSubmenuClosed'
              }`}
            >
              <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route
                  path='/manual-deployment'
                  element={<ManualDeployment />}
                />
                <Route
                  path='/automated-deployment'
                  element={<AutomatedDeployment />}
                />
                <Route path='/data-linking' element={<DataLinking />} />
                <Route
                  path='/api-configuration'
                  element={<ApiConfiguration />}
                />
                <Route path='/querying-api' element={<QueryingApi />} />
                <Route path='/starting-guide' element={<StartingGuide />} />
                <Route
                  path='/configuration-file'
                  element={<ConfigFileTools />}
                />
                <Route path='/creating_csvs' element={<CreatingCSVs />} />
                <Route
                  path='/conversion_csv_bff'
                  element={<ConversionCSVBFF />}
                />
                <Route
                  path='/conversion_vcf_bff'
                  element={<ConversionVCFBFF />}
                />
                <Route path='/ui_deployment' element={<BeaconUIDeployment />} />
                <Route
                  path='/ui_configuration'
                  element={<BeaconUIConfiguration />}
                />
                <Route path='/ui_queries' element={<BeaconUIQueries />} />
                <Route
                  path='/networkui_deployment'
                  element={<NetworkUIDeployment />}
                />
                <Route
                  path='/networkui_configuration'
                  element={<NetworkUIConfiguration />}
                />
                <Route
                  path='/networkui_queries'
                  element={<NetworkUIQueries />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </SearchableContentProvider>
  )
}


export default App
