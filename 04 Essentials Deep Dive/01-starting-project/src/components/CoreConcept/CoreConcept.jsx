import './CoreConcept.css';

const CoreConcept = props => {
	return (
		<li>
			<img src={props.image} alt="Image" />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</li>
	);
};

export default CoreConcept;
