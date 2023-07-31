import React, {useState} from 'react';
import './App.css';
import Pages from './Views/Pages';
import MyContext from './Context'

function App() {
  
  const [username, setUsername] = useState("")


  return (
    // <MyContext.Provider value={{username, setUsername}}>
      <div>
        <Pages />
      </div>
    // </MyContext.Provider>
   
  );
}

export default App;
