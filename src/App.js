import { useState } from 'react'; 
import { Buttoni } from './Components/Button.js'; 
import { Buttonv } from './Components/Button.js'; 
import { Box } from './Components/Box'; 
import { Video } from './Components/video'

import { Container, Row, Col } from 'react-bootstrap';
import './App.css'
function App() { 
  
  const [components, setComponents] = useState([""]); 
  
  function addComponent() { 
    
    setComponents([...components, ""]) 
    
  } 
  const [video, setvideo] = useState([""]); 
  
  function addComponentv() { 
    
    setvideo([...video, ""]) 
    
  } 
  
  return ( 
    
    <Container>
    
    <nav>Video Editor </nav>
    <div className="main_box">
    
      {components.map(() => ( <Box /> ))} 
      <Buttoni onClick={addComponent} text="Add More Image"/> 
      </div>

      <div className="main_box">
    
    {video.map(() => ( <Video /> ))} 
    <Buttonv onClick={addComponentv} text="Add More Video"/> 
    </div>
      </Container>
    
  ) 
  
} 

export default App;