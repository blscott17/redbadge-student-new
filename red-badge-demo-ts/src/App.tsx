import React from "react";
import PropsExample from './components/PropsExample.jsx';
import PropsMappingExample from './components/PropsMapping.jsx';

function App() {
  const visitedPlaces = ['Melbourne Beach', 'Gulf Shores', 'Denver Mint', 'World Trade Center', 'Lake Michigan', 'Museum of Science and Industry']
  return (
  <div>
    <PropsExample name='Tom' business='MySpace'/>
    <PropsMappingExample visited={visitedPlaces}/>
  </div>
  ); 
}

export default App;
