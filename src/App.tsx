import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented } from "./features/counter/counterSlice";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(incremented());
  };

  return (
    <div className="App">
      <div className="card">
        <button onClick={onClick}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
