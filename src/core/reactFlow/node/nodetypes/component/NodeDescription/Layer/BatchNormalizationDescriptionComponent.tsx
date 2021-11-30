import React, { memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
	bold: {
		fontWeight: 'bold',
	},
});

const BatchNormalizationDescriptionComponent = () => {
	const classes = useStyle();

	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">BatchNormalization</h1>
			</div>
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
									<div className="txt">axis</div>
								</div>
							</div>
						</td>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">
										Integer, the axis that should be normalized (typically the features axis). For instance, after a{' '}
										<span className={classes.bold}>Conv2D</span> layer with{' '}
										<span className={classes.bold}>data_format=&quot;channels_first&quot;</span>, set{' '}
										<span className={classes.bold}>axis=1</span> in{' '}
										<span className={classes.bold}>BatchNormalization</span>.
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">epsilon</div>
								</div>
							</div>
						</td>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">Small float added to variance to avoid dividing by zero.</div>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">momentum</div>
								</div>
							</div>
						</td>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">Momentum for the moving average.</div>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default memo(BatchNormalizationDescriptionComponent);
