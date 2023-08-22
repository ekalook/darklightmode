import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => JSON.parse(localStorage.getItem('darkMode')) || false
  );


  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
