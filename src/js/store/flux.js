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

			},
		
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

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
		}
	};
};

export default getState;
