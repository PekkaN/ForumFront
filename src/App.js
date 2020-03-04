import React from 'react';
import './App.css';
import FrontPage from "./Sites/FrontPage";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import AllThreadsPage from "./Sites/AllThreadsPage";
import {Route, Switch} from 'react-router-dom';
import SingleThreadPage from "./Sites/SingleThreadPage";
import ErrorPage from "./ErrorPage";


const App = () => {

  return (
      <React.Fragment>
          <Navbar/>
          <div className="PageLayout">
              <Sidebar className="SideBar"/>
              <Switch>
                  <Route exact path="/" component={FrontPage}/>
                  <Route path="/threads/:id" component={AllThreadsPage}/>
                  <Route path="/thread/:id" component={SingleThreadPage}/>
                  <Route component={ErrorPage}/>
              </Switch>
          </div>
      </React.Fragment>

  )
}

export default App;
