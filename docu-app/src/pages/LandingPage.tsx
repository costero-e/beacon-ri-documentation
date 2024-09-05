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
          Beacon v2 Reference Implementation (B2RI) is a set of tools that allow
          you to have a REST API, with genomic and phenotypic data according to
          Beacon v2 standards, that you can then query to explore and do some
          research on the data. Below, you can find the schema process of using
          B2RI, which consists on processing data from raw to a .json that is
          Beacon v2 compliant, to then upload this data to the API and finally
          querying the API through a user-friendly interface. The four services
          that are used along this process are the next ones:
        </p>
        <li>
          Beacon RI Tools v2. Which allows you to convert .csv/.vcf files to
          .json files in a Beacon Friendly Format (BFF).
        </li>
        <li>
          Beacon v2 RI API. The API, which is connected to a MongoDB that stores
          all the .json files, and that you can then query following the
          standards (rules for how to query the data).
        </li>
        <li>
          Beacon Verifier v2. A tool that will check that the data in the API is
          Beacon v2 compliant and will generate a report about the validity of
          the API.
        </li>
        <li>
          Beacon User Interface. The friendly way of querying the API without
          concerning about the standards, just throwing intuitive queries and
          also enabling authentication through LifeScience or Keycloak.
        </li>
        <p>
          Related to this final point, security is one of the main concerns of
          B2RI and API will always validate through the identity provider chosen
          if the authentication is correct, based on the OIDC and Oauth globally
          accepted protocols.
        </p>
      </div>

      <img
        className='relationship-elements'
        alt='Relationship-elements'
        src='/scheme_RI_.png'
      />
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
