import axios from "axios";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Loader from "../layout/loader";
import Post from "./post";
import SinglePost from "./singlePost";

export class posts extends Component {
	state = {
		posts: [],
		showModel: false,
		currentId: null,
	};
	componentDidMount() {
		console.log(this.state.posts);

		if (this.state.posts.length === 0)
			axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
				this.setState({ posts: res.data });
			});
	}

	renderPosts = () => {
		if (this.state.posts.length > 0) {
			return this.state.posts.map((post) => {
				return (
					<Col md={6} lg={4} key={post.id}>
						<Post post={post} openModel={this.openModel} />
					</Col>
				);
			});
		} else {
			return <Loader />;
		}
	};

	openModel = (id) => {
		// this.showModelHandler();
		// this.setState({ currentId: id });
		// move to post page
		console.log(this.props);
		this.props.history.push(`/blog/${id}`);
	};

	closeModelHandler = () => {
		this.setState({ showModel: false });
	};
	showModelHandler = () => {
		this.setState({ showModel: true });
	};
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<h2 className="h3 text-primary border-bottom pb-3 mb-4">
							Latest Posts
						</h2>
					</Col>
				</Row>

				<Row>{this.renderPosts()}</Row>
				<SinglePost
					showModel={this.state.showModel}
					closeModelHandler={this.closeModelHandler}
					id={this.state.currentId}
				/>
			</Container>
		);
	}
}

export default withRouter(posts);
