import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';

const App = (props) => {
 
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path="/Dialogs" render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path="/Profile" render={() => <Profile state={props.state.profilePage} />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/News" render={() => <News />} />
          <Route path="/Settings" render={() => <Settings />} />
          {/* <Route path="/Friends" render={() => <Friends />} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
