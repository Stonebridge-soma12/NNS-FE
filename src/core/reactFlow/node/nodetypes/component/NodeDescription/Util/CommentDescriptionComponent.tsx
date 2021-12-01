import React, { memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
	bold: {
		fontWeight: 'bold',
	},
});

const CommentDescriptionComponent = () => {
	const classes = useStyle();

	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">Comment</h1>
			</div>
			<div className="txt">User comment block.</div>
		</div>
	);
};

export default memo(CommentDescriptionComponent);
