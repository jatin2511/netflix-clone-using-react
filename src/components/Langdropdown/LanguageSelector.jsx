import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import './langdropdown.css'

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default language

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // You can add code here to handle language change, such as updating locale or translations.
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="language-dropdown">
        {selectedLanguage}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleLanguageChange('English')}>English</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('Spanish')}>Spanish</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('French')}>French</Dropdown.Item>
        {/* Add more Dropdown.Item for other languages */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;