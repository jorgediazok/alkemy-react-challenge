//Routing
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
// import PageNotFound from './pages/PageNotFound';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        {/* <Route path="*" component={PageNotFound} /> */}
      </Switch>
    </Router>
  );
}

export default App;
