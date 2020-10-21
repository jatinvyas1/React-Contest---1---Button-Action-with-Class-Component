import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			showPara:false,
		};
		this._showPara = this._showPara.bind(this);
	};
	_showPara(){
		this.setState({
			showPara:true,
		});
	}

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<button id="click" onClick={this._showPara()}></button>
				{this.state.showPara?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:null}
    		</div>
    	);
    }
}


export default App;

