import React, { memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
	bold: {
		fontWeight: 'bold',
	},
});

const DenseDescriptionComponent = () => {
	const classes = useStyle();

	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">Dense</h1>
			</div>
			<div className="txt">Just your regular densely-connected NN layer.</div>
			<table className="descTbl">
				<tbody>
					<tr>
						<th className="descTh">
							<div className="content">
								<div className="txt-group">
									<div className="tit">Args</div>
								</div>
							</div>
						</th>
					</tr>
					<tr>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">units</div>
								</div>
							</div>
						</td>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">Positive integer, dimensionality of the output space.</div>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default memo(DenseDescriptionComponent);
