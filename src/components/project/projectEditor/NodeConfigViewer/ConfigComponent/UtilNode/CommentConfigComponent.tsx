import React, { ChangeEvent } from 'react';
import { CommentConfig, IConfigComponent } from '../../../../../../core/reactFlow/block';
import { configComponentToReactNode } from '../util';
import TextInput from '../../../../../Input/TextInput';

type Props = {
	config: CommentConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CommentConfigComponent = ({ config, onChange }: Props) => {
	const { comment } = config;
	const configComponent: IConfigComponent<typeof config> = {
		comment: <TextInput propertyName="comment" propertyContent={comment} onChange={onChange} />,
	};

	return <>{configComponentToReactNode(configComponent)}</>;
};

export default CommentConfigComponent;
