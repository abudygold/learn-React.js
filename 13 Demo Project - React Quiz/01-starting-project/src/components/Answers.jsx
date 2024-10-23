import { useRef } from 'react';

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
	const shuffledAnswers = useRef();

	if (!shuffledAnswers.current) {
		shuffledAnswers.current = [...answers];
		shuffledAnswers.current.sort(() => Math.random() - 0.5);
	}

	return (
		<ul id="answers">
			{shuffledAnswers.current.map((answer, index) => {
				const isSelected = selectedAnswer === answer;
				let cssClass =
					(answerState === 'correct' || answerState === 'wrong') && isSelected
						? answerState
						: answerState === 'answered' && isSelected
						? 'selected'
						: '';

				return (
					<li key={index} className="answer">
						<button
							className={cssClass}
							disabled={answerState !== ''}
							onClick={() => {
								onSelect(answer);
							}}
						>
							{answer}
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default Answers;
