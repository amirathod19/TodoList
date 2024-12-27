import { useState } from "react";

export const Increment = () => {
  const [numValue, setNumValue] = useState(0);

  return (
    <>
      <div>
        <input
          type="number"
          id="num"
          value={numValue}
          onChange={(e) => setNumValue(e.target.value)}
          placeholder="Enter number"
        />
        <div>
          <button id="inc" onClick={() => setNumValue(parseInt(numValue) + 1)}>
            {" "}
            +{" "}
          </button>

          <button id="dec" onClick={() => setNumValue(parseInt(numValue) - 1)}>
            -
          </button>
        </div>
      </div>
    </>
  );
};
// export default Increment;
