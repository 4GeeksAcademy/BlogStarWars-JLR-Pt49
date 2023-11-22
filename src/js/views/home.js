import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import imagenSW from "../../img/imagenSW.jpg";

export const Home = () => {
	
	const {store, actions} = useContext(Context)
	useEffect(() => {
		actions.loadSomeData();
	  }, []);

	const getPlanetfromApi = () => {
		actions.getAPlanet()
	}
	

	return (
	<>

	<h1>Characters</h1>
    {store.characters.results && store.characters.results.map((character, index) => (
        <div className="card" style={{width: "18rem"}}>
		<img src={imagenSW} className="card-img-top" alt="..."/>
		<div className="card-body">
		<h5 className="card-title">{character.name}</h5>
		  <p className="card-text">Genero: {character.gender}</p>
		  <p className="card-text">Hair Color: {character.hair_color}</p>
		  <p className="card-text">Eye Color: {character.eye_color}</p>
		  <a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		  </div>
	  
    ))}
	<button onClick={() => getPlanetfromApi()}>VVVVV</button>
	</>
)
};
