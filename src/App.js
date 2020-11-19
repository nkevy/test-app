import React from 'react';
import logo from './logo.svg';
import { Display } from './features/Display';
import './App.css';

function App() {
  return (
	  <div className="App">
	  	<header className="App-header">
	  		<img src={logo} className="App-logo" alt="logo" />
	  		<React.Fragment>
	  			<Display />
	  		</React.Fragment>
	  	</header>
	  </div>
  );
}

export default App;
