import { useRef, useState } from 'react';

export default function Login() {
	const [formIsInvalid, setFormIsInvalid] = useState({
		email: false,
	});

	const email = useRef();
	const password = useRef();

	const handleSubmit = event => {
		event.preventDefault();

		const enteredEmail = email.current.value;
		const enteredPassword = password.current.value;

		const emailIsValid = enteredEmail.includes('@');

		if (!emailIsValid) {
			setFormIsInvalid({
				email: true,
			});
			return;
		}

		setFormIsInvalid({
			email: false,
		});

		console.log('Sending HTTP request...');

		/* Reset the form */
		/* email.current.value = '';
		password.current.value = ''; */
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" ref={email} />
					{formIsInvalid.email && (
						<div className="control-error">
							<p>Please enter a valid email address.</p>
						</div>
					)}
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input id="password" type="password" name="password" ref={password} />
				</div>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
