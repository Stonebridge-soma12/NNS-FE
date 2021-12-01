import React, { memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
	bold: {
		fontWeight: 'bold',
	},
});

const CeilDescriptionComponent = () => {
	const classes = useStyle();

	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">Ceil</h1>
			</div>
			<div className="txt">Return the ceiling of the input, element-wise.</div>
		</div>
	);
};

export default memo(CeilDescriptionComponent);
