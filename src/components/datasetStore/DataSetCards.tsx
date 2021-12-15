import React, { useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Dataset } from '../../API/Dataset/type';
import { useDeleteDatasetFromLibrary } from '../../hooks/useDeleteDatasetFromLibrary';
import { useAddDatasetToLibrary } from '../../hooks/useAddDatasetToLibrary';
import SimpleBackdrop from '../utils/BackLoading';
import { useGetDatasetListLibraryAPI } from '../../hooks/useGetDatasetListLibraryAPI';
import CustomModal from '../project/projectCodeBlock/customModal';

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

const useStyle = makeStyles({
	added: {
		backgroundColor: '#5edab7',
		borderColor: '#5edab7',
	},
});

const DatasetModalHeader = ({ dataset, addDatasetFetch, deleteDatasetFetch }: DatasetCardProps) => {
	const { enqueueSnackbar } = useSnackbar();
	const classes = useStyle();

	return (
		<>
			<div className="tit">{dataset.name}</div>
			<div className="txt1">by {dataset.userName}</div>
			{/* <div className="txt2">요약설명...</div> */}

			<div className="ck-area">
				{dataset.inLibrary && (
					<button
						className={`add-library ${classes.added}`}
						type="button"
						onClick={async () => {
							try {
								await deleteDatasetFetch(dataset.id);
							} catch (e: any) {
								enqueueSnackbar(e.message, { variant: 'error' });
							}
						}}
					>
						추가됨
					</button>
				)}

				{!dataset.inLibrary && (
					<button
						className="add-library"
						type="button"
						onClick={async () => {
							try {
								await addDatasetFetch(dataset.id);
							} catch (e: any) {
								enqueueSnackbar(e.message, { variant: 'error' });
							}
						}}
					>
						라이브러리에 추가
					</button>
				)}
			</div>
		</>
	);
};

const DatasetModalContent = ({ dataset, addDatasetFetch, deleteDatasetFetch }: DatasetCardProps) => {
	return (
		<>
			<div className="content">
				<div className="img-area">
					<img src={dataset.thumbnail.url} alt=" " />
				</div>

				<div className="tab-group">
					<div className="tab-menu">
						<div className="click active">상세설명</div>
					</div>

					<div id="tab1" className="tab-content">
						{dataset.description}
					</div>
				</div>
			</div>
		</>
	);
};

const DatasetCard = ({ dataset, deleteDatasetFetch, addDatasetFetch }: DatasetCardProps) => {
	const [open, setOpen] = useState(false);

	return (
		<li>
			<div className="group">
				<div className="tit">{dataset.name}</div>
				<div className="content">{dataset.description}</div>
			</div>
			<CustomModal
				setIsOpen={setOpen}
				isOpen={open}
				body={
					<DatasetModalContent
						dataset={dataset}
						addDatasetFetch={addDatasetFetch}
						deleteDatasetFetch={deleteDatasetFetch}
					/>
				}
				head={
					<DatasetModalHeader
						dataset={dataset}
						addDatasetFetch={addDatasetFetch}
						deleteDatasetFetch={deleteDatasetFetch}
					/>
				}
			/>
			{dataset.isUploading && (
				<button type="button" className="btn-bottom btn-gray">
					업로드중
				</button>
			)}
			{!dataset.isUploading && (
				<button
					type="button"
					className="btn-bottom js-modal-open"
					onClick={() => {
						setOpen(true);
					}}
				>
					더보기
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
