import React, { useState } from "react";

const App = () => {
  const questionsData = [
    {
      s_no: 1,
      question: "Which data structure is commonly used for implementing DFS?",
      answers: [
        { text: "Queue", isCorrect: false },
        { text: "Stack.", isCorrect: true },
        { text: "Linked List", isCorrect: false },
        { text: "Array", isCorrect: false },
      ],
    },
    {
      s_no: 2,
      question: "In DFS, which vertex is visited first ?",
      answers: [
        { text: "The vertex with the lowest value", isCorrect: false },
        { text: "The vertex with the highest value", isCorrect: false },
        { text: "The vertex with the most neighbors", isCorrect: false },
        { text: "The starting vertex", isCorrect: true },
      ],
    },
    {
      s_no: 3,
      question:
        "What is the time complexity of DFS on a graph with V vertices and E edges ?",
      answers: [
        { text: "O(V)", isCorrect: false },
        { text: "O(E)", isCorrect: false },
        { text: "O(V+E)", isCorrect: true },
        { text: "O(V*E)", isCorrect: false },
      ],
    },
    {
      s_no: 4,
      question:
        " Identify the graph from the following for which DFS is well-suited for?",
      answers: [
        { text: " A small cyclic graph", isCorrect: true },
        { text: "A directed acyclic graph (DAG)", isCorrect: false },
        { text: "A fully connected graph.", isCorrect: false },
        { text: "A graph with heavy backtracking", isCorrect: false },
      ],
    },
    {
      s_no: 5,
      question: "DFS algorithm is primarily used for _______________.",
      answers: [
        { text: " Topological Sorting", isCorrect: true },
        { text: " Encryption", isCorrect: false },
        { text: "Searching", isCorrect: false },
        { text: "Compression", isCorrect: false },
      ],
    },
    {
      s_no: 6,
      question:
        "  which of the following tree traversal technique use DFS.....",
      answers: [
        { text: " Preorder traversal", isCorrect: false },
        { text: " Inorder traversal", isCorrect: true },
        { text: "Postorder traversal", isCorrect: false },
        { text: "Level-order traversal", isCorrect: false },
      ],
    },
    {
      s_no: 7,
      question: "Which of the following is NOT a common application of DFS?",
      answers: [
        { text: "Solving Sudoku puzzles", isCorrect: true },
        {
          text: "Finding the shortest path in an unweighted graph",
          isCorrect: false,
        },
        { text: "Web crawling ", isCorrect: false },
        { text: "Network routing", isCorrect: false },
      ],
    },
    {
      s_no: 8,
      question:
        " What is the main advantage of using DFS over Breadth-First Search (BFS)?",
      answers: [
        { text: "DFS reaches deep node faster", isCorrect: true },
        { text: "DFS uses less memory", isCorrect: false },
        { text: "DFS uses less memory", isCorrect: false },
        { text: "DFS guarantees completeness", isCorrect: false },
      ],
    },
    {
      s_no: 9,
      question:
        "In DFS traversal, if a node has multiple unvisited neighbors, which one is typically explored first?",
      answers: [
        {
          text: "The node with the lowest value",
          isCorrect: false,
        },
        {
          text: "The node with the highest value",
          isCorrect: false,
        },
        {
          text: "The first encountered neighbor in the adjacency list",
          isCorrect: true,
        },
        { text: "The last encountered neighbor in the adjacency list", isCorrect: false },
      ],
    },
    {
      s_no: 10,
      question:
        "In a Depth First Search (DFS) traversal of a directed graph, what is the purpose of maintaining a [visited] set?",
      answers: [
        {
          text: "To ensure that every node is visited exactly once during the traversal",
          isCorrect: false,
        },
        {
          text: "To prevent revisiting the same node within the same recursive call stack",
          isCorrect: true,
        },
        {
          text: "To store the nodes in the order they are visited for later analysis",
          isCorrect: false,
        },
        { text: "To keep track of the nodes that have been removed from the graph", isCorrect: false },
      ],
    },
    
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex + 1 < questionsData.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  const renderQuestion = (question) => {
    return (
      <div className="flex flex-col items-center font-Mooli w-full">
        <div className="text-xl font-serif border-black border-2 p-6 rounded-lg bg-slate-100">
          <h2>{"Question " + question.s_no + ": " + question.question}</h2>
        </div>
        <div className="grid grid-cols-2 ">
          {question.answers.map((answer, index) => (
            <div
              key={index}
              className="text-center border-black border-2 my-4 p-6 mt-4 bg-slate-200 shadow-xl drop-shadow-xl rounded-xl hover:bg-slate-600 hover:text-white hover:text-lg mx-2"
            >
              <button onClick={() => handleAnswerButtonClick(answer.isCorrect)}>
                {answer.text}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderResult = () => {
    return (
      <div className="border-black border-2 text-center flex flex-col items-center">
        <h2 className="font-serif text-2xl font-bold m-2">Quiz Result</h2>
        <p className="font-serif text-2xl font-bold m-2">Your Score: {score}</p>
        <div className="font-serif text-lg font-bold text-justify mx-12 flex flex-wrap justify-center">
          {questionsData.map((question) => (
            <div className="question-answer flex flex-col items-center" key={question.s_no}>
              <p>
                <button onClick={() => setCurrentQuestionIndex(question.s_no - 1)} className="ml-2 focus:outline-none">
                  <span className={`rounded-full h-8 w-8 flex items-center justify-center text-white ${question.answers.find((a) => a.isCorrect).isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                    {question.s_no}
                  </span>
                </button>
              </p>
              <br />
              {/* Remove the question and answer display */}
            </div>
          ))}
        </div>
        <button onClick={restartQuiz} className="border-2 m-4 md:ml-20 rounded-lg shadow-2xl drop-shadow-xl p-2 bg-blue-900 font-sans text-white font-semibold hover:transform hover:scale-110 hover:bg-opacity-75 hover:duration-300">Restart Quiz</button>
      </div>
    );
  };
  
  return (
    <div>
      <h1 className="text-4xl font-bold m-4 text-center">Quiz</h1>
      <div className="border-black rounded-md border-2 mx-20 my-6 p-6 bg-gray-300 shadow-2xl drop-shadow-xl">
        {showResult
          ? renderResult()
          : renderQuestion(questionsData[currentQuestionIndex])}
      </div>
    </div>
  );
};

export default App;