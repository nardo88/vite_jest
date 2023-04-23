import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const clickhandler = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <button onClick={clickhandler}>{`count is: ${count}`}</button>
      {count > 0 && <div>{`The count is now: ${count}`}</div>}
    </div>
  );
}

export default App;
