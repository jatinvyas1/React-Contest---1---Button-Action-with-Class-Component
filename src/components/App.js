import React, { Component, useState } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showParagraph: false
    };
    this._showPara = this._showPara.bind(this);
  }
  _showPara() {
    this.setState({
      showParagraph: true
    });
  }

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={this._showPara}></button>
        {this.state.showParagraph ? 
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
         : null}
      </div>
    );
  }
}

export default App;
