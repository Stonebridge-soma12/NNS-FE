import React, { memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
	bold: {
		fontWeight: 'bold',
	},
});

const Conv2DDescriptionComponent = () => {
	const classes = useStyle();

	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">Conv2D</h1>
			</div>
			<div className="txt">2D convolution layer (e.g. spatial convolution over images).</div>
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
									<div className="txt">filters</div>
								</div>
							</div>
						</td>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">
										Integer, the dimensionality of the output space (i.e. the number of output filters in the
										convolution).
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">kernel_size</div>
								</div>
							</div>
						</td>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">
										An integer or tuple/list of 2 integers, specifying the height and width of the 2D convolution
										window. Can be a single integer to specify the same value for all spatial dimensions.
									</div>
								</div>
							</div>
						</td>
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
										one of &quot;valid&quot; or &quot;same&quot; (case-insensitive). &quot;valid&quot; means no padding.
										&quot;same&quot; results in padding with zeros evenly to the left/right or up/down of the input.
										When <span className={classes.bold}>padding=&quot;same&quot;</span> and{' '}
										<span className={classes.bold}>strides=1</span>, the output has the same size as the input.
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
										An integer or tuple/list of 2 integers, specifying the strides of the convolution along the height
										and width. Can be a single integer to specify the same value for all spatial dimensions. Specifying
										any stride value != 1 is incompatible with specifying any{' '}
										<span className={classes.bold}>dilation_rate</span> value != 1.
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

export default memo(Conv2DDescriptionComponent);
