import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import imgCharacters from "../../img/characters.webp"

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const character = store.characters.results[params.theid];

	return (
		<>
			{character ? (
				<>
			<div class="container">
  			<div class="row ">
    			<div class="col-md-6">
					<img src={imgCharacters}/>
   			 	</div>

    			<div class="col-md-6">
					<h1 className="display-4">{character.name}</h1>
					<p></p>

  			</div>
			</div>
					<div>
					<p>Gender: {character.gender}</p>
					<p>Hair Color: {character.hair_color}</p>
					<p>Eye Color: {character.eye_color}</p>
				</div>
				</>
			) : (
				<p>Cargando...</p>
			)}
		</>
	);
};

Characters.propTypes = {
	match: PropTypes.object
};


