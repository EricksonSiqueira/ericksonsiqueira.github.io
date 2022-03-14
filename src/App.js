import Header from './components/header/Header';
import Theme from './styles/theme';
import Hero from './components/hero/Hero';
import SectionDivider from './components/sectionDivider/SectionDivider';
function App() {
  return (
    <div className="App">
      <Theme>
        <Header />
        <Hero />
        <SectionDivider />
      </Theme>
    </div>
  );
}

export default App;
