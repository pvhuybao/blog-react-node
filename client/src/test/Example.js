import React, { useEffect, useState } from "react";

function Example() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    setCount1(count1 + 1);
    setCount1(count1 + 1);
    setCount1(count1 + 1);
  }, []);

  useEffect(() => {
    setCount2((prev) => prev + 1);
    setCount2((prev) => prev + 1);
    setCount2((prev) => prev + 1);
  }, []);

  return (
    <div>
      Both count1 and count2 have had 3 increments.
      <br />
      count1 stays at 1 because the count1 variable in the useEffect isn't
      change due to the closure in the arrow function in the useEffect
      <br />
      Current count1: {count1}
      <br />
      Current count2: {count2}
    </div>
  );
}

export default Example;
