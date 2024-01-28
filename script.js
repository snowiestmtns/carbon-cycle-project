const quizData = {
    questions: [
      {
        question:
          'Which of the following is NOT a process involved in the carbon cycle?',
        options: [
          'Photosynthesis',
          'Respiration',
          'Transpiration',
          'Combustion',
        ],
        correct_answer: 'Transpiration',
      },
      {
        question:
          'What is the primary source of carbon dioxide in the atmosphere?',
        options: [
          'Burning of fossil fuels',
          'Respiration of animals',
          'Decomposition of organic matter',
          'Volcanic eruptions',
        ],
        correct_answer: 'Burning of fossil fuels',
      },
      {
        question: 'Which organism plays a key role in turning atmospheric carbon into organic compounds?',
        options: ['Trees', 'Bacteria', 'Humans', 'Fish'],
        correct_answer: 'Bacteria',
      },
      {
        question:
          'What happens to carbon stored in fossil fuels when they are burned for energy?',
        options: [
          'It is released into the atmosphere as CO2',
          'It is converted into oxygen',
          'It is stored in the soil',
          'It is absorbed by oceans',
        ],
        correct_answer: 'It is released into the atmosphere as CO2',
      },
      {
        question:
          'What process returns carbon from dead organisms to the atmosphere?',
        options: [
          'Photosynthesis',
          'Respiration',
          'Decomposition',
          'Evaporation',
        ],
        correct_answer: 'Decomposition',
      },
      {
        question:
          'Which of the following is a natural carbon sink?',
        options: [
          'Oceans',
          'Landfills',
          'Fossil fuel plants',
          'Factories',
        ],
        correct_answer: 'Oceans',
      },
      {
        question: 'How does deforestation affect the carbon cycle?',
        options: ['It increases atmospheric carbon dioxide levels', 'It decreases atmospheric oxygen levels', 'It has no effect on the carbon cycle', 'It increases the rate of photosynthesis'],
        correct_answer: 'It increases atmospheric carbon dioxide levels',
      },
      {
        question: "What role do oceans play in the carbon cycle?",
        options: [
          'They absorb carbon dioxide from the atmosphere',
          'They release carbon dioxide into the atmosphere',
          'They produce carbon dioxide through respiration',
          'They store carbon dioxide underground',
        ],
        correct_answer: 'They absorb carbon dioxide from the atmosphere',
      },
      {
        question:
          'Which human activity has contributed most to the increase in atmospheric carbon dioxide levels?',
        options: [
          'Industrialization',
          'Agriculture',
          'Deforestation',
          'Transportation',
        ],
        correct_answer: 'Industrialization',
      },
      {
        question:
          'What is the main consequence of an imbalance in the carbon cycle?',
        options: [
          'Increased biodiversity',
          'Global warming',
          'Ozone depletion',
          'Acid rain',
        ],
        correct_answer: 'Global warming',
      },
    ],
  };
  
  const quizContainer = document.getElementById('quiz-container');
  const questionContainer = document.getElementById('question-container');
  const optionsContainer = document.getElementById('options-container');
  const nextButton = document.getElementById('next-btn');
  const header = document.getElementById('header');
  let correct = 0;
  
  let currentQuestionIndex = 0;
  
  function loadQuestion() {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;
  
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.innerText = option;
      button.addEventListener('click', () => selectOption(option));
      optionsContainer.appendChild(button);
    });
  }
  
  function selectOption(selectedOption) {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct_answer) {
      header.textContent = 'Correct!';
      correct += 1;
    } else {
      header.textContent = 'Incorrect!';
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData.questions.length) {
      loadQuestion();
    } else {
      quizContainer.innerHTML = `<h2>Quiz Completed!</h2><br><h3>${correct}/10 correct!</h3>`;
    }
  }
  
  loadQuestion();