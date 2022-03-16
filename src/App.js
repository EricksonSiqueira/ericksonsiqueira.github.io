import Header from './components/header/Header';
import Theme from './styles/theme';
import Hero from './components/hero/Hero';
import { Wrapper } from './AppStyle';
import About from './components/about/About';
function App() {
  return (
    <div className="App">
      <Theme>
        <Header />
        <Wrapper>
          <Hero />
          <About />
        </Wrapper>
      </Theme>
    </div>
  );
}

export default App;
