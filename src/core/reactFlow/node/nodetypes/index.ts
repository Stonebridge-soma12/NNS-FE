import { BlockCategory } from '../../block';
import LayerNode from './component/LayerNode';
import CommentNode from './component/LayerNode/commentNode';

export const nodeTypes = {
	[BlockCategory.Layer]: LayerNode,
	[BlockCategory.Math]: LayerNode,
	[BlockCategory.Util]: LayerNode,
};

export default nodeTypes;
