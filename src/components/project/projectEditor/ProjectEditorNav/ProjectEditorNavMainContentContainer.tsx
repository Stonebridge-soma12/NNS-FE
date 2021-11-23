import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { FlowExportObject } from 'react-flow-nns';
import { useSnackbar } from 'notistack';
import { atom, useRecoilState } from 'recoil';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import ProjectEditorNavMainContent from './ProjectEditorNavMainContent';
import { RootState } from '../../../../module';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import usePythonCode from '../../../../hooks/usePythonCode';
import config from '../../../../config';
import { IProjectContentDto } from '../../../../API/project/types';
import { updateProjectContent } from '../../../../API/project';
import SimpleBackdrop from '../../../utils/BackLoading';

type TrainModelResult = {
	data: null | { code: string };
	error: null | string;
	loading: boolean;
} | null;

const trainModelResultState = atom<TrainModelResult>({
	key: 'trainModuleResultState',
	default: null,
});

const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
};

const requsetTrain = async (projectNo: string) => {
	try {
		const res = await axios.post(`${config.SERVER_PREFIX}/api/project/${projectNo}/train`, null, axiosConfig);
		return res.data;
	} catch (e: any) {
		if ((e as AxiosError).isAxiosError && (e as AxiosError)?.response?.status === 400) {
			throw new Error(e.response.data.errMsg);
		}
		throw new Error(e.message);
	}
};

const useTrainModel = () => {
	const [result, setResult] = useRecoilState(trainModelResultState);
	const trainFetch = useCallback(
		async (projectNo: string, projectContent: IProjectContentDto) => {
			setResult({
				data: null,
				error: null,
				loading: true,
			});

			const res = updateProjectContent(projectNo, projectContent)
				.then(async () => {
					const data = await requsetTrain(projectNo);
					setResult({
						error: null,
						data,
						loading: false,
					});
					return data;
				})
				.catch((e: Error) => {
					setResult({
						error: e.message,
						data: null,
						loading: false,
					});
					throw e;
				});
			return res;
		},
		[setResult]
	);

	return {
		...result,
		trainFetch,
	};
};

const ProjectEditorNavMainContentContainer = () => {
	const { projectNo } = useProjectLocation();
	const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
	const { fetch, data, setResult } = usePythonCode();
	const { enqueueSnackbar } = useSnackbar();
	const { trainFetch, loading } = useTrainModel();

	const onGetPythonCode = useCallback(() => {
		fetch(projectNo, {
			output: '',
			flowState: instance?.toObject() as FlowExportObject,
		}).catch(() => {
			enqueueSnackbar('파이썬 코드로 변환하는데 실패했습니다.', { variant: 'error' });
		});
	}, [enqueueSnackbar, fetch, instance, projectNo]);

	const erasePythonCode = useCallback(() => {
		setResult(null);
	}, [setResult]);

	const onTrainModel = useCallback(() => {
		trainFetch(projectNo, {
			output: '',
			flowState: instance?.toObject() as FlowExportObject,
		})
			.then(async () => {
				enqueueSnackbar('학습요청에 성공했습니다.', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar(err.message, { variant: 'error' });
			});
	}, [enqueueSnackbar, trainFetch, instance, projectNo]);

	return (
		<>
			{loading && <SimpleBackdrop open />}
			<ProjectEditorNavMainContent
				onGetPythonCode={onGetPythonCode}
				onTrainModel={onTrainModel}
				code={data?.code}
				erasePythonCode={erasePythonCode}
			/>
		</>
	);
};

export default ProjectEditorNavMainContentContainer;
