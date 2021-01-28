import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Navbar from './components/Navbar';
import User from './pages/user';
import Users from './pages/users';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:userId" component={User} />
          {/* <Route path="*" component={MyCustom404Page} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

// HashRouter
// BrowserRouter
