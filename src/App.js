import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>{t('paragraph')}</p>
        <button className="btn" onClick={() => changeLanguage('en')}>english</button>
        <button className="btn" onClick={() => changeLanguage('hn')}>hindi</button>
        <button className="btn" onClick={() => changeLanguage('sp')}>spanish</button>
        <button className="btn" onClick={() => changeLanguage('fr')}>french</button>
      </header>
    </div>
  );
}

export default App;