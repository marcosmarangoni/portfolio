import React, { useEffect, useState } from 'react';

import { VertexTypes } from '../../enums';
import { Dijkstra, MazeGeneratorRecursiveDivision, Utils  } from '../../algorithms';
import { Node } from '../../collections';
import { NodeUI } from '.';

import { cloneDeep, reject } from 'lodash';

function DataStructureVisualizer() {

  const GRID_SIZE: string = '27px';

  const ROWS: number = 21;
  const COLS: number = 31;
  const ANIMATION_DELAY: number = 15;

  let [start, setStart] = useState({ row: ROWS/2, col: 1 });
  let [end, setEnd] = useState({ row: ROWS/2, col: COLS - 2 });

  let [grid, setGrid] = useState(Array.from(Array(ROWS), () => new Array(COLS)));
  let [visitedNodes, setVisitedNodes] = useState(Array<Node>());
  let [insertWall, setInsertWall] = useState(false);

  useEffect(() => {
    reset();
  }, [])

  const generateRandomMaze = () => {
    let newGrid = cloneDeep(grid);
    let mazeGenerator = new MazeGeneratorRecursiveDivision(ROWS,COLS);
    mazeGenerator.maze.forEach((row, rIdx) => {
      row.forEach((col, cIdx) => {
        if(col.includes('entrance')) {
          newGrid[rIdx][cIdx].vertexType = VertexTypes.START_VERTEX;
          newGrid[rIdx][cIdx].distance = 0;
          setStart({ row: rIdx, col: cIdx });
        } else if(col.includes('exit')) {
          newGrid[rIdx][cIdx].vertexType = VertexTypes.END_VERTEX;
          newGrid[rIdx][cIdx].distance = Infinity;
          setEnd({ row: rIdx, col: cIdx });
        } else if(col.includes('wall')) {
          newGrid[rIdx][cIdx].vertexType = VertexTypes.WALL;
          newGrid[rIdx][cIdx].distance = Infinity;
        } else {
          newGrid[rIdx][cIdx].vertexType = VertexTypes.VERTEX;
          newGrid[rIdx][cIdx].distance = Infinity;
        }
      });
    });
    setGrid(newGrid);
  }

  const solvePath = async (e: any) => {
    const dijkstra = new Dijkstra(grid, grid[start.row][start.col], grid[end.row][end.col]);
    const paths = dijkstra.shortestPath();
    if(!paths || visitedNodes.length > 0) return;
    setVisitedNodes(paths.visitedNodes);

    let newGrid = cloneDeep(grid);
    for(let i=0; i<paths.visitedNodes.length; i++) {
      newGrid = await generateAnimationPromise(newGrid, paths.visitedNodes[i]);
    }
    await new Promise((resolve, reject) => setTimeout(resolve, 2000));
    for(let i=0; i<paths.shortestPath.length - 1; i++) {
      newGrid = await generateAnimationPromise(newGrid, paths.shortestPath[i], true);
    }
  }

  const reset = () => {
    let tmpGrid = Array.from(Array(ROWS), () => new Array(COLS));
    for(let i = 0; i<tmpGrid.length; i++) {
      for(let j=0; j<tmpGrid[i].length; j++) {
        tmpGrid[i][j] = new Node(i, j);
      }
    }
    setGrid(tmpGrid);
    setVisitedNodes(Array<Node>());
  }

  const generateAnimationPromise = (newGrid: Node[][], node: Node, shortPath = false): Promise<Node[][]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let newNode = new Node(node.row,node.col,node.distance, shortPath ? VertexTypes.SHORT_PATH : VertexTypes.VISITED_VERTICE);
        newNode.previous = node.previous;
        newGrid = Utils.toggleNode(newGrid, newNode);
        setGrid(newGrid);
        resolve(newGrid);
      }, ANIMATION_DELAY);
    });
  }

  const onMouseDown = (e: any) => {
    setInsertWall(true);
  }
  const onMouseUp = (e: any) => {
    setInsertWall(false);
  }

  const onMouseMove = (row: number, col: number) => {
    if(insertWall && grid[row][col].vertexType !== VertexTypes.WALL) {
      let newGrid = cloneDeep(grid);
      newGrid[row][col].vertexType = VertexTypes.WALL;
      setGrid(newGrid);
    }
  }

  return(
    <div style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000000 100%)` }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', paddingTop: '6rem' }}>
        <button className="btn btn-primary" style={{ margin: '1em' }} onClick={solvePath}>Solve Path</button>
        <button className="btn btn-primary" style={{ margin: '1em' }} onClick={reset}>Reset</button>
        <button className="btn btn-primary" style={{ margin: '1em' }} onClick={generateRandomMaze}>Random Maze</button>
      </div>
      <div className="flex-container-centered">
        <div 
        className="grid-container" 
        style={{ gridTemplateColumns: `repeat(${COLS}, ${GRID_SIZE})`, gridAutoRows: GRID_SIZE }}
        onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}>
          { grid.map((row,i) => row.map((col: Node, j) => 
          <NodeUI
           row={i} 
           col={j} 
           type={col.vertexType} 
           key={`node[${i}][${j}][${col.vertexType}]`}
           onMouseMove={onMouseMove} />))}
        </div>
      </div>
    </div>
  )
}

export default DataStructureVisualizer;