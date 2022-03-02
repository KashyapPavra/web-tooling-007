import React from "react";
import useSWR from "swr";

const endpoint = "https://foodish-api.herokuapp.com/api/";

export const fetchJSON = async (endpoint) =>
	await fetch(endpoint).then((x) => x.json());

const FoodImage = () => {
	const { data } = useSWR(endpoint, fetchJSON);

	if (!data?.image) return null;
	return <img width={200} src={data.image} alt='' />;
};

const App = () => {
	return (
		<div className='container'>
			<h1>You should have this for dinner today!</h1>
			<FoodImage />
		</div>
	);
};

export default App;
