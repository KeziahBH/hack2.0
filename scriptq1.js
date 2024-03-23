const quizData = [
    {
      question: "Who is the founder of html?",
      options: ["Petter", "TIMBL", "Romeneon", "Dennies"],
      answer: "TIMBL"
    },
    {
      question: "Which of the following is used to read an HTML page and render it?",
      options: ["web server", "web network", "web browser", "web matrix"],
      answer: "web browser"
    },
    {
      question: "In which part of the HTML metadata is contained?",
      options: ["head tag", "title tag", "body tag", "html tag"],
      answer: "head tag"
    }
  ];
  
  const quizContainer = document.getElementById('quiz-container');
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const submitButton = document.getElementById('submit-btn');
  const resultElement = document.getElementById('result');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
  
    currentQuestion.options.forEach(option => {
      const optionButton = document.createElement('button');
      optionButton.textContent = option;
      optionButton.addEventListener('click', function() {
        checkAnswer(option);
      });
      optionsElement.appendChild(optionButton);
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quizContainer.style.display = 'none';
    resultElement.textContent = `Your score: ${score}/${quizData.length}`;
    resultElement.style.display = 'block';
  }
  
  submitButton.addEventListener('click', loadQuestion);
  loadQuestion();
  