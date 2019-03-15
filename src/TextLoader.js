import React from "react";

const TextLoader = props => {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui big text loader">{props.loadMessage}</div>
    </div>
  );
};

TextLoader.defaultProps = {
    loadMessage: 'Loading...'
};

export default TextLoader;
