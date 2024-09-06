import Button from "./component/Button/Button";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold  text-xl ">Increment Value : {value}</h1>
      <div className="flex gap-3 ">
        <Button setIncrement={setValue} Increment={value} />
        <Button setIncrement={setValue} Increment={value} type="decrement" />
      </div>
    </div>
  );
}

export default App;
