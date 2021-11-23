import React, { MouseEventHandler, useState } from 'react';
import CodeModal from '../../projectCodeBlock/codeModal';

type Props = {
	onGetPythonCode: MouseEventHandler;
	onTrainModel: MouseEventHandler;
};

const ProjectEditorNavMainContent = ({ onGetPythonCode, onTrainModel }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="btns-group">
			<CodeModal setIsOpen={setIsOpen} isOpen={isOpen} onGetPythonCode={onGetPythonCode} />
			<button
				type="button"
				onClick={() => {
					setIsOpen(true);
				}}
				className="btn js-modal-open"
			>
				파이썬 코드로 내보내기
			</button>

			<button type="button" onClick={onTrainModel} className="btn btn-v1">
				모델 학습
			</button>
		</div>
	);
};

export default ProjectEditorNavMainContent;
