import Node from '../collections/Node';

function toggleNode(grid: Node[][], node: Node): Node[][] {
  return grid.map((r, rowIndex) => {
    return node.row !== rowIndex ? r : r.map((c, colIndex) => {
      return node.col !== colIndex ? c : node
    });
  });
}

export default {
  toggleNode
}