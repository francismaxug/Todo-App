import './App.css';
import GetList from './components/GetList';
import Heading from './components/Heading';
import Mainpage from './components/Mainpage';
import { useState } from 'react';
function App() {
  // const message = [{
  //   title : "One",
  //   id : 1
  // }]

  const [takeMessage, setTakeMessage] = useState([])
const perform =(prev)=>{
setTakeMessage((previous)=>{
  return [...previous, prev]
})
}
  return (
    <div className="App">
     <Heading/>
      <Mainpage onLasttkeForm = {perform}/>
      <GetList retrieve={takeMessage} takeMessage={takeMessage
      } setTakeMessage={setTakeMessage}/>
    </div>
  );
}
export default App;
