import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
	const [result, setResult] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const inputIsValid = result.duration >= 1;

	const userInputHandler = row => setResult(row);

	return (
		<>
			<Header />
			<UserInput userInputHandler={userInputHandler} />
			{inputIsValid ? (
				<Results input={result} />
			) : (
				<p className="center">Please enter a duration greater than zero</p>
			)}
		</>
	);
}

export default App;
