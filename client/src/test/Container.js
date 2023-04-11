import React, { useState } from "react";
import Tag from "./Tag";
import Example from "./Example";
import Toggle from "./Toggle";

// let count = 0;

function Container() {
  let [count, setCount] = useState(0);
  const [name, setName] = useState("123");

  // let count = 0;

  const handleClick = () => {
    setCount(count + 1);
    console.log("count", count);
    setName("test name " + count);
  };

  return (
    <div>
      <h4>Container</h4>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Change</button>
      <Tag nameTag={name} key={name}></Tag>
      <Example></Example>
      <Toggle></Toggle>
    </div>
  );
}

export default Container;
