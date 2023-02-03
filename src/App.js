import React from 'react';
import './App.css';

import{
  BrowserRouter as Router,
  Route,
  Switch,  
  Link, 
} from "react-router-dom";
import Home from './components/Home'
import MyButton from './components/MyButton'
import freeBitcoin from './components/freeBitcoin'


class App extends React.Component{
	render(){
		return(
		  <div className="App">
			  <Router>
				  <nav>
					  <ul>
						  <li><Link to="/">Home</Link></li>
						  <li><Link to="freeBitcoin">Free Bitcoin</Link></li>
					  </ul>
				  </nav>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/freeBitcoin" component={freeBitcoin} />
				</Switch>
			  </Router>
			  <MyButton/>
			  
		  
		  </div>
		  );
	}
}

export default App;
