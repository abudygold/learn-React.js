import { useEffect, useState } from 'react';
import MealItem from './MealItem';

const Meals = () => {
	const [loadedMeals, setLoadedMeals] = useState([]);

	useEffect(() => {
		async function fetchMeals() {
			try {
				const response = await fetch('http://localhost:3000/meals');

				if (!response.ok) return;

				const meals = await response.json();
				setLoadedMeals(meals);
			} catch (error) {
				// handle error here
			}
		}

		fetchMeals();
	}, []);

	console.log(loadedMeals);

	return (
		<ul id="meals">
			{loadedMeals.map(meal => (
				<MealItem key={meal.id} meal={meal} />
			))}
		</ul>
	);
};

export default Meals;
