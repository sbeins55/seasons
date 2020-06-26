import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import TextLoader from "./TextLoader";
import useLocation from "./useLocation";

const App = () => {

    const [lat, error] = useLocation();

	let content;
	if (error) {
	  content = <div>Error: {error}</div>;
    } else if (lat) {
	  content = <SeasonDisplay latitude={lat}/>;
    } else {
      content = <TextLoader loadMessage="Please Allow Location Services"/>;
    }

	return content;
};

ReactDOM.render(<App/>, document.querySelector("#root"));
