import React from "react";
import { Button, Card } from "react-bootstrap";
import defaultImg from "../../assets/images/default.jpg";

const post = (props) => {
	return (
		<Card style={{ width: "18rem" }} className="mb-4">
			<Card.Img variant="top" src={defaultImg} />
			<Card.Body>
				<Card.Title> {props.post.title}</Card.Title>
				<Card.Text>{props.post.body}</Card.Text>
				<Button
					variant="primary"
					onClick={() => props.openModel(props.post.id)}
				>
					open Post
				</Button>
			</Card.Body>
		</Card>
	);
};

export default post;
