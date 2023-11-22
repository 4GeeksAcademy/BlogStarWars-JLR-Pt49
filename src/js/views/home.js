import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import imagenSW from "../../img/imagenSW.jpg";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getACharacter();
		actions.getPlanets();
		actions.getStarships();
    }, []);

    const indexToShowCharacters = [0, 1, 2, 3, 4, 9];
	const indexToShowPlanets = [0, 1, 2, 3, 7, 8];
	const indexToShowStarships = [3, 1, 6, 5, 7, 9];


    return (
        <>
 <h1>Characters</h1>
<div className="card-container" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
    {store.characters && store.characters.results &&
        store.characters.results.length > 0 &&
        indexToShowCharacters.map((index) => {
            const character = store.characters.results[index];
            return (
                <div key={index} className="card" style={{ width: "18rem", margin: "0 10px", display: "inline-block" }}>
                    <img src={imagenSW} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">Gender: {character.gender}</p>
                        <p className="card-text">Hair Color: {character.hair_color}</p>
                        <p className="card-text">Eye Color: {character.eye_color}</p>
                        <a href="#" className="btn btn-primary">
                            Learn More!
                        </a>
                    </div>
                </div>
            );
        })}
</div>

<h1>Planets</h1>
<div className="card-container" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
    {store.planets && store.planets.results &&
        store.planets.results.length > 0 &&
        indexToShowPlanets.map((index) => {
            const planet = store.planets.results[index];
            return (
                <div key={index} className="card" style={{ width: "18rem", margin: "0 10px", display: "inline-block" }}>
                    <img src={imagenSW} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <p className="card-text">Population: {planet.population}</p>
                        <p className="card-text">Rotation Period: {planet.rotation_period} Hrs</p>
                        <p className="card-text">Climate: {planet.climate}</p>
                        <a href="#" className="btn btn-primary">
                            Learn More!
                        </a>
                    </div>
                </div>
            );
        })}
</div>

<h1>Starships</h1>
<div className="card-container" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
    {store.starships && store.starships.results &&
        store.starships.results.length > 0 &&
        indexToShowStarships.map((index) => {
            const starship = store.starships.results[index];
            return (
                <div key={index} className="card" style={{ width: "18rem", margin: "0 10px", display: "inline-block" }}>
                    <img src={imagenSW} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{starship.name}</h5>
                        <p className="card-text">Passengers: {starship.passengers}</p>
                        <p className="card-text">Crew: {starship.crew} Hrs</p>
                        <p className="card-text">Cargo Capacity: {starship.cargo_capacity}</p>
                        <a href="#" className="btn btn-primary">
                            Learn More!
                        </a>
                    </div>
                </div>
            );
        })}
</div>
        </>
    );
};