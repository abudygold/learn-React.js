import { useContext } from 'react';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';
import CartItem from './CartItem';

const Cart = () => {
	const { items, addItem, removeItem } = useContext(CartContext);
	const { progress, hideCart, showCheckout } = useContext(UserProgressContext);

	const cartTotal = items.reduce(
		(totalPrice, item) => totalPrice + item.quantity * item.price,
		0
	);

	return (
		<Modal
			className="cart"
			open={progress === 'cart'}
			onClose={progress === 'cart' ? hideCart : null}
		>
			<h2>Your Cart</h2>
			<ul>
				{items.map(item => (
					<CartItem
						key={item.id}
						name={item.name}
						quantity={item.quantity}
						price={item.price}
						onIncrease={() => removeItem(item.id)}
						onDecrease={() => addItem(item)}
					/>
				))}
			</ul>
			<p className="cart-total">{currencyFormatter(cartTotal)}</p>
			<p className="modal-actions">
				<Button textOnly onClick={hideCart}>
					Close
				</Button>

				{items.length > 0 && (
					<Button onClick={showCheckout}>Go to Checkout</Button>
				)}
			</p>
		</Modal>
	);
};

export default Cart;
