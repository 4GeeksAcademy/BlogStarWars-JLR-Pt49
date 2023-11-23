import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const planet = store.planets.results[params.theid];

	return (
		<>
			{planet ? (
				<div>
					<h1 className="display-4">Detalles del Personaje: {planet.name}</h1>
					<p>Population: {planet.population}</p>
					<p>Hair Color: Rotation Period: {planet.rotation_period}</p>
					<p>Eye Color: Climate: {planet.climate}</p>
					<Link to="/">
						<span className="btn btn-primary btn-lg" role="button">
							Back home
						</span>
					</Link>
				</div>
			) : (
				<p>Cargando...</p>
			)}
		</>
	);
};

Planets.propTypes = {
	match: PropTypes.object
};