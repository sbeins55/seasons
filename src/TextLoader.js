import React from "react";

const TextLoader = props => {
  return (
    <div className="ui container">
      <div className="ui active inverted dimmer">
        <div className="ui text loader">{props.loadMessage}</div>
      </div>
    </div>
  );
};

export default TextLoader;
