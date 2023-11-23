import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Starships = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const starship = store.starships.results[params.theid];

	return (
		<>
			{starship ? (
				<div>
					<h1 className="display-4">Detalles del Personaje: {starship.name}</h1>
					<p>Population: {starship.passengers}</p>
					<p>Hair Color: {starship.crew}</p>
					<p>Eye Color: Climate: {starship.cargo_capacity}</p>
					<Link to="/">
					</Link>
				</div>
			
				


			) : (
				<p>Cargando...</p>
				
				


				
			)}
		</>
	);
};

Starships.propTypes = {
	match: PropTypes.object
};