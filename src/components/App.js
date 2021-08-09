import React from "react";
import Home from './Home'
import Work from "./Work";
import Contact from "./Contact";
import Technologies  from './Technologies'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../media/styles.css'

function App(){
  return(
    <>
      <Home/>
      <Work />
      <Technologies/>
      <Contact/>
    </>
)}

export default  App;