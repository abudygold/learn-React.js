import TabButton from './TabButton';

const Tabs = ({ selectedTopic, handleSelectTab, children }) => {
	return (
		<>
			<menu>
				{['Components', 'JSX', 'Props', 'State'].map((label, index) => (
					<TabButton
						key={index}
						isSelected={selectedTopic === label.toLowerCase()}
						onClick={() => handleSelectTab(label.toLowerCase())}
					>
						{label}
					</TabButton>
				))}
			</menu>
			{children}
		</>
	);
};

export default Tabs;
