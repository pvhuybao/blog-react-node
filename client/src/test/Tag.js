import React from "react";

function Tag(props) {
  return (
    <div style={{ paddingLeft: "4rem", background: "lightblue" }}>
      <h4>Tag</h4>
      <div>count: {props.nameTag}</div>
    </div>
  );
}

export default Tag;
