import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import store from "./redux/State";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path="/Dialogs"
                       render={() => <Dialogs store={props.store} />}/>
                <Route path="/Profile"
                       render={() => <Profile profilePage={props.state.profilePage}
                                              dispatch={props.dispatch}
                       />}/>
                <Route path="/Music" render={() => <Music/>}/>
                <Route path="/News" render={() => <News/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
