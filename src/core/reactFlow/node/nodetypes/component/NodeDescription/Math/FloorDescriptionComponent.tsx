import React, { memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
	bold: {
		fontWeight: 'bold',
	},
});

const FloorDescriptionComponent = () => {
	const classes = useStyle();

	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">Floor</h1>
			</div>
			<div className="txt">Returns element-wise largest integer not greater than x in input tensor.</div>
		</div>
	);
};

export default memo(FloorDescriptionComponent);
