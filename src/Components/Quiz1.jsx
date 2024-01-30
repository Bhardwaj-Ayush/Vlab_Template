import React, { useState } from "react";

const App = () => {
  const questionsData = [
    {
      s_no: 1,
      question: "Which data structure is commonly used for implementing BFS?",
      answers: [
        { text: "Queue", isCorrect: true },
        { text: "Stack.", isCorrect: false },
        { text: "Linked List", isCorrect: false },
        { text: "Array", isCorrect: false },
      ],
    },
    {
      s_no: 2,
      question: "In BFS, which vertex is visited first ?",
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
        "What is the time complexity of BFS on a graph with V vertices and E edges ?",
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
        " Identify the graph from the following for which BFS is well-suited for?",
      answers: [
        { text: " A small cyclic graph", isCorrect: false },
        { text: "A directed acyclic graph (DAG)", isCorrect: true },
        { text: "A fully connected graph.", isCorrect: false },
        { text: "A graph with heavy backtracking", isCorrect: false },
      ],
    },
    {
      s_no: 5,
      question: "BFS algorithm is primarily used for _______________.",
      answers: [
        { text: " Sorting", isCorrect: false },
        { text: " Encryption", isCorrect: false },
        { text: "Searching", isCorrect: true },
        { text: "Compression", isCorrect: false },
      ],
    },
    {
      s_no: 6,
      question:
        "  which of the following tree traversal technique use BFS.....",
      answers: [
        { text: " Preorder traversal", isCorrect: false },
        { text: " Inorder traversal", isCorrect: false },
        { text: "Postorder traversal", isCorrect: false },
        { text: "Level-order traversal", isCorrect: true },
      ],
    },
    {
      s_no: 7,
      question: "Which of the following is NOT a common application of BFS?",
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
        " What is the main advantage of using BFS over Depth-First Search (DFS)?",
      answers: [
        { text: "BFS is faster", isCorrect: false },
        { text: "BFS uses less memory", isCorrect: false },
        { text: "BFS uses less memory", isCorrect: false },
        { text: "BFS guarantees completeness", isCorrect: true },
      ],
    },
    {
      s_no: 9,
      question:
        "In case there are multiple shortest paths between the two nodes while using BFS on an unweighted graph, then what will be the outcome of the BFS?",
      answers: [
        {
          text: "BFS will return the path with the fewest nodes",
          isCorrect: false,
        },
        {
          text: "BFS will return the path with the smallest sum of edge weights",
          isCorrect: false,
        },
        {
          text: "BFS will return all possible shortest paths",
          isCorrect: true,
        },
        { text: "BFS will return a random shortest path", isCorrect: false },
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
        <div className="flex flex-wrap justify-center">
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
                  <span className={`rounded-full h-8 w-8 flex items-center justify-center text-white ${question.answers.find((a) => a.isCorrect) ? 'bg-green-500' : 'bg-red-500'}`}>
                    {question.s_no}
                  </span>
                </button>
              </p>
              <br />
              {currentQuestionIndex === question.s_no - 1 && (
                <div>
                  <p>{question.question}</p>
                  <div>
                    {question.answers.map((answer, index) => (
                      <p key={index}>{answer.text}</p>
                    ))}
                  </div>
                </div>
              )}
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
