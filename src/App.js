import Header from './components/Header';
import Theme from './styles/theme';
import Hero from './components/Hero';
import { Wrapper, TextSection } from './AppStyle';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Theme>
        <Header />
        <Wrapper>
          <Hero />
          <TextSection>
            <About />
            <Technologies />
            <Projects />
            <Contact />
          </TextSection>
        </Wrapper>
        <Footer />
      </Theme>
    </div>
  );
}

export default App;
