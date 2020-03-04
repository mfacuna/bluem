import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/header'
import Footer from './components/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ROUTES from './router/routes'

const App: React.FC = () => {

  return (
    <Router>
      <div>
        <Header
          tittle='VETMAP'
        />
        <Switch>
          {
            ROUTES.map((route: any, index: number) => (
              <Route exact path={route.path} key={index}>
                {route.component}
              </Route>
            ))
          }
        </Switch>
        <Footer/>
      </div>
    </Router >
  );
}

export default App;
