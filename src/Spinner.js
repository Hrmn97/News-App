import React, { Component } from "react";
import Loading from "./Loading.gif";

export class spinner extends Component {
  render() {
    return (
      <div className="tex-center ">
        <img src={Loading} alt="loading" />
      </div>
    );
  }
}

export default spinner;
