import React, { memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
	bold: {
		fontWeight: 'bold',
	},
});

const SqrtDescriptionComponent = () => {
	const classes = useStyle();

	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">Sqrt</h1>
			</div>
			<div className="txt">Computes element-wise square root of the input tensor.</div>
		</div>
	);
};

export default memo(SqrtDescriptionComponent);
