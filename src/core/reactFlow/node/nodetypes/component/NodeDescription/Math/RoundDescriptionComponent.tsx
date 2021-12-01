import React, { memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
	bold: {
		fontWeight: 'bold',
	},
});

const RoundDescriptionComponent = () => {
	const classes = useStyle();

	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">Round</h1>
			</div>
			<div className="txt">Rounds the values of a tensor to the nearest integer, element-wise.</div>
		</div>
	);
};

export default memo(RoundDescriptionComponent);
