import { useContext } from 'react';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';
import Input from './UI/Input';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';

const Checkout = () => {
	const { items } = useContext(CartContext);
	const { progress, hideCheckout } = useContext(UserProgressContext);

	const cartTotal = items.reduce(
		(totalPrice, item) => totalPrice + item.quantity * item.price,
		0
	);

	const handleSubmit = async event => {
		event.preventDefault();

		const fd = new FormData(event.target);
		const data = Object.fromEntries(fd.entries());
		console.log(data);

		const orders = await fetch('http://localhost:3000/orders', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				/* city
: 
"a"
email
: 
"a@a.com"
full-name
: 
"a"
postal-code
: 
"a"
street
: 
"a" */
			},
		});

		if (!orders.ok) return;
	};

	return (
		<Modal
			open={progress === 'checkout'}
			onClose={progress === 'checkout' ? hideCheckout : null}
		>
			<form onSubmit={handleSubmit}>
				<h2>Checkout</h2>
				<p>Total Amount: {currencyFormatter(cartTotal)}</p>

				<Input label="Full Name" type="text" id="full-name" />
				<Input label="Email Address" type="email" id="email" />
				<Input label="Street" type="text" id="street" />
				<div className="control-row">
					<Input label="Postal Code" type="text" id="postal-code" />
					<Input label="City" type="text" id="city" />
				</div>

				<div className="modal-actions">
					<Button type="button" textOnly onClick={hideCheckout}>
						Close
					</Button>
					<Button>Submit Order</Button>
				</div>
			</form>
		</Modal>
	);
};

export default Checkout;
