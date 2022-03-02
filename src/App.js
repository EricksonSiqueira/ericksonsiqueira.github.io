import Header from './components/header/Header';
import Theme from './styles/theme';
import Hero from './components/hero/Hero';
function App() {
  return (
    <div className="App">
      <Theme>
        <Header />
        <Hero />
      </Theme>
    </div>
  );
}

export default App;
