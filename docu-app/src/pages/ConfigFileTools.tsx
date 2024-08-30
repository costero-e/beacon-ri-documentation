import React, { useState } from 'react'
import './ConfigFileTools.css'
import copyIcon from '../assets/copy-symbol.png'

const ConfigFileTools: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState<{ [key: string]: boolean }>({})

  const copyToClipboard = (text: string, snippetId: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess(prev => ({ ...prev, [snippetId]: true }))
        setTimeout(() => {
          setCopySuccess(prev => ({ ...prev, [snippetId]: false }))
        }, 1500)
      })
      .catch(error => console.error('Failed to copy text: ', error))
  }

  return (
    <div className='configFileToolsContainer'>
      <h3>Beacon 2 RI Tools</h3>

      <h2>Configuration File</h2>
      <p>
        In order to use Beacon2 RI tools v2 one needs to modify a configuration
        file with the desired files and options for the different collections.
      </p>
      <p>
        You have to edit the configuration file {''}
        <a
          href='https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main/conf/conf.py'
          target='_blank'
          rel='noopener noreferrer'
        >
          conf.py
        </a>{' '}
        {''}
        that you will find inside the {''}
        <a
          href='https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main/conf'
          target='_blank'
          rel='noopener noreferrer'
        >
          conf directory
        </a>
        . Inside this file, you will find the following information:
      </p>

      <h6>Input and Output files config parameters</h6>
      <div className='codeSnippet'>
        <pre>
          <code>
            csv_filename='csv/examples/cohorts.csv'\noutput_docs_folder='output_docs/CINECA_dataset/'
          </code>
          <button
            className='copyButtonCode'
            onClick={() =>
              copyToClipboard(
                "csv_filename='csv/examples/cohorts.csv'\noutput_docs_folder='output_docs/CINECA_dataset/'",
                'input-output-config'
              )
            }
          >
            {copySuccess['input-output-config'] ? (
              'Copied!'
            ) : (
              <img className='copySymbol' src={copyIcon} alt='Copy' />
            )}
          </button>
        </pre>
      </div>

      <h6>VCF Conversion config parameters</h6>
      <div className='codeSnippet'>
        <pre>
          <code>
            num_variants=100000\nreference_genome='GRCh37' # Choose one between
            NCBI36, GRCh37, GRCh38
          </code>
          <button
            className='copyButtonCode'
            onClick={() =>
              copyToClipboard(
                "num_variants=100000\nreference_genome='GRCh37' # Choose one between NCBI36, GRCh37, GRCh38",
                'vcf-config'
              )
            }
          >
            {copySuccess['vcf-config'] ? (
              'Copied!'
            ) : (
              <img className='copySymbol' src={copyIcon} alt='Copy' />
            )}
          </button>
        </pre>
      </div>

      <h6>Generic config parameters</h6>
      <p>
        The first part of this configuration only concerns the conversion of CSV
        to BFF only. It is used only when you are converting from CSV.
      </p>
      <p>
        The <code>csv_filename</code> variable sets where the CSV file is and
        from where the script will read the data. This CSV file needs to have
        the headers written as you can find in the files inside{' '}
        <a
          href='https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main/csv/templates'
          target='_blank'
          rel='noopener noreferrer'
        >
          templates
        </a>
        . Note that any header that has a different name from the ones that
        appear inside the templates will not be read by the Beacon2 RI tools v2.
        The CSV must be inside the folder <code>csv</code>, and you can use
        subfolders within it.
      </p>

      <p>
        The <code>output_docs_folder</code> sets the folder where your final BFF
        (json files) will be saved once execution of beacon tools finishes. This
        folder is mandatory to be always inside <code>output_docs</code>, so
        only the subdirectory inside <code>output_docs</code> can be modified in
        this path.
      </p>

      <h6>VCF conversion config parameters</h6>
      <p>
        The second part of the configuration file pertains to the VCF to BFF
        conversion. This only needs to be used in case you are using a VCF as a
        source for the genomic variants collection.
      </p>
      <p>
        The <code>num_variants</code> is the variable you need to write in case
        you are executing the VCF conversor (
        <code>genomicVariations_vcf.py</code>). This will tell the script how
        many variants will be read and converted from the file(s).
      </p>
      <p>
        The <code>reference_genome</code> field is the genome used to map the
        reads.
      </p>
      <p>
        The <code>allele_frequency</code> field lets you set a threshold for the
        allele frequency (AF) of the variants you want to convert from the VCF
        file. If you set it at 0.5, all the variants with 0.5 or less AF will be
        converted to BFF. 1 is the default value (all variants will be
        converted).
      </p>
    </div>
  )
}

export default ConfigFileTools
