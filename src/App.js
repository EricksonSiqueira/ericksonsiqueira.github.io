import Header from './components/header/Header';
import Theme from './styles/theme';
import Hero from './components/hero/Hero';
import SectionDivider from './components/sectionDivider/SectionDivider';
import { Wrapper } from './AppStyle';
function App() {
  return (
    <div className="App">
      <Theme>
        <Header />
        <Wrapper>
        <Hero />
        <SectionDivider />
        </Wrapper>
      </Theme>
    </div>
  );
}

export default App;
