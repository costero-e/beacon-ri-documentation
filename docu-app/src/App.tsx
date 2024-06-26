import './App.css'

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import LandingPage from './pages/LandingPage'

interface SearchContextProps {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = React.createContext<SearchContextProps>({
  searchTerm: '',
  setSearchTerm: () => {}
})

function App () {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    // Additional logic like filtering or navigation can be added here
  }

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <div className='AppContainer'>
        <Navbar onSearch={handleSearch} />
        <div className='contentContainer'>
          <Menu />
          <LandingPage />
        </div>

        {/* Add more components here */}
      </div>
    </SearchContext.Provider>
  )
}

export default App
