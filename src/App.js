
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import PageDetails from "./Pages/PageDetails";

import './Assets/scss/style.scss';

function App() {
	return (
		<div className='App'>
			<Router>
				<Route exact path='/' component={LandingPage} />
				<Route exact path='/maps' component={LandingPage} />
				<Route exact path='/properties/:id' component={PageDetails}></Route>
			</Router>
		</div>
	);
}

export default App;
