import React, {useState} from 'react';
import "./App.css"
import Nav1 from './components/Tasks/Nav1';
import Nav2 from './components/Tasks/Nav2';
import Nav3 from './components/Tasks/Nav3';
import Nav4 from './components/Tasks/Nav4';
import Nav5 from './components/Tasks/Nav5';
import Nav6 from './components/Tasks/Nav6';
// import Apicallconsole from './components/Class/Apicallconsole';
// import Apicallweb from './components/Class/Apicallweb';
// import Card from './components/Class/Card';
 import Apicall from './components/Tasks/Apicall';
// import Lifecycle from './components/Class/Lifecycle';
import Lifecycles from './components/Class/LifeCycles';
import Home from './components/Tasks/Home'
import About from './components/Tasks/About';
import Formone from './components/Class/Formone';
import FormTwo from './components/Class/FormTwo';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Cardbtsp from './components/Tasks/Cardbtsp';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Website from './components/Tasks/website';
import Card from './components/Tasks/Card';


function App (){
  // return function must have one HTML Tag only
  // We can use div, empty tag, react fragment tag

   const [hide, sethide] = useState(true)
   const lead = () => {
      sethide(false)
   }

  return (
    <BrowserRouter>
       {/* <h1> React Navbar </h1>
      <Nav1 />
      <Nav2 />
      <Nav3 />
      <Nav4 />
      <Nav5 />
      <Nav6 />
      <br/>  */}

      {/* <Apicallconsole />
      <Apicallweb /> */}

      {/* <Apicall /> */}

      {/* // Conditional Rendering
       {hide ? <Lifecycle /> : <h2>Closed</h2>}
      <button onClick={lead}>Click Me</button> */}

      {/* <Lifecycles /> */}
      {/* < Home />
      <About />

     <BrowserRouter>

      <Routes>
        <Route path='/' element='Home.jsx'></Route>
        <Route path='Apicall' element='./components/Task/Apicall.jsx'></Route> 
        <Route path='About' element='About.jsx'></Route>


      </Routes>

     </BrowserRouter> */}
      

      {/* <Formone />
      <FormTwo /> */}


      {/* <Cardbtsp /> */}

      {/* <nav>

           <Link to="/">Home</Link>

           <Link to="/formone">Form 1</Link>

           <Link to="/formtwo"> Form 2</Link>

      </nav>

      <Routes>

          <Route path="/" element={<Apicall /> }/>        {/* / - Represents Home page 

          <Route path="/formone" element={<Formone />}/>

          <Route path="/formtwo" element={<FormTwo />}/>

      </Routes> */}
      
      <Website />

    </BrowserRouter>
  )
}

export default App 