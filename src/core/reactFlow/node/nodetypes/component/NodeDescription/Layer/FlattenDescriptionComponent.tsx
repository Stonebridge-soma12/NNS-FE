import React, { memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
	bold: {
		fontWeight: 'bold',
	},
});

const FlattenDescriptionComponent = () => {
	const classes = useStyle();

	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">Flatten</h1>
			</div>
			<div className="txt">Flattens the input. Does not affect the batch size.</div>
		</div>
	);
};

export default memo(FlattenDescriptionComponent);
