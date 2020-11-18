import logo from './logo.svg';
import { react } from 'react';
import './App.css';
import sendPost from './api/hook';

const data = sendPost('http://localhost:8080/recentword');
const display extends react

function App() {
  return (
	  <div className="App">
	  <header className="App-header">
	  	<img src={logo} className="App-logo" alt="logo" />
	  	<p>
	  		Test react app for api calls
	  	</p>
	  </header>
	  <body>
	  </body>
	  </div>
  );
}

export default App;
