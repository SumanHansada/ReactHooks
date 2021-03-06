import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    console.log("Inside Component Did Mount");
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    // We can conditionally perform side effects by comparing it with previous state
    if (prevState.count !== this.state.count) {
      console.log("Inside Component Did Update", prevProps, prevState);
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(event) => this.setState({ name: event.target.value })}
          value={this.state.name}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
