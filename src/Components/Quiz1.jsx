import React, { useState } from "react";

const App = () => {
  const questionsData = [
    {
      s_no: 1,
      question: "Question?",
      answers: [
        { text: "Option 1", isCorrect: false },
        { text: "Option 2", isCorrect: true },
        { text: "Option 3", isCorrect: false },
        { text: "Option 4", isCorrect: false },
      ],
    },
    {
      s_no: 2,
      question: "Question?",
      answers: [
        { text: "Option 1", isCorrect: false },
        { text: "Option 2", isCorrect: true },
        { text: "Option 3", isCorrect: false },
        { text: "Option 4", isCorrect: false },
      ],
    },
    {
      s_no: 3,
      question: "Question?",
      answers: [
        { text: "Option 1", isCorrect: false },
        { text: "Option 2", isCorrect: true },
        { text: "Option 3", isCorrect: false },
        { text: "Option 4", isCorrect: false },
      ],
    },
    {
      s_no: 4,
      question: "Question?",
      answers: [
        { text: "Option 1", isCorrect: false },
        { text: "Option 2", isCorrect: true },
        { text: "Option 3", isCorrect: false },
        { text: "Option 4", isCorrect: false },
      ],
    },
    {
      s_no: 5,
      question: "Question?",
      answers: [
        { text: "Option 1", isCorrect: false },
        { text: "Option 2", isCorrect: true },
        { text: "Option 3", isCorrect: false },
        { text: "Option 4", isCorrect: false },
      ],
    },
    {
      s_no: 6,
      question: "Question?",
      answers: [
        { text: "Option 1", isCorrect: false },
        { text: "Option 2", isCorrect: true },
        { text: "Option 3", isCorrect: false },
        { text: "Option 4", isCorrect: false },
      ],
    },
    {
      s_no: 7,
      question: "Question?",
      answers: [
        { text: "Option 1", isCorrect: false },
        { text: "Option 2", isCorrect: true },
        { text: "Option 3", isCorrect: false },
        { text: "Option 4", isCorrect: false },
      ],
    },
    {
      s_no: 8,
      question: "Question?",
      answers: [
        { text: "Option 1", isCorrect: false },
        { text: "Option 2", isCorrect: true },
        { text: "Option 3", isCorrect: false },
        { text: "Option 4", isCorrect: false },
      ],
    },
    {
      s_no: 9,
      question: "Question?",
      answers: [
        { text: "Option 1", isCorrect: false },
        { text: "Option 2", isCorrect: true },
        { text: "Option 3", isCorrect: false },
        { text: "Option 4", isCorrect: false },
      ],
    },
    {
      s_no: 10,
      question: "Question?",
      answers: [
        { text: "Option 1", isCorrect: false },
        { text: "Option 2", isCorrect: true },
        { text: "Option 3", isCorrect: false },
        { text: "Option 4", isCorrect: false },
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