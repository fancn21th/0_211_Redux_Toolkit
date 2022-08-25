import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { amountAdded } from "./features/counter/counterSlice";
import { useFetchBreedsQuery } from "./features/dogs/dogsSlice";
// import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numberOfDogs, setNumberOfDogs] = useState(10);

  const { data = [], isFetching } = useFetchBreedsQuery(numberOfDogs);

  const onClick = () => {
    // dispatch(incremented());
    dispatch(amountAdded(3));
  };

  const onChange = (e) => {
    setNumberOfDogs(Number(e.target.value));
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
        <select value={numberOfDogs} onChange={onChange}>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        <div>
          Number of dogs fetched: {data.length}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.id}</td>
                  <td>
                    <img src={breed.image.url} alt="" height={250} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </p>
    </div>
  );
}

export default App;
