import React, { memo } from 'react';

const ActivationDescriptionComponent = () => {
	return (
		<div className="nodeDescription">
			<div className="tit">
				<h1 className="nodeType">Activation</h1>
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
									<div className="txt">Activation</div>
								</div>
							</div>
						</td>
						<td className="descTd">
							<div className="content">
								<div className="txt-group">
									<div className="txt">Activation function, such as relu.</div>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default memo(ActivationDescriptionComponent);
