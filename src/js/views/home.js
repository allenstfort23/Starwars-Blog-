import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/PeopleCards";
import { PeopleCard } from "../component/PlanetCards";

const apiURL = "https://www.swapi.tech/api/people";

export const Home = () => (
	<div className="container">
		<div className="People-Cards">
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
				<hr />
			</div>
		</div>
		<div className="Planet-Cards mt-5">
			<h1 className="text-danger">Planets</h1>
			<div className="text-center mt-5 row overflow-auto">
				<div className="col-3">
					<PeopleCard />
				</div>
				<div className="col-3">
					<PeopleCard />
				</div>
				<div className="col-3">
					<PeopleCard />
				</div>
				<div className="col-3">
					<PeopleCard />
				</div>
			</div>
		</div>
	</div>
);
