import React, { memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
	bold: {
		fontWeight: 'bold',
	},
});

const SubtractDescriptionComponent = () => {
	const classes = useStyle();

	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">Subtract</h1>
			</div>
			<div className="txt">Returns x - y element-wise.</div>
		</div>
	);
};

export default memo(SubtractDescriptionComponent);
