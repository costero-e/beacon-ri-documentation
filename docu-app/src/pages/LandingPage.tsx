import React from 'react'
import './LandingPage.css' // Optional: Add styles as needed

function LandingPage () {
  return (
    <div className='landingPage'>
      <div>
        {' '}
    
        <h3>Beacon v2 Reference Implementation Documentation</h3>
        <p>
          Welcome to the documentation for the Beacon v2 Reference
          Implementation!
        </p>
        <p>
          In this documentation you will find information about the API, tools,
          verifier and UI that will help the "beaconization" of your data. You
          will also find 2 different tutorials for ______ and all the links you
          may need during the process.
        </p>
      </div>

      <img className='relationship-elements' alt='Relationship-elements' src='/scheme_RI_.png' />
      <div className='collaborators-div'>
        <h3>Collaborators</h3>
        <div className='collaborators-images'>
          <img
            className='collaborators-img'
            alt='Europe'
            src='/europe_logo.png'
          />
          <img
            className='collaborators-img'
            alt='CaixaBank'
            src='/caixabank_logo.png'
          />
          <img className='collaborators-img' alt='EGA' src='/ega_logo.png' />
          <img className='collaborators-img' alt='CRG' src='/crg_logo.png' />

          <img
            className='collaborators-img'
            alt='ELIXIR'
            src='/elixir_logo.png'
          />
          <img
            className='collaborators-img'
            alt='EMBL-EBI'
            src='/embl-ebi_logo.png'
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
