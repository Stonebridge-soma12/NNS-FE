import { createElement, useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import useProjectConfig from '../../../hooks/useProjectConfig';
import CircleLoading from '../../utils/Loading/CircularLoading';

export const LeftWrapper = styled.div`
	width: 280px;
`;

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100px',
	},
	container: {
		width: '100%',
		height: '100%',
		padding: '10px',
		borderBottom: '1px solid #B2B2B2',
		'&:hover': {
			backgroundColor: '#FFFFFF',
		},
	},
	active: {
		width: '100%',
		height: '100%',
		backgroundColor: '#FFFFFF',
	},
});

const ProjectConfigMain = ({
	selectorMappingViewer,
	selectorItemHeads,
}: {
	selectorMappingViewer: any;
	selectorItemHeads: any;
}) => {
	const [value, setValue] = useState<any>(selectorItemHeads['Global Config']);
	const classes = useStyle();

	const { projectConfig, loading } = useProjectConfig();
	if (!(value in selectorMappingViewer)) {
		throw new Error('허용되지 않는 행위입니다.');
	}

	return (
		<>
			<LeftWrapper>
				<div className="sec-l">
					<ol className="sec-menu">
						{Object.keys(selectorItemHeads).map((head, index) => {
							return (
								<li key={head} className={value === head ? 'active' : ''}>
									<a
										className={classes.wrapper}
										role="button"
										onClick={() => {
											setValue(head);
										}}
										tabIndex={0}
										onKeyDown={() => {
											setValue(head);
										}}
									>
										{head}
									</a>
								</li>
							);
						})}
					</ol>
				</div>
			</LeftWrapper>

			<div className="sec-c">
				{loading && <CircleLoading />}
				{projectConfig &&
					createElement(selectorMappingViewer[value], {
						projectConfig,
					})}
			</div>
		</>
	);
};

export default ProjectConfigMain;
