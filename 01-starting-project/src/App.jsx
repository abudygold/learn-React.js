import { useState } from 'react';
import CoreConcept from './components/CoreConcept/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './data';

const App = () => {
	const [selectedTopic, setSelectedTopic] = useState('Please click a button');
	const [topic, setTopic] = useState();

	const handleSelect = selectedButton => {
		setSelectedTopic(selectedButton);
		setTopic(EXAMPLES[selectedButton]);
	};

	return (
		<div>
			<header>
				<h1>Hello World!</h1>
			</header>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((data, index) => (
							<CoreConcept key={index} {...data} />
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						{['Components', 'JSX', 'Props', 'State'].map((label, index) => (
							<TabButton
								key={index}
								isSelected={selectedTopic === label.toLowerCase()}
								onSelect={() => handleSelect(label.toLowerCase())}
							>
								{label}
							</TabButton>
						))}
					</menu>
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
				</section>
			</main>
		</div>
	);
};

export default App;
