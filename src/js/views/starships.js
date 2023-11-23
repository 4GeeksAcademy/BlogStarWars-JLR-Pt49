import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import imgShip from "../../img/naves.png"

export const Starships = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const starship = store.starships.results[params.theid];

	return (
		<>
		{starship ? (
				<>
			<div className="container">
  			<div className="row ">
    			<div className="col-md-6">
					<img src={imgShip}/>
   			 	</div>

    			<div className="col-md-6">
					<h1 className="display-4">{starship.name}</h1>
					<p>Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. Star Wars is one of the highest-grossing media franchises of all time.

					The original 1977 film, retroactively subtitled Episode IV: A New Hope, was followed by the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy. Lucas later returned to the series to write and direct a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. This led to a sequel trilogy, consisting of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).

					All nine films, collectively referred to as the "Skywalker Saga", were nominated for Academy Awards, with wins going to the first two releases. Together with the theatrical live action "anthology" films Rogue One (2016) and Solo (2018), the combined box office revenue of the films equated to over US$10 billion, making Star Wars the third-highest-grossing film franchise of all time.</p>
    			</div>

  			</div>
			</div>

			<div className="container border-top">
		<div className="row mt-3" style={{color: "rgb(159, 14, 14)"}}>

    <div className="col-lg-2 col-md-12">
	<p>Name:</p>
	<p>{starship.name}</p>
    </div>

    <div className="col-lg-2 col-md-6">
	<p>Model:</p>
	<p>{starship.model}</p>
    </div>

    <div className="col-lg-2 col-md-6">
	<p>Manufacturer:</p>
	<p>{starship.manufacturer}</p>
    </div>

    <div className="col-lg-2 col-md-6">
	<p>Hyperdrive rating:</p>
	<p>{starship.hyperdrive_rating}</p>
    </div>

    <div className="col-lg-2 col-md-6">
	<p>Cost in credits:</p>
	<p>{starship.cost_in_credits}</p>
    </div>

	<div className="col-lg-2 col-md-6">
	<p>Passengers:</p>
	<p>{starship.passengers}</p>
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

Starships.propTypes = {
	match: PropTypes.object
};