import { useState } from 'react';

import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import SelectedProject from './components/SelectedProject';

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: [],
		tasks: [],
	});

	const handleAddTask = text => {
		setProjectsState(prevState => {
			const newTask = {
				text: text,
				id: Math.random(),
				projectId: prevState.selectedProjectId,
			};

			return {
				...prevState,
				tasks: [newTask, ...prevState.tasks],
			};
		});
	};

	const handleDeleteTask = id => {
		setProjectsState(prevState => {
			return {
				...prevState,
				tasks: prevState.tasks.filter(task => task.id !== id),
			};
		});
	};

	const handleSelectProject = id => {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: id,
			};
		});
	};

	const handleStartAddProject = () => {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	};

	const handleAddProject = projectData => {
		setProjectsState(prevState => {
			const newProject = {
				...projectData,
				id: Math.random(),
			};

			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	};

	const handleCancelAddProject = () => {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
			};
		});
	};

	const handleDeleteProject = () => {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter(
					project => project.id !== prevState.selectedProjectId
				),
			};
		});
	};

	const selectedProject = projectsState.projects.find(
		project => project.id === projectsState.selectedProjectId
	);

	console.log(projectsState);

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectsSidebar
				onStartAddProject={handleStartAddProject}
				projects={projectsState.projects}
				onSelectProject={handleSelectProject}
				selectedProjectId={projectsState.selectedProjectId}
			/>

			{projectsState.selectedProjectId === null ? (
				<NewProject
					onAdd={handleAddProject}
					onCancel={handleCancelAddProject}
					project={projectsState.selectedProjectId}
				/>
			) : projectsState.selectedProjectId === undefined ? (
				<NoProjectSelected onStartAddProject={handleStartAddProject} />
			) : (
				<SelectedProject
					project={selectedProject}
					onDelete={handleDeleteProject}
					onAddTask={handleAddTask}
					onDeleteTask={handleDeleteTask}
					tasks={projectsState.tasks.filter(
						task => task.projectId === projectsState.selectedProjectId
					)}
				/>
			)}
		</main>
	);
}

export default App;
