import React, { MouseEventHandler, useEffect } from 'react';
import CodeBlock from './codeBlock';
import CustomModal from './customModal';

type Props = {
	isOpen: boolean;
	setIsOpen: any;
	onGetPythonCode: any;
};

const test = 'import tensorflow as tf\ninput_1 = tf.keras.layers.Input(shape=(1,1,26))';

const CodeModal = (props: Props) => {
	const { isOpen, setIsOpen, onGetPythonCode } = props;

	useEffect(() => {
		console.log(isOpen);
		if (isOpen) {
			// isOpen === true 일 때 파이썬 코드 요청?
			// onGetPythonCode();
		}
	}, [isOpen, onGetPythonCode]);

	return <CustomModal setIsOpen={setIsOpen} isOpen={isOpen} body={<CodeBlock code={`${test}`} />} head="코드" />;
};

export default CodeModal;
