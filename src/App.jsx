import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  const increasecounter = () => {
    if (counter == 20) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
  }

    const decreasecounter = () => {
      if (counter == 0) {
        setCounter(counter);
      } else {
        setCounter(counter - 1);
      }
    };

    return (
      <>
        <h1>Chai aur react</h1>
        <h1>Counter Value: {counter}</h1>

        <button onClick={increasecounter}>Increase Counter</button>

        <button onClick={decreasecounter}>Decrease Counter</button>
      </>
    );
  }

export default App;
