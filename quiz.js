document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn");
  const nextBtn = document.getElementById("next-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What year was Nike founded?",
      choices: ["1964", "1971", "1980", "1995"],
      answer: "1964",
    },
    {
      question: "What was Nike’s original name before it became Nike?",
      choices: [
        "Blue Ribbon Sports",
        "Track Star Co.",
        "Swoosh Ltd.",
        "Runner’s Choice",
      ],
      answer: "Blue Ribbon Sports",
    },
    {
      question:
        "The famous Nike 'swoosh' logo was designed by a student for how much money?",
      choices: ["$35", "$100", "$500", "$1000"],
      answer: "$35",
    },
    {
      question: "Which slogan is Nike best known for?",
      choices: [
        "Think Different",
        "Impossible is Nothing",
        "Just Do It",
        "Run the World",
      ],
      answer: "Just Do It",
    },
    {
      question: "Which athlete made Nike Air Jordans famous?",
      choices: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Usain Bolt"],
      answer: "Michael Jordan",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  });
  restartBtn.addEventListener("click", () => {
    resultContainer.classList.add("hidden");
    currentQuestionIndex = 0;
    score = 0;
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = "";
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(li, choice));
      choicesList.appendChild(li);
    });
  }
  function selectAnswer(selectedLi, choice) {
    for (const li of choicesList.children) {
      li.classList.remove("bcolor");
    }
    selectedLi.classList.add("bcolor");

    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }

    nextBtn.classList.remove("hidden");
  }

  function showResults() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});
