import { BlockType } from '../../../../block/BlockType';
import DefaultNode from '../LayerNode/DefaultNode';
import InputNode from '../LayerNode/inputNode';
import CommentNode from '../LayerNode/commentNode';
import ActivationDescriptionComponent from './Layer/ActivationDescriptionComponent';
import InputDescriptionComponent from './Layer/InputDescriptionComponent';
import AveragePooling2DDescriptionComponent from './Layer/AveragePooling2DDescriptionComponent';
import BatchNormalizationDescriptionComponent from './Layer/BatchNormalizationDescriptionComponent';
import Conv2DDescriptionComponent from './Layer/Conv2DDescriptionComponent';
import DenseDescriptionComponent from './Layer/DenseDescriptionComponent';
import DropoutDescriptionComponent from './Layer/DropoutDescriptionComoponent';
import FlattenDescriptionComponent from './Layer/FlattenDescriptionComponent';
import MaxPool2DDescriptionComponent from './Layer/MaxPool2DDescriptionComponent';
import RescalingDescriptionComponent from './Layer/RescalingDescriptionComponent';
import ReshapeDescriptionComponent from './Layer/ReshapeDescriptionComponent';
import AbsDescriptionComponent from './Math/AbsDescriptionComponent';
import CeilDescriptionComponent from './Math/CeilDescriptionComponent';
import FloorDescriptionComponent from './Math/FloorDescriptionComponent';
import AddDescriptionComponent from './Math/AddDescriptionComponent';
import RoundDescriptionComponent from './Math/RoundDescriptionComponent';
import SqrtDescriptionComponent from './Math/SqrtDescriptionComponent';
import LogDescriptionComponent from './Math/LogDescriptionComponent';
import SubtractDescriptionComponent from './Math/SubtractDescriptionComponent';
import CommentDescriptionComponent from './Util/CommentDescriptionComponent';

type Key = keyof typeof BlockType;
type NodeDescriptionTableType = {
	[K in Key]: any;
};

const NodeDescriptionTable: NodeDescriptionTableType = {
	Activation: ActivationDescriptionComponent,
	AveragePooling2D: AveragePooling2DDescriptionComponent,
	BatchNormalization: BatchNormalizationDescriptionComponent,
	Conv2D: Conv2DDescriptionComponent,
	Dense: DenseDescriptionComponent,
	Dropout: DropoutDescriptionComponent,
	Flatten: FlattenDescriptionComponent,
	Input: InputDescriptionComponent,
	MaxPool2D: MaxPool2DDescriptionComponent,
	Rescaling: RescalingDescriptionComponent,
	Reshape: ReshapeDescriptionComponent,
	// Math
	Abs: AbsDescriptionComponent,
	Ceil: CeilDescriptionComponent,
	Floor: FloorDescriptionComponent,
	Round: RoundDescriptionComponent,
	Sqrt: SqrtDescriptionComponent,
	Add: AddDescriptionComponent,
	Subtract: SubtractDescriptionComponent,
	Log: LogDescriptionComponent,

	// Util
	Comment: CommentDescriptionComponent,
};

export default NodeDescriptionTable;
