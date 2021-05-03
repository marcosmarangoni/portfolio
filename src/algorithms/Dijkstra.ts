import { Node } from '../collections';
import { MinHeap } from '../collections';

class Dijkstra {
  grid: Node[][];
  minHeap: MinHeap<Node>;
  startNode: Node;
  endNode: Node;

  gridRows: number;
  gridCols: number;

  constructor(grid: Node[][], startNode: Node, endNode: Node) {
    this.grid = grid;
    this.minHeap = new MinHeap<Node>((value: Node) => value.distance);
    this.startNode = startNode;
    this.endNode = endNode;

    this.gridRows = grid.length;
    this.gridCols = grid[0].length;
  }

  shortestPath(): { shortestPath: Array<Node>, visitedNodes: Array<Node> } | undefined {
    // Fill the min heap.
    this.minHeap.insert(this.startNode);
    let visitedNodes: Array<Node> = [];
    do {
      let vertice = this.minHeap.remove();
      if(!vertice) return undefined;
      let verticeNeighbors = this.getNeighbors(vertice);
      for(let i=0; i<verticeNeighbors.length; i++) {
        // Here we are using weight 1 as a default value.
        // This is the weight to go from one cell to another.
        if(verticeNeighbors[i].distance > vertice.distance + 1 && !verticeNeighbors[i].isWall()) {
          this.minHeap.insert(verticeNeighbors[i]);
          if(!verticeNeighbors[i].isEndVertex()) {
            visitedNodes.push(verticeNeighbors[i]);
          }
          verticeNeighbors[i].distance = vertice.distance + 1;
          verticeNeighbors[i].previous = vertice;
        }
      }
    } while(!this.minHeap.peek()?.isEndVertex() || this.minHeap.isEmpty())

    let currentNode = this.grid[this.endNode.row][this.endNode.col];
    let shortestPath: Array<Node> = []
    while(currentNode.previous) {
      currentNode = currentNode.previous;
      shortestPath.push(currentNode);
    }
    return {
      visitedNodes,
      shortestPath
    };
  }

  getNeighbors(vertice: Node): Array<Node> {
    let neighbors = [];
    if(vertice.row - 1 >= 0) neighbors.push(this.grid[vertice.row - 1][vertice.col]); // Left
    if(vertice.row + 1 < this.gridRows) neighbors.push(this.grid[vertice.row + 1][vertice.col]); // Right
    if(vertice.col - 1 >= 0) neighbors.push(this.grid[vertice.row][vertice.col - 1]); // Up
    if(vertice.col + 1 < this.gridCols) neighbors.push(this.grid[vertice.row][vertice.col + 1]); // Down
    return neighbors;
  }
}

export default Dijkstra;