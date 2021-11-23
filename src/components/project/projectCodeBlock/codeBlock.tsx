import { CopyBlock, github, googlecode, atomOneLight } from 'react-code-blocks';
import styled from 'styled-components';

type Props = {
	code: string;
};

const CodeBlockWrapper = styled.div`
	width: 100%;
	font-size: 14px;
	margin: 2%;
	padding: 0;
	overflow: scroll;
	font-family: 'Fira Code', monospace;
`;

const CodeBlock = (props: Props) => {
	const { code } = props;

	return (
		<CodeBlockWrapper>
			<CopyBlock text={code} language="python" showLineNumbers wrapLines theme={github} codeBlock />
		</CodeBlockWrapper>
	);
};

export default CodeBlock;
