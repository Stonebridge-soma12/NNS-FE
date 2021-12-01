import React, { memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
	bold: {
		fontWeight: 'bold',
	},
});

const LogDescriptionComponent = () => {
	const classes = useStyle();

	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">Log</h1>
			</div>
			<div className="txt">Computes natural logarithm of input x element-wise.</div>
		</div>
	);
};

export default memo(LogDescriptionComponent);
