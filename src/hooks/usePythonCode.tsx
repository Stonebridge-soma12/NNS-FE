import { useCallback, useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { AxiosError } from 'axios';
import { getPythonCode, updateProjectContent } from '../API/project';
import { IProjectContentDto } from '../API/project/types';
import StandardModal from '../components/utils/modal/StandardModal';
import SuccessSnackbar from '../components/utils/Snackbar/SuccessSnackbar';
import { sleep } from '../util';
import SimpleBackdrop from '../components/utils/BackLoading';

type PythonCodeResult = {
	data: null | Blob;
	error: null | AxiosError;
	loading: boolean;
} | null;

const pythonCodeResultState = atom<PythonCodeResult>({
	key: 'pythonCodeResultState',
	default: null,
});

const usePythonCode = () => {
	const [result, setResult] = useRecoilState(pythonCodeResultState);

	const fetch = useCallback(
		async (projectNo: string, projectContent: IProjectContentDto) => {
			setResult({
				data: null,
				error: null,
				loading: true,
			});

			const delayedData = await sleep(1000).then(() => {
				const res = updateProjectContent(projectNo, projectContent)
					.then(async () => {
						const data = await getPythonCode(projectNo);
						setResult({
							error: null,
							data,
							loading: false,
						});
						return data;
					})
					.catch((e) => {
						setResult({
							error: e,
							data: null,
							loading: false,
						});
						return null;
					});
				return res;
			});

			return delayedData;
		},
		[setResult]
	);

	useEffect(() => {
		return () => {
			setResult(null);
		};
	}, [setResult]);

	return {
		...result,
		fetch,
		errorFeedback: result?.error && <StandardModal head={result.error.name} />,
		loadingFeedback: result?.loading && <SimpleBackdrop open />,
		successFeedback: result?.data && <SuccessSnackbar message="파이썬 코드를 열어보세요." open={!!result?.data} />,
	};
};

export default usePythonCode;