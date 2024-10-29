import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (fetchFn, initialValue) => {
	const [isFetching, setIsFetching] = useState();
	const [error, setError] = useState();
	const [fetchedData, setFetchedData] = useState(initialValue);

	useEffect(() => {
		async function fetchData() {
			setIsFetching(true);

			try {
				const places = await fetchFn();
				setFetchedData(places);
			} catch (error) {
				setError({ message: error.message || 'Failed to fetch data.' });
				return [];
			}

			setIsFetching(false);
		}

		fetchData();
	}, [fetchFn]);

	return {
		error,
		isFetching,
		fetchedData,
		setFetchedData,
	};
};

export default useFetch;
