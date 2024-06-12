import { useState } from 'react';
import { EXAMPLES } from './data';
import Section from './Section';
import Tabs from './components/TabButton/Tabs';

const Examples = () => {
	const [selectedTopic, setSelectedTopic] = useState('Please click a button');
	const [topic, setTopic] = useState();

	const handleSelect = selectedButton => {
		setSelectedTopic(selectedButton);
		setTopic(EXAMPLES[selectedButton]);
	};

	return (
		<Section title="Examples" id="examples">
			<Tabs selectedTopic={selectedTopic} handleSelectTab={handleSelect}>
				{topic ? (
					<div id="tab-content">
						<h3>{topic?.title}</h3>
						<p>{topic?.description}</p>
						<pre>
							<code>{topic?.code}</code>
						</pre>
					</div>
				) : (
					selectedTopic
				)}
			</Tabs>
		</Section>
	);
};

export default Examples;
