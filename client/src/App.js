import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/contact" component={Contact} />
					<Route path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
