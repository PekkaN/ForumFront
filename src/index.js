import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const FrontPage = ()=>{
    return (
        <div>
            <NavBar/>
            <Main/>
            <Aside/>
        </div>
    )
}
const NavBar = ()=> {
    return (
        <div>
            <HomeButton/>
            <MainHeader/>
            <RegisterButton/>
            <LoginButton/>
        </div>
    )
}

const Main = () => {
    return (



    )
}

const App = () => {
    return <FrontPage/>
}







ReactDOM.render(<App />, document.getElementById('root'));

