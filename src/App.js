//Routing
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Hero from './pages/Hero';
import PageNotFound from './pages/PageNotFound';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Hero} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;

//<Route path="/auth" exact  component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
