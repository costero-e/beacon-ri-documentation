import './Navbar.css'

import React, { useContext } from 'react';
import { SearchContext } from '../App'; 

interface NavbarProps {
    onSearch: (term: string) => void;
  }

  
function Navbar({ onSearch }: NavbarProps) {
  const { setSearchTerm } = useContext(SearchContext);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    // Optionally, you can perform search immediately based on the typed term
  };

  return (
    <div className='containerNav'>
      <h1>Beacon v2 RI documentation</h1>
      <input
        className='inputSearch'
        type='text'
        placeholder='Search keywords'
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Navbar;
