import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const Header = (props) => {
	console.log(props);
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="#home">React Blog</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav
						activeKey="/home"
						onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
					>
						<Nav.Item>
							<Link
								to={{
									hash: "star",
									pathname: "home",
									search: "?age=20",
								}}
								className="nav-link"
							>
								Home
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link to="/blog" className="nav-link">
								Blog
							</Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

// export default Header;
export default withRouter(Header);
