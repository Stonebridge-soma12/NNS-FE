import { createElement, useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import socketIOClient from 'socket.io-client';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import { TrainHistory } from '../types';
import { useGetTrainHistoryEpochListLibraryAPI, useProjectTrainEpochs } from '../api';
import ProjectTrainLearningCurveViewer from './projectTrainLearningCurveViewer';

export class ProjectTrainHistories {
	trainHistories: Array<TrainHistory>;

	constructor(trainHistories: Array<TrainHistory>) {
		this.trainHistories = trainHistories;
	}
}

export type ProjectTrainState = ProjectTrainHistories | null;

const projectTrainState = atom<ProjectTrainState>({
	key: 'ProjectTrainState',
	default: null,
});

export type ProjectTrainViewerProps = {
	history: TrainHistory;
};

const ProjectTrainViewer = ({ history }: ProjectTrainViewerProps) => {
	// const { projectTrain, loading } = useProjectTrain();
	const { projectTrainEpochs, setProjectTrainEpochs, loading } = useProjectTrainEpochs(history.trainNo);
	const { fetch } = useGetTrainHistoryEpochListLibraryAPI();
	const { projectNo } = useProjectLocation();

	// TODO: 소켓 연결해야됨
	useEffect(() => {
		fetch(parseInt(projectNo, 10), history.trainNo).then((res) => {
			setProjectTrainEpochs(res);
		});
	}, [fetch, history, projectNo, setProjectTrainEpochs]);

	return (
		<div className="box">
			<div className="tit">Learning Curve</div>
			{loading && <CircleLoading />}
			{projectTrainEpochs?.epochs && (
				<ProjectTrainLearningCurveViewer epochs={projectTrainEpochs.epochs} setEpochs={setProjectTrainEpochs} />
			)}
		</div>
	);
};

export default ProjectTrainViewer;
