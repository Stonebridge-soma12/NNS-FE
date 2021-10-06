import { BlockType } from '../../../reactFlow/block';

type BlockRelationShipKey = keyof typeof BlockType;

const BlockRelationShip: {
	[K in BlockRelationShipKey]: Set<BlockType>;
} = {
	Activation: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,
	]),
	AveragePooling2D: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,
	]),
	BatchNormalization: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,
	]),
	Conv2D: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,
	]),
	Dropout: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,
	]),
	Flatten: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,
	]),
	Input: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,
	]),
	MaxPool2D: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,
	]),
	Dense: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,
	]),
	Rescaling: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,
	]),
	Reshape: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,
	]),
};

export default BlockRelationShip;