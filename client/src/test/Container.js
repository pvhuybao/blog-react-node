import React, { useState } from "react";
import Tag from "./Tag";
import Example from "./Example";

// let count = 0;

function Container() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("123");

  // let count = 0;

  const handleClick = () => {
    setCount(count + 1);
    setName("test name" + count);
  };

  return (
    <div>
      <h4>Container</h4>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Change</button>
      <Tag nameTag={name}></Tag>
      <Example></Example>
    </div>
  );
}

export default Container;
