import React, { memo } from 'react';
import { Handle, NodeProps, Position } from 'react-flow-nns';
import { makeStyles } from '@material-ui/core';
import useValidationConnection from '../../../../validation/useValidationConnection';
import { BlockState, CommentConfig } from '../../../../block';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	nodeTextarea: {
		width: '100%',
		height: '100%',
		color: '#0f0f0f',
	},
});

const CommentNode = ({ data, isConnectable, sourcePosition = Position.Bottom }: NodeProps<BlockState>) => {
	const classes = useStyle();
	const { isValidationConnection } = useValidationConnection();
	const params = data.param as CommentConfig;

	return <div className={`${classes.wrapper} ${classes.nodeTextarea}`}>{params.comment}</div>;
};

export default memo(CommentNode);
