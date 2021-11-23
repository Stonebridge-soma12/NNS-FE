import React, { MouseEventHandler, useEffect } from 'react';
import CodeBlock from './codeBlock';
import CustomModal from './customModal';

type Props = {
	isOpen: boolean;
	setIsOpen: any;
	onGetPythonCode: any;
};

const test = `import tensorflow as tf\n\nimport tensorflow_addons as tfa\n\ninput_ig = tf.keras.layers.Input(shape=(12, 24))\ndense_xh = tf.keras.layers.Dense(units=6)\nactivation_jr = tf.keras.layers.Activation(activation="relu")\ndense_xh = dense_xh(input_ig)\nactivation_jr = activation_jr(dense_xh)\nmodel = tf.keras.Model(inputs=input_ig, outputs=activation_jr)\n\nmodel.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.001, beta_1=0.9, beta_2=0.999, epsilon=1e-07, amsgrad=False), loss="binary_crossentropy", metrics=["accuracy"])\n`;

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
