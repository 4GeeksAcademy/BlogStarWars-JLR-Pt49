import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import imgCharacters from "../../img/characters.webp"
import imgPlanets from "../../img/planet.jpg"
import imgShip from "../../img/ships.jpg"
import { Link } from "react-router-dom";


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
 <h1 className="mb-5 ms-2 p-2 cardstitle">Characters</h1>
<div className="card-container p-2" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
    {store.characters && store.characters.results &&
        store.characters.results.length > 0 &&
        indexToShowCharacters.map((index) => {
            const character = store.characters.results[index];
            return (
                <div key={index} className="card" style={{ width: "18rem", margin: "0 10px", display: "inline-block" }}>
                    <img src={imgCharacters} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">Gender: {character.gender}</p>
                        <p className="card-text">Hair Color: {character.hair_color}</p>
                        <p className="card-text">Eye Color: {character.eye_color}</p>
                        <div className="row">
                            <div className="col-lg-8">
                        <Link to={"/characters/" + index} className="btn btn-outline-primary">
                            Learn More!
                        </Link>
                        </div>
                        <div className="col-lg-4">
                        <button onClick={() => actions.addFavorite(character.name, "/characters/" + index)} type="button" className="btn btn-outline-warning ms-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                            </svg>
                        </button>
                        </div>
                        </div>
                        
                    </div>
                </div>
            );
        })}
</div>

<h1 className="mb-5 mt-4 ms-2 p-2 cardstitle">Planets</h1>
<div className="card-container p-2" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
    {store.planets && store.planets.results &&
        store.planets.results.length > 0 &&
        indexToShowPlanets.map((index) => {
            const planet = store.planets.results[index];
            return (
                <div key={index} className="card" style={{ width: "18rem", margin: "0 10px", display: "inline-block" }}>
                    <img src={imgPlanets} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <p className="card-text">Population: {planet.population}</p>
                        <p className="card-text">Rotation Period: {planet.rotation_period} Hrs</p>
                        <p className="card-text">Climate: {planet.climate}</p>
                        <div className="row">
                            <div className="col-lg-8">
                        <Link to={"/planets/" + index} className="btn btn-outline-primary">
                            Learn More!
                        </Link>
                        </div>
                        <div className="col-lg-4">
                        <button onClick={() => actions.addFavorite(planet.name, "/planets/" + index)} type="button" className="btn btn-outline-warning ms-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                            </svg>
                        </button>
                        </div>
                        </div>
                    </div>
                </div>
            );
        })}
</div>

<h1 className="mb-5 mt-4 ms-2 p-2 cardstitle">Starships</h1>
<div className="card-container p-2" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
    {store.starships && store.starships.results &&
        store.starships.results.length > 0 &&
        indexToShowStarships.map((index) => {
            const starship = store.starships.results[index];
            return (
                <div key={index} className="card" style={{ width: "18rem", margin: "0 10px", display: "inline-block" }}>
                    <img src={imgShip} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{starship.name}</h5>
                        <p className="card-text">Passengers: {starship.passengers}</p>
                        <p className="card-text">Crew: {starship.crew}</p>
                        <p className="card-text">Cargo Capacity: {starship.cargo_capacity}</p>
                        <div className="row">
                            <div className="col-lg-8">
                        <Link to={"/starships/" + index} className="btn btn-outline-primary">
                            Learn More!
                        </Link>
                        </div>
                        <div className="col-lg-4">
                        <button onClick={() => actions.addFavorite(starship.name, "/starships/" + index)} type="button" className="btn btn-outline-warning ms-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                            </svg>
                        </button>
                        </div>
                        </div>
                    </div>
                </div>
            );
        })}
</div>
        </>
    );
};