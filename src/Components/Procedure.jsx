import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { PiDotOutlineFill } from "react-icons/pi";

export default function Procedure() {
  return (
    <>
      <div className="container">
        <div className="box" id="procedure">
          <div class="title">
            <h2 className="heading font-serif text-3xl font-bold text-center my-8">
              Procedure
            </h2>
          </div>
          <div className="desc1 font-Mooli">
            <p className="font-bold mx-20 text-xl text-justify">
              DFS starts from a source node and explores as far as possible
              along each branch before backtracking. It systematically explores
              nodes in depth, visiting the deepest unvisited node first.
            </p>
            <div className="flex space-x-2 my-2 mx-20">
              <BiSolidRightArrow className="mt-1" />
              <p>
                <strong className="text-xl">
                  HOW DFS WORKS : The basic theory and steps of DFS:
                </strong>
              </p>
            </div>
            <div className="flex mx-24">
              <BiSolidRightArrow className="mt-1" />
              <p>
                <strong className="text-xl">Initialization:</strong>
              </p>
            </div>
            <div>
              <ul className="mx-28">
                <li className="flex ml-4">
                  <PiDotOutlineFill className="mt-1" />
                  <span>Choose a starting node as the source.</span>
                </li>
                <li className="flex ml-4">
                  <PiDotOutlineFill className="mt-1" />
                  <span>
                    Initialize a stack and push the source node onto it.
                  </span>
                </li>
                <li className="flex ml-4">
                  <PiDotOutlineFill className="mt-1" />
                  <span>
                    Maintain a set or array to keep track of visited nodes.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex mx-24">
              <BiSolidRightArrow className="mt-1" />
              <p>
                <strong className="text-xl">Exploration:</strong>
              </p>
            </div>
            <div>
              <ul className="mx-28">
                <li className="flex ml-4">
                  <PiDotOutlineFill className="mt-1" />
                  <span>While the stack is not empty:</span>
                </li>
                <li className="flex ml-4">
                  <PiDotOutlineFill className="mt-1" />
                  <span>Pop a node from the top of the stack.</span>
                </li>
                <li className="flex ml-4">
                  <PiDotOutlineFill className="mt-1" />
                  <span>Visit the popped node.</span>
                </li>
                <li className="flex ml-4">
                  <PiDotOutlineFill className="mt-1" />
                  <span>
                    Push all unvisited neighbors of the popped node onto the
                    stack in reverse order
                  </span>
                </li>
                <li className="flex ml-4">
                  <PiDotOutlineFill className="mt-1" />
                  <span>Mark the popped node as visited.</span>
                </li>
              </ul>
            </div>
            <div className="flex mx-20">
              <BiSolidRightArrow className="mt-1" />
              <p>
                <strong className="text-xl">Termination:</strong>
              </p>
            </div>
            <div>
              <ul className="mx-32">
                <li className="flex">
                  <PiDotOutlineFill className="mt-1" />
                  <span>
                    Continue this process until the stack becomes empty.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
