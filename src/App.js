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
        <button className="btn" onClick={() => changeLanguage('en')}>english</button>
        <button className="btn" onClick={() => changeLanguage('de')}>german</button>
        <button className="btn" onClick={() => changeLanguage('sp')}>spanish</button>
        <button className="btn" onClick={() => changeLanguage('fr')}>french</button>
        <p>{t('paragraph')}</p>
we have 4 {i18n.t('key', {count: Number(i18n.length)})}
      </header>
      
    </div>
  );
}

export default App;