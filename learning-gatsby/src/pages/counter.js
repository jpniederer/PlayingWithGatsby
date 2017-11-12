import React, { Component } from "react"

export default class Counter extends Component {
  state = {
    count: 0
  }

  addOne() {
    this.setState({ count: this.state.count + 1 })
  }

  minusOne() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Counter</h1>
        <p>Current count is: {count}</p>
        <button onClick={() => this.addOne()}>plus</button>
        <button onClick={() => this.minusOne()}>minus</button>
      </div>
    )
  }
}