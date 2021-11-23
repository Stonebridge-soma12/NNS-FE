import React, { MouseEventHandler, useEffect } from 'react';
import CodeBlock from './codeBlock';
import CustomModal from './customModal';

type Props = {
	erasePythonCode: any;
	code: string;
};

const CodeModal = ({ erasePythonCode, code }: Props) => {
	return <CustomModal setIsOpen={erasePythonCode} isOpen body={<CodeBlock code={code} />} head="코드" />;
};

export default CodeModal;
