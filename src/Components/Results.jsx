import React from "react";

function Results() {
  return (
    <div>
      <>
        <div className="container">
          <div className="box" id="Result">
            <div className="title">
              <h2 className="font-Robo text-3xl text-center">Results</h2>
            </div>
            <div className="desc1">
              <p className="desc font-Robo">
              DFS explores graph nodes deeply, traversing as far as possible along each branch before backtracking. It prioritizes depth over breadth, making it memory-efficient. It's used for tasks like topological sorting, finding connected components, and cycle detection.
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Results;
