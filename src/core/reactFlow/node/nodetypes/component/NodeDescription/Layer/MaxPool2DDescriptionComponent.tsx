import React, { memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
	bold: {
		fontWeight: 'bold',
	},
});

const MaxPool2DDescriptionComponent = () => {
	const classes = useStyle();

	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">MaxPool2D</h1>
			</div>
			<div className="txt">Max pooling operation for 2D spatial data.</div>
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
									<div className="txt">padding</div>
								</div>
							</div>
						</td>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">
										One of &quot;valid&quot; or &quot;same&quot; (case-insensitive). &quot;valid&quot; means no padding.
										&quot;same&quot; results in padding evenly to the left/right or up/down of the input such that
										output has the same height/width dimension as the input.
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">pool_size</div>
								</div>
							</div>
						</td>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">
										integer or tuple of 2 integers, window size over which to take the maximum. (2, 2) will take the max
										value over a 2x2 pooling window. If only one integer is specified, the same window length will be
										used for both dimensions.
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">strides</div>
								</div>
							</div>
						</td>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">
										Integer, tuple of 2 integers, or None. Strides values. Specifies how far the pooling window moves
										for each pooling step. If None, it will default to <span className={classes.bold}>pool_size.</span>
									</div>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default memo(MaxPool2DDescriptionComponent);
