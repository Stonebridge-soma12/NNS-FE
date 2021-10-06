import axios, { AxiosRequestConfig } from 'axios';
import queryString from 'querystring';
import {
	AddDatasetToLibraryAPIResponse,
	DeleteDatasetFromLibraryAPIResponse,
	GetDatasetListAPIResponse,
	GetDatasetListQuery,
	UpdateDataset,
	UpdateDatasetAPIResponse,
	UploadNewDatasetFileAPIResponse,
	UploadNewDatasetFormData,
} from './type';
import config from '../../config';

const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
};

export const getDatasetListAPI = async (getDatasetListQuery: GetDatasetListQuery) => {
	try {
		const uri = `${config.SERVER_PREFIX}/api/datasets?${queryString.stringify(getDatasetListQuery)}`;
		const response = await axios.get<GetDatasetListAPIResponse>(uri, axiosConfig);
		return response.data;
	} catch (e) {
		throw new Error('DataSetList를 가져오지 못했습니다. 다시 시도해주세요.');
	}
};

export const uploadNewDatasetFileAPI = async (formData: UploadNewDatasetFormData) => {
	try {
		const response = await axios.post<UploadNewDatasetFileAPIResponse>(
			`${config.SERVER_PREFIX}/api/dataset/file`,
			formData,
			{
				...axiosConfig,
			}
		);
		return response.data;
	} catch (e) {
		throw new Error('데이터를 업로드 하지 못했습니다. 다시 시도해주세요.');
	}
};

export const updateDatasetAPI = async (updateDataset: UpdateDataset) => {
	try {
		const response = await axios.put<UpdateDatasetAPIResponse>(
			`${config.SERVER_PREFIX}/api/dataset`,
			updateDataset,
			axiosConfig
		);
		return response.data;
	} catch (e) {
		throw new Error('Dataset을 업데이트 하지 못했습니다. 다시 시도해주세요.');
	}
};

export const addDatasetToLibraryAPI = async (datasetId: string) => {
	try {
		const response = await axios.post<AddDatasetToLibraryAPIResponse>(
			`${config.SERVER_PREFIX}/api/dataset/library`,
			{
				datasetId,
			},
			axiosConfig
		);
		return response.data;
	} catch (e) {
		throw new Error('Dataset을 라이브러리에 추가하지 못했습니다. 다시 시도해주세요.');
	}
};

export const deleteDatasetFromLibraryAPI = async (datasetId: string) => {
	try {
		const response = await axios.delete<DeleteDatasetFromLibraryAPIResponse>(
			`${config.SERVER_PREFIX}/api/dataset/library/${datasetId}`,
			axiosConfig
		);
		return response.data;
	} catch (e) {
		throw new Error('Dataset을 라이브러리에 삭제하지 못했습니다. 다시 시도해주세요.');
	}
};

const deleteDatasetAPI = () => {};

const getDatasetLibraryListAPI = () => {};
