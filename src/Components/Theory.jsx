import React from 'react';
import {BiSolidRightArrow} from "react-icons/bi"
// import {PiDotOutlineFill} from "react-icons/pi"
import {AiTwotoneStar} from "react-icons/ai"

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
              <div className='font-Mooli'>
               In order to explore or search through all the vertices of a graph or tree in a breadthward motion, or to explore all the vertices at the same level before moving to the next level, we use the breadth-first search (BFS) algorithm. In an unweighted graph, BFS is frequently used to determine the shortest path between two nodes and is also a fundamental building block for many other algorithms.
              </div>

              <div className='flex space-x-2 my-2'>
                <AiTwotoneStar className='mt-1'/>
                <p><strong className='text-xl'>Applications of Breadth First Search :-</strong></p>
              </div>
              <div>
                <ul >
                    <li className='flex ml-4'><BiSolidRightArrow className='mt-1'/><p> Shortest Path and Distance: BFS can be used to find the shortest path between two nodes in an unweighted graph. By running BFS from the source node and stopping when the target node is reached.</p></li>
                    <li className='flex ml-4'><BiSolidRightArrow className='mt-1'/><p>Maze Solving: BFS is often used to find the shortest path through a maze. It can help a robot or computer program navigate through a maze by exploring adjacent cells level by level until the exit is found.</p></li>
                    <li className='flex ml-4'><BiSolidRightArrow className='mt-1'/><p>Network Broadcasting: In computer networks, BFS can be used to broadcast messages or updates to all nodes in a network. This ensures that information reaches all reachable nodes in the most efficient manner.</p></li>
                    <li className='flex ml-4'><BiSolidRightArrow className='mt-1'/><p>Web Crawling: Search engines use BFS to crawl and index web pages. The algorithm starts from a seed URL, explores linked pages, and continues to follow links to discover and index new web content.</p></li>
                    <li className='flex ml-4'><BiSolidRightArrow className='mt-1'/><p>Social Network Analysis: BFS can be applied to analyze social networks. It helps identify connected components, find friends or connections within a certain distance, and understand network structures.</p></li>
                    <li className='flex ml-4'><BiSolidRightArrow className='mt-1'/><p>Shortest Path in a Chessboard: In chess, BFS can be used to find the shortest number of moves required for a knight to reach a particular square on the board. This is known as the knight's tour problem.</p></li>
                    <li className='flex ml-4'><BiSolidRightArrow className='mt-1'/><p>Game Development: BFS is employed in game development for pathfinding and AI behavior. It can help characters or game agents navigate through game environments and make decisions based on the proximity of objects or opponents.</p></li>
                    <li className='flex ml-4'><BiSolidRightArrow className='mt-1'/><p>Recommendation Systems: In recommendation systems, BFS can be used to find similar users or items within a certain distance or level of connection. It helps improve personalized recommendations.</p></li>
                    <li className='flex ml-4'><BiSolidRightArrow className='mt-1'/><p>Dependency Analysis: BFS is used in software engineering to analyze dependencies between modules, classes, or functions in a software project. It helps identify dependencies and their levels.</p></li>
                    
                </ul>
              </div>
            </p> 
          </div>
        </div>
      </div>
    </>
  );
}
