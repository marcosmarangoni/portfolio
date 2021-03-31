import React, {useEffect, useState} from 'react';
import VertexTypes from '../../enums/VertexTypes';

interface NodeProps {
  type: VertexTypes,
  row: number,
  col: number,
  onMouseDown?: Function,
  onMouseUp?: Function,
  onMouseMove: Function
}

function Node(props: NodeProps) {

  const [nodeType, setNodeType] = useState(VertexTypes.VERTEX)

  useEffect(() => {
    setNodeType(props.type);
  }, [])

  const getNodeClassByType = (): string => {
    switch(nodeType) {
      case VertexTypes.START_VERTEX:
        return 'node-start';
      case VertexTypes.END_VERTEX:
        return 'node-end';
      case VertexTypes.VISITED_VERTICE:
        return 'node-visited';
      case VertexTypes.SHORT_PATH:
        return 'short-path';
      case VertexTypes.WALL:
        return 'wall';
      default:
        return 'node-default';
    }
  }

  return(
    <div
     className={`${getNodeClassByType()} node`} 
     onMouseMove={(e) => props.onMouseMove(props.row, props.col)}>
    </div>
  );
}

export default Node;