import React, { Component } from "react";

// Step 1: Create a ClassCounter Component (Class)
export class ClassCounter extends Component {
  constructor(props) {
    super(props);
    // Step 2: Create a state property and set the count value to 0 (zero)
    this.state = {
      count: 0,
    };
  }

  // Step 3: A method to set the increment count value
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounter;
