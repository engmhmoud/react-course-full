import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import singlePost from "./components/blog/singlePost";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Blog from "./views/blog";
import Home from "./views/home";
class App extends React.Component {
	render() {
		console.log(this.props);

		return (
			<BrowserRouter>
				<Header />
				<Route path="/blog" exact component={Blog} />
				<Route path="/blog/:id" exact component={singlePost} />
				<Route path="/" exact component={Home} />
				<Route path="/home" exact component={Home} />

				<Footer />
			</BrowserRouter>
		);
	}
}

export default App;
