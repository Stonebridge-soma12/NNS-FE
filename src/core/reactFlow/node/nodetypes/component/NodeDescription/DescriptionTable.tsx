import { BlockType } from '../../../../block/BlockType';
import DefaultNode from '../LayerNode/DefaultNode';
import InputNode from '../LayerNode/inputNode';
import CommentNode from '../LayerNode/commentNode';
import ActivationDescriptionComponent from './Layer/ActivationDescriptionComponent';
import InputDescriptionComponent from './Layer/InputDescriptionComponent';
import AveragePooling2DDescriptionComponent from './Layer/AveragePooling2DDescriptionComponent';
import BatchNormalizationDescriptionComponent from './Layer/BatchNormalizationDescriptionComponent';

type Key = keyof typeof BlockType;
type NodeDescriptionTableType = {
	[K in Key]: any;
};

const NodeDescriptionTable: NodeDescriptionTableType = {
	Activation: ActivationDescriptionComponent,
	AveragePooling2D: AveragePooling2DDescriptionComponent,
	BatchNormalization: BatchNormalizationDescriptionComponent,
	Conv2D: ActivationDescriptionComponent,
	Dense: ActivationDescriptionComponent,
	Dropout: ActivationDescriptionComponent,
	Flatten: ActivationDescriptionComponent,
	Input: InputDescriptionComponent,
	MaxPool2D: ActivationDescriptionComponent,
	Rescaling: ActivationDescriptionComponent,
	Reshape: ActivationDescriptionComponent,
	// Math
	Abs: ActivationDescriptionComponent,
	Ceil: ActivationDescriptionComponent,
	Floor: ActivationDescriptionComponent,
	Round: ActivationDescriptionComponent,
	Sqrt: ActivationDescriptionComponent,
	Add: ActivationDescriptionComponent,
	Subtract: ActivationDescriptionComponent,
	Log: ActivationDescriptionComponent,

	// Util
	Comment: CommentNode,
};

export default NodeDescriptionTable;
