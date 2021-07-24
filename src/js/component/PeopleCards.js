import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Home } from "../views/home";

export function Card() {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{store.people.map((item, index) => {
				return (
					<div className="card" key={index} style={{ width: "17rem" }}>
						<Link to={"/" + index}>
							<span>Link to: {item.people}</span>
						</Link>
						{/* <h1>{apiURL}</h1> */}
						<a href="https://placeholder.com">
							<img src="https://via.placeholder.com/200" className="card-img-top" alt="..." />
						</a>
						<hr className="bg-danger" />
						<div className="card-body">
							<h5 className="card-title text-justify" />
							<p className="card-text text-justify">
								Some quick example text to build on the card title and make up the bulk of the
								card&apos;s content.
							</p>
							<Link to="/single/1">
								<a href="#" className="btn btn-outline-primary float-left">
									Learn More
								</a>
							</Link>
							<a href="#" className="btn btn-outline-warning float-right">
								<i className="far fa-heart" />
							</a>
						</div>
					</div>
				);
			})}

			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
}

// return (
// 	<div className="card" style={{ width: "17rem" }}>
// 		{/* <h1>{apiURL}</h1> */}
// 		<a href="https://placeholder.com">
// 			<img src="https://via.placeholder.com/200" className="card-img-top" alt="..." />
// 		</a>
// 		<hr className="bg-danger" />
// 		<div className="card-body">
// 			<h5 className="card-title text-justify">{store.people}</h5>
// 			<p className="card-text text-justify">
// 				Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
// 			</p>
// 			<Link to="/single/1">
// 				<a href="#" className="btn btn-outline-primary float-left">
// 					Learn More
// 				</a>
// 			</Link>
// 			<a href="#" className="btn btn-outline-warning float-right">
// 				<i className="far fa-heart" />
// 			</a>
// 		</div>
// 	</div>
// );
