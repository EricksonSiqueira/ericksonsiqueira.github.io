import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/portfolio" component={ Portfolio } />
      <Route exact path="/skills" component={ Skills } />
    </Switch>
  );
}

export default App;
