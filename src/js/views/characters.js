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
					<p>Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. Star Wars is one of the highest-grossing media franchises of all time.

					The original 1977 film, retroactively subtitled Episode IV: A New Hope, was followed by the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy. Lucas later returned to the series to write and direct a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. This led to a sequel trilogy, consisting of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).

					All nine films, collectively referred to as the "Skywalker Saga", were nominated for Academy Awards, with wins going to the first two releases. Together with the theatrical live action "anthology" films Rogue One (2016) and Solo (2018), the combined box office revenue of the films equated to over US$10 billion, making Star Wars the third-highest-grossing film franchise of all time.</p>
    			</div>

  			</div>
			</div>

			<div class="container">
  <div class="row ">

    <div class="col-lg-2 col-md-12">
	<p>Name:</p>
	<p>{character.name}</p>
    </div>

    <div class="col-lg-2 col-md-6">
	<p>Birth year:</p>
	<p>{character.birth_year}</p>
    </div>

    <div class="col-lg-2 col-md-6">
	<p>Gender:</p>
	<p>{character.gender}</p>
    </div>

    <div class="col-lg-2 col-md-6">
	<p>Heigth</p>
	<p>{character.height}</p>
    </div>

    <div class="col-lg-2 col-md-6">
	<p>Skin Color:</p>
	<p>{character.skin_color}</p>
    </div>

	<div class="col-lg-2 col-md-6">
	<p>Eye Color:</p>
	<p>{character.eye_color}</p>
    </div>

  </div>
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



