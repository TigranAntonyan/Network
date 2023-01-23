import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Dialogs from './Components/Dialogs/Dialogs';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
          <Route path='/profile' element={<Profile posts={props.state.profilePage.posts} addPost={props.addPost}/> }></Route>
          <Route path='/dialogs' element={<Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages}/> }></Route>
          <Route path='/news' element={<News /> }></Route>
          <Route path='/music' element={<Music /> }></Route>
          <Route path='/settings' element={<Settings /> }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;