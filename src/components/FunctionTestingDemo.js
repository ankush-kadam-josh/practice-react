import * as React from "react";
import NUMBER_METHODS from "./helper";

const FunctionTestingDemo = () => {
  const [n1, setN1] = React.useState(0);
  const [n2, setN2] = React.useState(0);

  const [result, setResult] = React.useState("");

  const handleSum = () => {
    setResult(NUMBER_METHODS.sum(n1, n2));
  };
  const handleDiff = () => {
    setResult(NUMBER_METHODS.diff(n1, n2));
  };
  const handleMulti = () => {
    setResult(NUMBER_METHODS.multi(n1, n2));
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={n1}
          onChange={(e) => setN1(e.target.value ? parseInt(e.target.value) : 0)}
          placeholder="First Number"
        />
      </div>
      <div>
        <input
          type="number"
          value={n2}
          onChange={(e) => setN2(e.target.value ? parseInt(e.target.value) : 0)}
          placeholder="Second Number"
        />
      </div>

      <div>
        <button onClick={handleSum}>Sum</button>
        <button onClick={handleDiff}>Diff</button>
        <button onClick={handleMulti}>Multi</button>
      </div>

      {/* show result here */}
      <div>
        <h3>{result}</h3>
      </div>
    </div>
  );
};

export default FunctionTestingDemo;
