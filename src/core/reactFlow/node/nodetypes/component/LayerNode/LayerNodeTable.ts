import { BlockType } from '../../../../block';
import DefaultNode from './DefaultNode';
import InputNode from './inputNode';
import CommentNode from './commentNode';

type Key = keyof typeof BlockType;
type LayerNodeTableType = {
	[K in Key]: any;
};

const LayerNodeTable: LayerNodeTableType = {
	Activation: DefaultNode,
	AveragePooling2D: DefaultNode,
	BatchNormalization: DefaultNode,
	Conv2D: DefaultNode,
	Dense: DefaultNode,
	Dropout: DefaultNode,
	Flatten: DefaultNode,
	Input: InputNode,
	MaxPool2D: DefaultNode,
	Rescaling: DefaultNode,
	Reshape: DefaultNode,
	// Math
	Abs: DefaultNode,
	Ceil: DefaultNode,
	Floor: DefaultNode,
	Round: DefaultNode,
	Sqrt: DefaultNode,
	Add: DefaultNode,
	Subtract: DefaultNode,
	Log: DefaultNode,

	// Util
	Comment: CommentNode,
};

export default LayerNodeTable;
