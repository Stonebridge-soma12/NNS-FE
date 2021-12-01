import React, { memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
	bold: {
		fontWeight: 'bold',
	},
});

const AbsDescriptionComponent = () => {
	const classes = useStyle();

	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">Abs</h1>
			</div>
			<div className="txt">Computes the absolute value of a tensor.</div>
		</div>
	);
};

export default memo(AbsDescriptionComponent);
