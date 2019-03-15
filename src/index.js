import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import TextLoader from "./TextLoader";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Only place state is manually set
    this.state = {
      lat: null,
      long: null,
      error: ""
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // Need to use setState to set props on state
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      },
      err => this.setState({ error: err.message })
    );
  }

  // Define render that returns JSX
  render() {
    if (!!this.state.lat && !!this.state.long) {
      return (
          <SeasonDisplay latitude={this.state.lat} longitude={this.state.long}/>
      );
    }

    if (!!this.state.error) {
      return (
          <div className="ui container">
            <div>Error: {this.state.error}</div>
          </div>
      );
    }

    return (
        <TextLoader loadMessage="Loading"/>
    );
  }

}

ReactDOM.render(<App />, document.querySelector("#root"));
