import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faBuilding, faClock } from '@fortawesome/free-solid-svg-icons';

function Experience() {
  return (
    <div className='experience' id='experience'>
      <h2>Experience</h2>
      <span></span>

      <div className='exp'>
        <span className='role'>
          <FontAwesomeIcon className='icon' icon={faLaptop} />
          Software Engineering Intern
        </span>
        <span className='company'>
          <FontAwesomeIcon icon={faBuilding} className='icon' />
          Chartyn, San Francisco, CA
        </span>
        <span className='date'>
          <FontAwesomeIcon icon={faClock} className='icon' />
          AUG 2020 – SEPT 2020{' '}
        </span>
        <ul className='description'>
          <li>
            Designed and implemented a search interface for adding new data connections for clients
            using Vue and Vuex{' '}
          </li>
        </ul>
      </div>

      <div className='exp'>
        <span className='role'>
          <FontAwesomeIcon className='icon' icon={faLaptop} />
          Global SAP MaxAttention Communication Intern
        </span>
        <span className='company'>
          <FontAwesomeIcon icon={faBuilding} className='icon' />
          SAP America, Newtown Square, PA
        </span>
        <span className='date'>
          <FontAwesomeIcon icon={faClock} className='icon' />
          July 2019 – December 2019
        </span>
        <ul className='description'>
          <li>
            {' '}
            Successfully led an email and call campaign that retained over 100 client partners on an
            update to the customer booking process
          </li>
          <li>
            {' '}
            Created a SharePoint site for client partners to access resources needed during the
            pre-sale and sales process
          </li>
        </ul>
      </div>

      <div className='exp'>
        <span className='role'>
          <FontAwesomeIcon icon={faLaptop} className='icon' />
          Premium Engagement Intern
        </span>
        <span className='company'>
          <FontAwesomeIcon icon={faBuilding} className='icon' />
          SAP America, Newtown Square, PA
        </span>
        <span className='date'>
          <FontAwesomeIcon icon={faClock} className='icon' />
          July 2018 – December 2018
        </span>
        <ul className='description'>
          <li>
            Analyzed historical data on customer incidents and created detailed reports on the
            correlation of different factors affecting the customer’s performance{' '}
          </li>
          <li>
            Implemented SAP Analysis for Office scripts to automate data collection and analysis
            functions{' '}
          </li>
          <li>
            Analyzed financial data using SAP Analysis for Office to assess the achievement of key
            performance metrics
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
