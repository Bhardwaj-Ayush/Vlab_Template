import React from 'react'
import {BiSolidRightArrow} from "react-icons/bi"
import {PiDotOutlineFill} from "react-icons/pi"

export default function Procedure() {
  return (
    <>      
            <div className="container">
                    <div className="box" id="procedure">
                        <div class="title">
                            <h2 className="heading font-serif text-3xl font-bold text-center my-8">Procedure</h2>
                        </div>
                        <div className="desc1 font-Mooli">
                          <p className='font-bold'>BFS starts from a source node, explores its neighbors, and systematically explores nodes level by level, ensuring that nodes closer to the source are visited before nodes farther away. This process continues until all reachable nodes have been visited or until a specific goal or condition is met. BFS is an effective algorithm for searching or traversing graphs in a structured manner.</p>
                        <div className='flex space-x-2 my-2'>
                <BiSolidRightArrow className='mt-1'/>
                <p><strong className='text-xl'>HOW BFS WORKS : The basic theory and steps of BFS:</strong></p>
              </div>
              <div className='flex'>
                <BiSolidRightArrow className='mt-1'/>
                <p><strong className='text-xl'>Initialization:</strong></p>
              </div>
              <div>
                <ul >
                    <li className='flex ml-4'><PiDotOutlineFill className='mt-1'/><span>Choose a starting node as the source.</span></li>
                    <li className='flex ml-4'><PiDotOutlineFill className='mt-1'/><span>Initialize a queue and enqueue the source node..</span></li>
                    <li className='flex ml-4'><PiDotOutlineFill className='mt-1'/><span>Maintain a set or array to keep track of visited nodes.</span></li>
                </ul>
              </div>
              <div className='flex'>
                <BiSolidRightArrow className='mt-1'/>
                <p><strong className='text-xl'>Exploration:</strong></p>
              </div>
              <div>
                <ul >
                    <li className='flex ml-4'><PiDotOutlineFill className='mt-1'/><span>While the queue is not empty:</span></li>
                    <li className='flex ml-4'><PiDotOutlineFill className='mt-1'/><span>Dequeue a node from the front of the queue.</span></li>
                    <li className='flex ml-4'><PiDotOutlineFill className='mt-1'/><span>Visit the dequeued node.</span></li>
                    <li className='flex ml-4'><PiDotOutlineFill className='mt-1'/><span>Enqueue all unvisited neighbors of the dequeued node.</span></li>
                    <li className='flex ml-4'><PiDotOutlineFill className='mt-1'/><span>Mark the dequeued node as visited.</span></li>
                </ul>
              </div>
              <div className='flex'>
                <BiSolidRightArrow className='mt-1'/>
                <p><strong className='text-xl'>Termination:</strong></p>
              </div>
              <div>
                <ul >
                    <li className='flex ml-4'><PiDotOutlineFill className='mt-1'/><span>Continue this process until the queue becomes empty.</span></li>
                </ul>
              </div>
                        </div>
                    </div>
            </div>
    </>
  )
}
