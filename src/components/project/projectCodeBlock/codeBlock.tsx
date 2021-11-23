import { CopyBlock, github, googlecode, atomOneLight } from 'react-code-blocks';
import styled from 'styled-components';

type Props = {
	code: string;
};

const CodeBlockWrapper = styled.div`
	width: 100%;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	margin: 2%;
	overflow: scroll;
`;

const CodeBlock = (props: Props) => {
	const { code } = props;

	return (
		<CodeBlockWrapper>
			<CopyBlock text={code} language="python" showLineNumbers startingLineNumber={1} wrapLines theme={atomOneLight} />
		</CodeBlockWrapper>
	);
};

export default CodeBlock;
