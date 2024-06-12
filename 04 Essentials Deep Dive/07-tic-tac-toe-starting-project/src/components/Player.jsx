import { useEffect, useState } from 'react';

const Player = ({ name, symbol, isActive, onChangeName }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState('');

	useEffect(() => {
		setPlayerName(name);
	}, [name]);

	return (
		<>
			<li className={isActive ? 'active' : ''}>
				<span className="player">
					{isEditing ? (
						<input
							type="text"
							required
							value={playerName}
							onChange={e => {
								setPlayerName(e.target.value);
								onChangeName(e.target.value, symbol);
							}}
						/>
					) : (
						<span className="player-name">{playerName}</span>
					)}

					<span className="player-symbol">{symbol}</span>
				</span>

				<button onClick={() => setIsEditing(isEditing => !isEditing)}>
					{isEditing ? 'Save' : 'Edit'}
				</button>
			</li>
		</>
	);
};

export default Player;
