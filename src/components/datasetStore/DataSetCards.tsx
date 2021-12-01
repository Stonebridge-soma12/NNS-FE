import React, { useCallback, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { Dataset } from '../../API/Dataset/type';
import { useDeleteDatasetFromLibrary } from '../../hooks/useDeleteDatasetFromLibrary';
import { useAddDatasetToLibrary } from '../../hooks/useAddDatasetToLibrary';
import SimpleBackdrop from '../utils/BackLoading';
import { useGetDatasetListLibraryAPI } from '../../hooks/useGetDatasetListLibraryAPI';

type Props = {
	datasets: Dataset[];
	updateDatasets: any;
	updateDatasetFromLibrary: any;
};

type DatasetCardProps = {
	dataset: Dataset;
	deleteDatasetFetch: (datasetNo: string) => void;
	addDatasetFetch: (datasetNo: string) => void;
};

const DatasetCard = ({ dataset, deleteDatasetFetch, addDatasetFetch }: DatasetCardProps) => {
	const { enqueueSnackbar } = useSnackbar();

	return (
		<li>
			<div className="group">
				<div className="tit">{dataset.name}</div>
				<div className="content">{dataset.description}</div>
			</div>
			{dataset.isUploading && (
				<button
					type="button"
					className="btn-bottom btn-gray"
					onClick={async () => {
						try {
							await deleteDatasetFetch(dataset.id);
						} catch (e: any) {
							enqueueSnackbar(e.message, { variant: 'error' });
						}
					}}
				>
					업로드중
				</button>
			)}
			{!dataset.isUploading && dataset.inLibrary && (
				<button
					type="button"
					className="btn-bottom btn-red"
					onClick={async () => {
						try {
							await deleteDatasetFetch(dataset.id);
						} catch (e: any) {
							enqueueSnackbar(e.message, { variant: 'error' });
						}
					}}
				>
					라이브러리에서 데이터셋 삭제
				</button>
			)}
			{!dataset.isUploading && !dataset.inLibrary && (
				<button
					type="button"
					className="btn-bottom js-modal-open"
					onClick={async () => {
						try {
							await addDatasetFetch(dataset.id);
						} catch (e: any) {
							enqueueSnackbar(e.message, { variant: 'error' });
						}
					}}
				>
					라이브러리에 데이터셋 추가
				</button>
			)}
		</li>
	);
};

export const DatasetCards = ({ datasets, updateDatasets, updateDatasetFromLibrary }: Props) => {
	const deleteDataset = useDeleteDatasetFromLibrary();
	const addDataset = useAddDatasetToLibrary();
	const onDeleteDataSetFromLibrary = useCallback(
		async (datasetId: string) => {
			await deleteDataset.fetch(datasetId);
			updateDatasets();
			updateDatasetFromLibrary();
		},
		[deleteDataset, updateDatasetFromLibrary, updateDatasets]
	);
	const onAddDataSetInLibrary = useCallback(
		async (datasetId: string) => {
			await addDataset.fetch(datasetId);
			updateDatasets();
			updateDatasetFromLibrary();
		},
		[addDataset, updateDatasetFromLibrary, updateDatasets]
	);

	return (
		<>
			{(deleteDataset.loading || addDataset.loading) && <SimpleBackdrop open />}
			{datasets.map((dataset) => {
				return (
					<DatasetCard
						key={dataset.id}
						dataset={dataset}
						deleteDatasetFetch={onDeleteDataSetFromLibrary}
						addDatasetFetch={onAddDataSetInLibrary}
					/>
				);
			})}
		</>
	);
};
