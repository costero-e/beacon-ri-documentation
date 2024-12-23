import React from 'react'
import './CreatingCSVs.css'

const CreatingCSVs: React.FC = () => {
  return (
    <div className='creatingCSVsContainer'>
      <h3>Beacon 2 RI Tools</h3>

      <h1>Creating the CSV files</h1>

      <p>
        The CSV file is an intermediate file to allow Beacon2 RI tools v2 to
        convert to BFF since the CSVs follow a harmonized structure.
      </p>
      <p>
        If you want to convert metadata or phenoclinic data into BFF, you will
        have to create the different CSV files for each collection needed,
        writing the records according to the header columns, which indicate the
        field of the schema that this data will be placed in. Every new row will
        be appended to the final output file as a new and independent document.
        You can find the templates and examples of the different CSV files in
        the{' '}
        <a
          href='https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main/csv'
          target='_blank'
          rel='noopener noreferrer'
        >
          csv folder
        </a>{' '}
        of the repository.
      </p>
      <p>Fill in the CSV file, following the next rules:</p>
      <ul>
        <li>
          If you want to write data that needs to be appended in the same
          document (e.g., two different measures, two different IDs), please
          write data separated with ‘|’. For example, if you need to write an
          ID, <code>‘HG00001|HG00002’</code>, respect this order for their
          correlatives in the same document, as for the label of this ID would
          be <code>‘labelforHG00001|labelforHG00002’</code>.
        </li>
        <li>
          As the <code>info</code> field for each collection is very generic and
          can be filled with different data, you will need to fill the column
          data directly with JSON type data. For copies and subjects for{' '}
          <code>genomicVariations</code>, JSON data is also needed.
        </li>
        <li>
          Please, respect the columns like the files inside the templates
          folder, as the script will read only the columns with the "correctly
          spelled" headers.
        </li>
        <li>
          Note that you do not have to write inside all the columns, as some of
          the columns are optional and others are part of a possible option of
          the Beacon specification but incompatible with other columns (an
          exception will raise in case a column is misfilled). Beacon2 RI tools
          will only convert the columns that contain information, the rest can
          be removed if wanted.
        </li>
      </ul>

      <p className='note'>
        <img className='note-symbol' src='/note-symbol.png' alt='Note symbol' />
        <div>
          We have filled the different CSV files using the CINECA UK1 dataset as
          an example for each collection ready to be converted to BFF. Please,
          take a look at it if you wish inside the {''}
          <a
            href='https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main/csv/examples'
            target='_blank'
            rel='noopener noreferrer'
          >
            examples folder
          </a>
          .
        </div>
      </p>

      <p>
        Remember that not all the different CSVs for the different collections
        have to be filled up. If a user does not have information for one
        collection, Beacon will not complain. However, if you want to populate a
        collection, there are mandatory fields that need to be added in order to
        convert your data to BFF. You can find the mandatory fields in the {''}
        <a
          href='https://github.com/ga4gh-beacon/beacon-v2/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Beacon specification
        </a>
        .
      </p>
    </div>
  )
}

export default CreatingCSVs
