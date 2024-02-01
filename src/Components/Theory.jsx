import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
// import {PiDotOutlineFill} from "react-icons/pi"
import { AiTwotoneStar } from "react-icons/ai";

export default function Theory() {
  return (
    <>
      <div className="container ">
        <div className="box" id="theory">
          <div className="title">
            <h1 className=" text-3xl text-center font-Robo">Theory</h1>
          </div>
          <div className="desc1 font-Mooli">
            <p className="desc">
              <div className="font-Mooli">
                In order to systematically explore or search through all the
                vertices of a graph or tree in a depthward motion, or to explore
                as far as possible along each branch before backtracking, we use
                the depth-first search (DFS) algorithm. In an unweighted graph,
                DFS is frequently used to traverse the entire graph or tree,
                visiting as deep as possible along each branch before
                backtracking
              </div>
              <div className="flex space-x-2 my-2">
                <AiTwotoneStar className="mt-1" />
                <p>
                  <strong className="text-xl">
                    Applications of Depth First Search :-
                  </strong>
                </p>
              </div>
              <div>
                <ul>
                  <li className="flex ml-4">
                    <BiSolidRightArrow className="mt-1" />
                    <p>
                      {" "}
                      Traversal and Search: DFS is used to traverse or search through all the vertices of a graph or tree, exploring as far as possible along each branch before backtracking.
                    </p>
                  </li>
                  <li className="flex ml-4">
                    <BiSolidRightArrow className="mt-1" />
                    <p>
                    Cycle Detection: DFS can be used to detect cycles in a graph by keeping track of visited nodes and back edges.
                    </p>
                  </li>
                  <li className="flex ml-4">
                    <BiSolidRightArrow className="mt-1" />
                    <p>
                    Topological Sorting: DFS can be employed to perform topological sorting of a directed acyclic graph (DAG), which is useful in scheduling tasks or dependencies
                    </p>
                  </li>
                  <li className="flex ml-4">
                    <BiSolidRightArrow className="mt-1" />
                    <p>
                    Connected Components: DFS can identify connected components in an undirected graph by visiting all nodes reachable from a given starting node.
                    </p>
                  </li>
                  <li className="flex ml-4">
                    <BiSolidRightArrow className="mt-1" />
                    <p>
                    Path Finding: DFS can find a path between two nodes in a graph, although it does not guarantee the shortest path.
                    </p>
                  </li>
                  <li className="flex ml-4">
                    <BiSolidRightArrow className="mt-1" />
                    <p>
                    Maze Generation: DFS is often used to generate mazes by recursively carving passages through a grid until all reachable areas are explored.
                    </p>
                  </li>
                  <li className="flex ml-4">
                    <BiSolidRightArrow className="mt-1" />
                    <p>
                    Game Tree Searching: DFS is used in game tree searching algorithms like minimax or alpha-beta pruning to explore possible moves and outcomes in games like chess or tic-tac-toe.
                    </p>
                  </li>
                  <li className="flex ml-4">
                    <BiSolidRightArrow className="mt-1" />
                    <p>
                    Strongly Connected Components: DFS can find strongly connected components in a directed graph, which are sets of nodes where every node is reachable from every other node in the same component.
                    </p>
                  </li>
                  <li className="flex ml-4">
                    <BiSolidRightArrow className="mt-1" />
                    <p>
                    Backtracking: DFS is a fundamental technique used in backtracking algorithms to systematically search for solutions to combinatorial problems like the N-Queens problem or Sudoku.
                    </p>
                  </li>
                </ul>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
