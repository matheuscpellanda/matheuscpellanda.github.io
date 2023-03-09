import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import BrazilIcon from '../components/icons/BrazilIcon';
import USAIcon from '../components/icons/USAIcon';
import LanguageContext from './LanguageContext';

const LANGUAGES = {
  'en-us': (<USAIcon />),
  'pt-br': (<BrazilIcon />),
};

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en-us');

  const selectNextLangIcon = (curr) => {
    const keys = Object.keys(LANGUAGES);
    const index = keys.indexOf(curr);
    const nextIndex = index === keys.length - 1 ? 0 : index + 1;
    const nextKey = keys[nextIndex];
    return LANGUAGES[nextKey];
  };

  const [languageIcon, setLanguageIcon] = useState(selectNextLangIcon(language));

  const setNextLanguage = useCallback(() => {
    const keys = Object.keys(LANGUAGES);
    const index = keys.indexOf(language);
    const nextIndex = index === keys.length - 1 ? 0 : index + 1;
    const nextKey = keys[nextIndex];
    setLanguage(nextKey);
    setLanguageIcon(selectNextLangIcon(nextKey));
  }, [language]);

  const contextValue = useMemo(() => ({
    language, languageIcon, setNextLanguage,
  }), [language, languageIcon, setNextLanguage]);

  return (
    <LanguageContext.Provider value={ contextValue }>
      { children }
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default LanguageProvider;
