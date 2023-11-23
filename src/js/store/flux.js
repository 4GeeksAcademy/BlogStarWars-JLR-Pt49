const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			
			characters: {
                results: [],
			},

			planets: {
                results: [],
			},

			starships: {
				results: [],
			},

			favorites: [],

			},
		
		actions: {

			getACharacter: () => {
				fetch("https://swapi.dev/api/people/")
				.then(res => res.json())
				.then((data) => {
					console.log(data)
					setStore({ characters: data });
				})
				.catch(err => console.error(err))
			},

			getPlanets: () => {
				fetch("https://swapi.dev/api/planets")
				.then(res => res.json())
				.then((data) => {
					console.log(data)
					setStore({ planets: data });
				})
				.catch(err => console.error(err))
			},

			getStarships: () => {
				fetch("https://swapi.dev/api/starships")
				.then(res => res.json())
				.then((data) => {
					console.log(data)
					setStore({ starships: data });
				})
				.catch(err => console.error(err))
			},

			addFavorite: (name, link) => {
				const store = getStore();
				const updatedFavorites = [...store.favorites, { name, link }];
        		setStore({ favorites: updatedFavorites });

			},

			getFavorite: () =>{
				const store = getStore();
				return store.favorites;

			},

			removeFavorite: (index) => {
				const store = getStore();
				const updatedFavorites = [...store.favorites.slice(0, index), ...store.favorites.slice(index + 1)];
				setStore({ favorites: updatedFavorites });
			},
	},
};
};

export default getState;
