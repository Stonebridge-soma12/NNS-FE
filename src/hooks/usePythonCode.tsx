import { useCallback, useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { AxiosError } from 'axios';
import { getPythonCode, updateProjectContent } from '../API/project';
import { IProjectContentDto } from '../API/project/types';
import { sleep } from '../util';
import SimpleBackdrop from '../components/utils/BackLoading';

type PythonCodeResult = {
	data: null | { code: string };
	error: null | string;
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

	useEffect(() => {
		return () => {
			setResult(null);
		};
	}, [setResult]);

	return {
		...result,
		loadingFallback: <SimpleBackdrop open />,
		fetch,
		setResult,
	};
};

export default usePythonCode;
