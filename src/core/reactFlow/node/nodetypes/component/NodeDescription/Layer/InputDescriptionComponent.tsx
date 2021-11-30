import React, { memo } from 'react';

const InputDescriptionComponent = () => {
	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">Input</h1>
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
									<div className="txt">Shape</div>
								</div>
							</div>
						</td>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">
										A shape tuple (integers), not including the batch size. For instance, shape=(32,) indicates that the
										expected input will be batches of 32-dimensional vectors.
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

export default memo(InputDescriptionComponent);
