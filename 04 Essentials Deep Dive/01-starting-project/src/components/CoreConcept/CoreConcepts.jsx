import Section from '../../Section';
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../../data';

const CoreConcepts = () => {
	return (
		<Section title="Core Concepts" id="core-concepts">
			<ul>
				{CORE_CONCEPTS.map((data, index) => (
					<CoreConcept key={index} {...data} />
				))}
			</ul>
		</Section>
	);
};

export default CoreConcepts;
