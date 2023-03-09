import Content from './components/Content';
import LanguageProvider from './context/LanguageProvider';

function App() {
  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  );
}

export default App;
