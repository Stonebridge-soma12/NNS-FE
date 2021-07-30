import { Container, makeStyles } from '@material-ui/core';
import { ReactFlowProvider } from 'react-flow-renderer';
import ProjectEditorLeftSideBar from './projectEditorSideBar/ProjectEditorLeftSideBar';
import ProjectEditorGraphContainer from './ProjectEditorGraphContainer';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	container: {
		height: '100%',
		display: 'flex',
	},
	contentWrapper: {
		flexGrow: 1,
	},
});

const ProjectEditorMain = () => {
	const classes = useStyle();
	return (
		<>
			<div className={classes.wrapper}>
				<ReactFlowProvider>
					<Container className={classes.container}>
						<ProjectEditorLeftSideBar />
						<div className={classes.contentWrapper}>
							<ProjectEditorGraphContainer />
						</div>
					</Container>
				</ReactFlowProvider>
			</div>
		</>
	);
};

export default ProjectEditorMain;
