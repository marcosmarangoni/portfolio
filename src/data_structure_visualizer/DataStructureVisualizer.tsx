import React, { useEffect, useState } from 'react';

import { VertexTypes } from '../enums';
import { Dijkstra, MazeGeneratorBreadthFirst, MazeGeneratorRecursiveDivision  } from '../algorithms';
import { Node } from '../collections';
import { NodeUI } from './';

import { cloneDeep } from 'lodash';

function DataStructureVisualizer() {

  const GRID_SIZE: string = '27px';

  const COLS: number = 25;
  const ROWS: number = 25;

  let [startCol, setStartCol] = useState(1);
  let [startRow, setStartRow] = useState(ROWS/2);

  let [endCol, setEndCol] = useState(COLS - 2);
  let [endRow, setEndRow] = useState(ROWS/2);

  let [grid, setGrid] = useState(Array.from(Array(ROWS), () => new Array(COLS)));
  let [visitedNodes, setVisitedNodes] = useState(Array<Node>());
  let [insertWall, setInsertWall] = useState(false);

  useEffect(() => {
    startGrid();
  }, [])


  let startGrid = () => {
    let tmpGrid = Array.from(Array(ROWS), () => new Array(COLS));
    for(let i = 0; i<tmpGrid.length; i++) {
      for(let j=0; j<tmpGrid[i].length; j++) {
        if(i === startRow && j=== startCol) tmpGrid[i][j] = new Node(i, j, 0, VertexTypes.START_VERTEX);
        else if(i === endRow && j=== endCol) tmpGrid[i][j] = new Node(i, j, Infinity, VertexTypes.END_VERTEX);
        else tmpGrid[i][j] = new Node(i, j);
      }
    }
    setGrid(tmpGrid);
  }

  const solvePath = (e: any) => {
    if(visitedNodes.length > 0) {
      console.log('RESET');
      return;
    }

    console.log(grid);
    const dijkstra = new Dijkstra(grid, grid[startRow][startCol], grid[endRow][endCol]);
    const paths = dijkstra.shortestPath();
    if(!paths) return;
    setVisitedNodes(paths.visitedNodes);
    let newGrid = cloneDeep(grid);
    paths.visitedNodes.forEach((n,i) => {
      setTimeout(() => {
        newGrid = cloneDeep(newGrid);
        newGrid[n.row][n.col] = new Node(n.row,n.col,n.distance,VertexTypes.VISITED_VERTICE);
        newGrid[n.row][n.col].previous = n.previous;
        setGrid(newGrid);
        if(i === paths.visitedNodes.length - 1) {
          setTimeout(() => {
            animateShortestPath(cloneDeep(newGrid), paths.shortestPath)
          }, 2000);
        }
      }, i * 40);
    });
  }

  const animateShortestPath = (newGrid: Node[][] , shortestPath: Array<Node>) => {
    shortestPath.pop();
    shortestPath.forEach((n,i) => {
      setTimeout(() => {
        newGrid = cloneDeep(newGrid);
        newGrid[n.row][n.col] = new Node(n.row,n.col,n.distance,VertexTypes.SHORT_PATH);
        newGrid[n.row][n.col].previous = n.previous;
        setGrid(newGrid);
      }, i * 40);
    });
  }

  const reset = () => {
    startGrid();
    setVisitedNodes(Array<Node>());
  }

  const generateRandomMaze = () => {
    let newGrid = cloneDeep(grid);
    let mazeGenerator = new MazeGeneratorRecursiveDivision(ROWS,COLS);
    console.log(mazeGenerator.maze);
    /*let result = mazeGenerator.initArray;
    if(!result) return;*/
    console.log(mazeGenerator.maze);
    mazeGenerator.maze.forEach((row, rIdx) => {
      row.forEach((col, cIdx) => {
        if(col.includes('entrance')) {
          newGrid[rIdx][cIdx].vertexType = VertexTypes.START_VERTEX;
          newGrid[rIdx][cIdx].distance = 0;
          setStartCol(cIdx);
          setStartRow(rIdx);
          console.log('START ROW ' + rIdx);
          console.log('START COL ' + cIdx);
        } else if(col.includes('exit')) {
          newGrid[rIdx][cIdx].vertexType = VertexTypes.END_VERTEX;
          newGrid[rIdx][cIdx].distance = Infinity;
          setEndCol(cIdx);
          setEndRow(rIdx);
          console.log('END ROW ' + rIdx);
          console.log('END COL ' + cIdx);
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
    <React.Fragment>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', padding: '2em' }}>
        <button style={{ margin: '1em' }} onClick={solvePath}>Solve Path</button>
        <button style={{ margin: '1em' }} onClick={reset}>Reset</button>
        <button style={{ margin: '1em' }} onClick={generateRandomMaze}>Random Maze</button>
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
    </React.Fragment>
  )
}

export default DataStructureVisualizer;