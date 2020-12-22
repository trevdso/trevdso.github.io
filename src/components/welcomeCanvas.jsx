import React, { Component } from "react";

class WCanvas extends Component {
  state = {
    message: (
      <p>
        This page is currently under construction and is looking at an estimated
        date of October 20th to go live! Cheers and thank you for being patient
        :)
      </p>
    ),
    header: <h4>Welcome!</h4>,
  };

  styles = {
    marginTop: "20%",
    marginLeft: "20%",
    marginRight: "20%",
  };

  render() {
    const { message } = this.state;
    const { header } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="one-half column" style={this.styles}>
              {header}
              {message}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WCanvas;
