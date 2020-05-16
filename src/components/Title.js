import React from "react";

function Title(props) {
  return (
    <div className="component-title">
      <span className="title">{props.title}</span>
      <span className="description">{props.description}</span>
    </div>
  );
}

export default Title;
