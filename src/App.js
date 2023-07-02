import "./App.css";
import {  useDispatch, useSelector } from "react-redux";
import {incrementNumber, decrementNumber} from "./actions"

function App() {
  const myState = useSelector((state) => state.updateMyNumber);
  const dispatch = useDispatch();

  return (
    <div className="outer-div">
      <h1>Increment / Decrement counter</h1>
      <h2>using React-Redux</h2>
      <div className="inner-div">
        <a className="btn" onClick={()=> dispatch(decrementNumber())}>
          <span className="btn-span">Dec</span>
        </a>
        <span className="counter">{myState}</span>
        <a className="btn" onClick={()=> dispatch(incrementNumber())}>
          <span className="btn-span">Inc</span>
        </a>
      </div>
    </div>
  );
}

export default App;
