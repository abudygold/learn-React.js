import { useState } from 'react';

export default function AuthInputs() {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredPassword, setEnteredPassword] = useState('');
	const [submitted, setSubmitted] = useState(false);

	function handleInputChange(identifier, value) {
		if (identifier === 'email') {
			setEnteredEmail(value);
		} else {
			setEnteredPassword(value);
		}
	}

	function handleLogin() {
		setSubmitted(true);
	}

	const emailNotValid = submitted && !enteredEmail.includes('@');
	const passwordNotValid = submitted && enteredPassword.trim().length < 6;

	return (
		<div id="auth-inputs">
			<div className="controls">
				<p className="paragraph">
					<label className={`label ${emailNotValid ? 'invalid' : undefined}`}>
						Email
					</label>
					<input
						type="email"
						/* style={{
							backgroundColor: emailNotValid ? '#f73f3f' : '#d1d5db',
						}} */
						className={emailNotValid ? 'invalid' : undefined}
						onChange={event => handleInputChange('email', event.target.value)}
					/>
				</p>
				<p>
					<label
						className={`label ${passwordNotValid ? 'invalid' : undefined}`}
					>
						Password
					</label>
					<input
						type="password"
						/* style={{
							backgroundColor: passwordNotValid ? '#f73f3f' : '#d1d5db',
						}} */
						className={passwordNotValid ? 'invalid' : undefined}
						onChange={event =>
							handleInputChange('password', event.target.value)
						}
					/>
				</p>
			</div>
			<div className="actions">
				<button type="button" className="text-button">
					Create a new account
				</button>
				<button className="button" onClick={handleLogin}>
					Sign In
				</button>
			</div>
		</div>
	);
}