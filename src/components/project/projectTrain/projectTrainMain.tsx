import { atom, useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { LeftWrapper } from '../projectConfig/projectConfigMain';
import ProjectTrainSideBar from './projectTrainSideBar/projectTrainSideBar';
import ProjectTrainViewer from './projectTrainViewer/projectTrainViewer';
import { TrainHistory } from './types';

const ProjectTrainMain = ({ selectorItemHeads }: { selectorItemHeads: Array<TrainHistory> }) => {
	const [value, setValue] = useState<TrainHistory>(selectorItemHeads[0]);

	useEffect(() => {}, [value]);

	// TODO: value.status === 'TRAIN' 이면 소켓 열어야됨
	return (
		<>
			<LeftWrapper>
				<div className="sec-l">
					<ProjectTrainSideBar value={value} setValue={setValue} selectorItemHeads={selectorItemHeads} />
				</div>
			</LeftWrapper>

			<div className="sec-c">{value === undefined ? '' : <ProjectTrainViewer history={value} />}</div>
		</>
	);
};

export default ProjectTrainMain;
