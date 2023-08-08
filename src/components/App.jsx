import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";


function chumma(props){
  return <Entry
  
 key={props.id} name={props.name} emoji={props.emoji} meaning={props.meaning}/>
 

}


function App() {
  return(
  <>
  <h1>
    <span>emojipedia</span>
  </h1>
  
  <dl className="dictionary">
  {emojipedia.map(chumma)}
  </dl>
   <Entry/>
   
  </>)
}

export default App;
