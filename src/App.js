import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import {originals,action,comedy,horror} from './components/urls'


import RowPost from './components/RowPost/RowPost.jsx';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="NetFlix Originals"/>
      <RowPost url={action} title ="Action" isSmall/>
      <RowPost url={comedy} title ="Comedy" isSmall/>
      <RowPost url={horror} title ="Horror" isSmall/>
      
    </div>
  );
}

export default App;
