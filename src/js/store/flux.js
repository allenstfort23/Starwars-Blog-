const getState = ({ getStore, getActions, setStore }) => {
	//
	// console.log(apiURL);
	return {
		store: {
			people: [],
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
			]
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
				const apiURL = "https://www.swapi.tech/api/people";
				fetch(apiURL)
					.then(res => res.json())
					.then(res => {
						let peopleName = [];
						res.results.forEach((items, index, arr) => {
							peopleName.push(items.name);
						});
						setStore({ people: peopleName });
					});
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
			}
		}
	};
};

export default getState;
