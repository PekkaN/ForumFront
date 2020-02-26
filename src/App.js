import React from 'react';
import './App.css';
import FrontPage from "./FrontPage";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AllThreadsPage from "./AllThreadsPage";


const App = () => {

  return (
      <div className="FrontPage">
          <Navbar/>
          <FrontPage/>
          <Sidebar/>
      </div>
  )
}

export default App;
