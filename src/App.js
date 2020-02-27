import React from 'react';
import './App.css';
import FrontPage from "./FrontPage";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AllThreadsPage from "./AllThreadsPage";
import {Route, Switch} from 'react-router-dom';
import SingleThreadPage from "./SingleThreadPage";
import ErrorPage from "./ErrorPage";


const App = () => {

  return (
      <React.Fragment>
          <Navbar/>
          <div className="PageLayout">
              <Sidebar className="SideBar"/>
              <Switch>
                  <Route exact path="/" component={FrontPage}/>
                  <Route path="/threads" component={AllThreadsPage}/>
                  <Route path="/thread" component={SingleThreadPage}/>
                  <Route component={ErrorPage}/>
              </Switch>
          </div>
      </React.Fragment>

  )
}

export default App;
