import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import TextLoader from "./TextLoader";

class App extends React.Component {
  state = {
    lat: null,
    error: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => this.setState({ error: err.message })
    );
  }

  // Define render that returns JSX
  render() {
    if (!!this.state.lat) {
      return <SeasonDisplay latitude={this.state.lat} />;
    }

    if (!!this.state.error) {
      return <div>Error: {this.state.error}</div>;
    }

    return <TextLoader loadMessage="Loading" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
