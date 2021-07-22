import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 sticky-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<a href="https://www.freepnglogos.com/pics/star-wars-logo" title="Image from freepnglogos.com">
						<img
							src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png"
							width="100"
							alt="star wars logo"
						/>
					</a>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button
						className="btn btn-primary btn-lg dropdown-toggle"
						type="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorties
					</button>
				</Link>
			</div>
		</nav>
	);
};
