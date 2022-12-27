
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useState } from 'react';
import Business from './components/Business';
import Entertainment from './components/Entertainment';
import Technology from './components/Technology';
import Sports from './components/Sports';
import Science from './components/Science';
import Health from './components/Health';
import Home from './components/Home';
const App=()=>{
  // constructor(){
  //   super();
  //   this.state = {progress: 0, link:"active"} 
  // }
  const [progress, setprogress] = useState(0)
  const [link, setlink] = useState("active")
const  setProgress=(progress)=>{
//  this.setState({progress : progress})    
setprogress(progress)
  }
  
                     
  // render() {
    return (
      <Router>
  <div>
  
  <LoadingBar color='#f11946'
        progress={progress}
        height={3} />
  {/* <Navbar link={link} progress={setProgress}/> */}


<Routes>
  <Route exact path="/" element={<Home nav="active" progress={setProgress} key="home" pageSize={18} country={"in"} category="general" />}/>               
  <Route exact path="/Top-headlines" element={<News nav1="active" progress={setProgress}  key="top-headlines" pageSize={18} country={"in"} category="general" />}/>               
  <Route exact path="/All-News" element={<News nav2="active" progress={setProgress}  key="top-headlines" pageSize={18} country={"in"} category="general" />}/>               
  <Route exact path="/business" element={<Business nav3="active" progress={setProgress} key="business" pageSize={18} country={"in"} category="business" />}/>
  <Route exact path="/entertainment" element={<Entertainment nav4="active" progress={setProgress} key="entertainment" pageSize={18} country={"in"} category="entertainment" />}/>

  <Route exact path="/health" element={<Health nav6="active" progress={setProgress} key="health" pageSize={18} country={"in"} category="health" />}/>
  <Route exact path="/science" element={<Science nav7="active" progress={setProgress} key="science" pageSize={18} country={"in"} category="science" />}/>
  <Route exact path="/sports" element={<Sports nav8="active" progress={setProgress} key="k" pageSize={18} country={"in"} category="sports" />}/>
  <Route exact path="/technology" element={<Technology nav9="active" progress={setProgress} key="s" pageSize={18} country={"in"} category="technology" />}/>
 

  </Routes>       
        
        </div>
</Router>
      
      
    )
  }
// }
export default App;
