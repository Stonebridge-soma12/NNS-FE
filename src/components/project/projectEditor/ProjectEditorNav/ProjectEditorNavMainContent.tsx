import React, { FC, MouseEventHandler, useState } from 'react';
import CustomModal from '../../projectCodeBlock/customModal';
import CodeBlock from '../../projectCodeBlock/codeBlock';

type Props = {
	onGetPythonCode: any;
	onTrainModel: MouseEventHandler;
	code?: string;
	erasePythonCode: any;
};

const ProjectEditorNavMainContent: FC<Props> = ({ onGetPythonCode, onTrainModel, code, erasePythonCode }: Props) => {
	return (
		<div className="btns-group">
			{code && <CustomModal setIsOpen={erasePythonCode} isOpen body={<CodeBlock code={code} />} head="코드" />}
			<button
				type="button"
				onClick={() => {
					onGetPythonCode();
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

ProjectEditorNavMainContent.defaultProps = {
	code: undefined,
};

export default ProjectEditorNavMainContent;
