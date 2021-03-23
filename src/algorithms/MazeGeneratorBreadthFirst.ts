import { random } from "lodash";

class Node {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class MazeGenerator {
  stack: Array<Node>;
  maze: Array<Array<number>>;
  dimension: number;

  constructor(dim: number) {
    this.dimension = dim;
    this.maze = Array.from(Array(dim), () => Array(dim));
    this.stack = Array();
  }

  generateMaze(): Array<Array<number>> | void {
    this.stack.push(new Node(0,0));
    while(this.stack.length !== 0) {
      let next = this.stack.pop();
      if(!next) return;
      if(this.validNextNode(next)) {
        this.maze[next.y][next.x] = 1;
        let neighbors: Array<Node> = this.findNeighbors(next);
        this.randomlyAddNodesToStack(neighbors);
      }
    }
    return this.maze;
  }

  findNeighbors(node: Node) {
    let neighbors: Array<Node> = Array();
    for (let y = node.y-1; y < node.y+2; y++) {
        for (let x = node.x-1; x < node.x+2; x++) {
            if (this.pointOnGrid(x, y) && this.pointNotCorner(node, x, y)
                && this.pointNotNode(node, x, y)) {
                neighbors.push(new Node(x, y));
            }
        }
    }
    return neighbors;
  }

  randomlyAddNodesToStack(nodes: Array<Node>) {
    let targetIndex: number;
    while (nodes.length !== 0) {
        targetIndex = random(nodes.length - 1);
        let removedNode = nodes.splice(targetIndex, 1)[0];
        this.stack.push(removedNode);
    }
  }

  validNextNode(node: Node): boolean {
    let numNeighboringOnes: number = 0;
    for(let y = node.y - 1; y < node.y + 2; y++) {
      for(let x = node.x - 1; x < node.x + 2; x++) {
        if (this.pointOnGrid(x, y) && this.pointNotNode(node, x, y) && this.maze[y][x] == 1) {
          numNeighboringOnes++;
        }
      }
    }
    return (numNeighboringOnes < 3) && this.maze[node.y][node.x] !== 1;
  }

  pointOnGrid(x: number, y: number) {
    return x >= 0 && y >= 0 && x < this.dimension && y < this.dimension;
  }

  pointNotNode(node: Node, x: number, y: number) {
    return !(x == node.x && y == node.y);
  }

  pointNotCorner(node: Node, x: number, y: number) {
    return (x == node.x || y == node.y);
  }

}

export default MazeGenerator;