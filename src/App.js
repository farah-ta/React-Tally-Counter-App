import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css';
function App() {
    const [counter, setCounter]= useState(0);

  return (
  
    <div className="App">
     <h1>Tally Counter App</h1>
        <p className='tally'>
          {counter}
        </p>
        
        <Stack spacing={2} direction="row"  justifyContent="center"
  alignItems="center"> 
        <Button variant="outlined" sx={{
    borderRadius: 35,
    backgroundColor: "#21b6ae",
    padding: "18px 36px",
    fontSize: "18px",
}} onClick= {() => setCounter(counter+1)}>INCREASE</Button>
        <Button variant="outlined" sx={{
    borderRadius: 35,
    backgroundColor: "#21b6ae",
    padding: "18px 36px",
    fontSize: "18px",
}}  onClick= {() => setCounter(counter-1)}>DECREASE</Button>  
        </Stack>
      
    </div>
  );
}

export default App;
