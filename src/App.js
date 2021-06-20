//Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Auth from './pages/Auth';
import Hero from './pages/Hero';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/:id" component={Hero} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;

//<Route path="/auth" exact  component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
