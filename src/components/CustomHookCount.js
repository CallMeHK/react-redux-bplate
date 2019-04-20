import React from "react";
import useCount from "../hooks/useCount"

const CustomHookCount = () => {
    const [ count, increase ] = useCount();

  return (
    <div>
      <h3>CustomHookCount: {count}</h3>
      <button onClick={increase}>increaseCount</button>
    </div>
  );
};

export default CustomHookCount;
