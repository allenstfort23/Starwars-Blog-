import React from "react";

export const Card = () => (
	<div className="card" style={{ width: "17rem" }}>
		<img src="..." className="card-img-top" alt="..." />
		<div className="card-body">
			<h5 className="card-title text-justify">Card title</h5>
			<p className="card-text text-justify">
				Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
			</p>
			<a href="#" className="btn btn-outline-primary float-left">
				Learn More
			</a>
			<a href="#" className="btn btn-outline-warning float-right">
				<i className="far fa-heart" />
			</a>
		</div>
	</div>
);
