import axios from "axios";
import { Component, default as React } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";

export class singlePost extends Component {
	state = {
		post: null,
	};
	componentDidMount() {
		let id = this.props.match.params.id;
		console.log(this.props);
		// console.log(prevProps);
		// if (this.props.id && this.props.id !== prevProps.id) {
		axios
			.get("https://jsonplaceholder.typicode.com/posts/" + id)
			.then((res) => {
				console.log(res.data);
				this.setState({ post: res.data });
			});
	}

	renderPost = () => {
		if (this.state.post) {
			return (
				<Modal
					show={this.props.showModel}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					onHide={this.props.closeModelHandler}
					animation={false}
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">
							{this.state.post.title}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>{this.state.post.body}</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.props.closeModelHandler}>Close</Button>
					</Modal.Footer>
				</Modal>
			);
		} else {
			return <loader />;
		}
	};
	render() {
		console.log(this.props);
		return <>{this.renderPost} </>;
	}
}

export default withRouter(singlePost);

export function loader() {
	return (
		<Spinner animation="border" role="status">
			<span className="visually-hidden">Loading...</span>
		</Spinner>
	);
}
