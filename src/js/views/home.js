import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/Card";

export const Home = () => (
	<div className="container">
		<h1 className="text-danger">Characters</h1>
		<div className="text-center mt-5 row overflow-auto">
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
			<div className="col-3">
				<Card />
			</div>
		</div>
	</div>
);
