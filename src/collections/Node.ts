import VertexTypes from '../enums/VertexTypes';

class Node {
  row: number;
  col: number;
  previous?: Node;
  distance: number;
  vertexType: VertexTypes;


  constructor(row: number = 0, col: number = 0, distance: number = Infinity, vertexType: VertexTypes = VertexTypes.VERTEX) {
    this.distance = distance;
    this.row = row;
    this.col = col;
    this.previous = undefined;
    this.vertexType = vertexType;
  }

  setPrevious(previous: Node) {
    this.previous = previous;
  }

  isStartVertex(): boolean {
    return this.vertexType === VertexTypes.START_VERTEX;
  }

  isEndVertex(): boolean {
    return this.vertexType === VertexTypes.END_VERTEX;
  }

  isWall(): boolean {
    return this.vertexType === VertexTypes.WALL;
  }
}

export default Node;