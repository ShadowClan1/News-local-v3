
import React from 'react'
import {Link} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'

const Navbar=(props)=>{
 
 
  const [progress, setprogress] = useState(0)
    
    const clcky = ()=>{
      setTimeout(setprogress(10) ,100)
      setTimeout(setprogress(15) ,100)
      setTimeout(setprogress(20) ,100)
      setTimeout(setprogress(25) ,100)
      setTimeout(setprogress(30) ,100)
      setTimeout(setprogress(35) ,100)
      setTimeout(setprogress(40) ,100)
      setTimeout(setprogress(45) ,100)
      setTimeout(setprogress(50) ,100)
      setTimeout(setprogress(55) ,100)
      setTimeout(setprogress(60) ,100)
      setTimeout(setprogress(65) ,100)
      setTimeout(setprogress(70) ,100)    
      setTimeout(setprogress(75) ,100)
      setTimeout(setprogress(80) ,100)
      setTimeout(setprogress(85) ,100)
      setTimeout(setprogress(90) ,100)
      setTimeout(setprogress(95) ,100)
      setTimeout(setprogress(100) ,100)
    }
    setTimeout(clcky,100)
   
    return (
      

      <div>
         <LoadingBar color='#f11946'
        progress={progress}
        height={3} />
        <nav className="navbar navbar-dark navbar navbar-dark fixed-top bg-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">  
    <Link className="navbar-brand"onClick={clcky} key="1" to="/"><img src="./logo.png" width={25} height={28} alt="" className="d-inline-block align-text-top" /> News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${props.linkk} `} aria-current="page"onClick={clcky} key="1" to="/" >Home</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${props.linkk1} `} aria-current="page"onClick={clcky} key="2" to="/top-headlines">Top Headlines</Link>
        
        </li>
        <li className="nav-item">
         
        </li>
       
      
        
         <li className="nav-item">
          <Link className={`nav-link ${props.linkk3}`} aria-current="page"onClick={clcky} key="3" to="/business">Business</Link></li>
         <li className="nav-item">
          <Link className={`nav-link ${props.linkk4}`} aria-current="page"onClick={clcky} key="4" to="/entertainment">Entertainment </Link></li>
       
         <li className="nav-item">
          <Link className={`nav-link ${props.linkk6}`} aria-current="page"onClick={clcky} key="5" to="/health">Health</Link></li>
         <li className="nav-item">
          <Link className={`nav-link ${props.linkk7}`} aria-current="page"onClick={clcky} key="6" to="/science">Science</Link></li>
         <li className="nav-item">
          <Link className={`nav-link ${props.linkk8}`} aria-current="page"onClick={clcky} key="7" to="/sports">Sports</Link></li>
         <li className="nav-item">
          <Link className={`nav-link ${props.linkk9}`} aria-current="page"onClick={clcky} key="8" to="/technology">Technology</Link></li>

      </ul>
     
    </div>
  </div>
</nav>
      </div>
      
          
    )
  }


export default Navbar