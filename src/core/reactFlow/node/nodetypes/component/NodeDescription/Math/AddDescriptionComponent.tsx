import React, { memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
	bold: {
		fontWeight: 'bold',
	},
});

const AddDescriptionComponent = () => {
	const classes = useStyle();

	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">Add</h1>
			</div>
			<div className="txt">Layer that adds a list of inputs.</div>
		</div>
	);
};

export default memo(AddDescriptionComponent);
