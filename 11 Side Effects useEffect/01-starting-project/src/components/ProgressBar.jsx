import { useEffect, useState } from 'react';

const ProgressBar = ({ timer }) => {
	const [remainingTime, setRemainingTime] = useState(timer);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log('INTERVAL');
			setRemainingTime(prevTime => prevTime - 10);
		}, 10);

		return () => {
			console.log('Cleaning up interval');
			clearInterval(interval);
		};
	}, []);

	return <progress value={remainingTime} max={timer} />;
};

export default ProgressBar;