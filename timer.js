import * as React from 'react';
import './style.css';

export default function App() {

  const [time,setTime] = React.useState(0);
  
  let onStart = () =>{
  Window.myTimer = setInterval(
    ()=>{ 
  setTime(time=>time+1);
},1000
);
  }
  const onStop = () =>{

    clearInterval(Window.myTimer)
  }

  const onReset = () =>
  {
    clearInterval(Window.myTimer)
    setTime(0);

  }

  return (
   <div>
   <h1>Timer</h1>
   <span>{Math.trunc(time/60)} min </span>

   <span>{time%60} sec</span>
   <br/>
   <button onClick={onStart}>Start</button>
   <button onClick={onStop}>Stop</button>
   <button onClick={onReset}>Reset</button>
   </div>
  );
}
