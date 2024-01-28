const quizData = {
    questions: [
      {
        question:
          'What type of chemical bond involves the sharing of electrons between atoms?',
        options: [
          'Ionic bond',
          'Covalent bond',
          'Metallic bond',
          'Van der Waals bond',
        ],
        correct_answer: 'Covalent bond',
      },
      {
        question:
          'Which chemical bond is formed by the transfer of electrons from one atom to another?',
        options: [
          'Van der Waals bond',
          'Covalent bond',
          'Metallic bond',
          'Ionic bond',
        ],
        correct_answer: 'Ionic bond',
      },
      {
        question: 'In a covalent bond, how are electrons shared between atoms?',
        options: ['Evenly', 'Unevenly', 'Randomly', 'Periodically'],
        correct_answer: 'Evenly',
      },
      {
        question:
          'What is the name of the force that holds ions together in an ionic bond?',
        options: [
          'Covalent force',
          'Electrostatic force',
          'Van der Waals force',
          'Metallic force',
        ],
        correct_answer: 'Electrostatic force',
      },
      {
        question:
          'Identify the type of bond in which electrons are not shared equally, creating partial charges.',
        options: [
          'Nonpolar covalent bond',
          'Polar covalent bond',
          'Ionic bond',
          'Metallic bond',
        ],
        correct_answer: 'Polar covalent bond',
      },
      {
        question:
          'What is the significance of electronegativity in chemical bonding?',
        options: [
          'Speed of bonding',
          'Size of atoms',
          'Bond strength',
          'Electron attraction',
        ],
        correct_answer: 'Electron attraction',
      },
      {
        question: 'In a metallic bond, what is shared between metal atoms?',
        options: ['Protons', 'Neutrons', 'Electrons', 'Positrons'],
        correct_answer: 'Electrons',
      },
      {
        question: "Define the term 'polar covalent bond.'",
        options: [
          'Unequal electron sharing',
          'No electron sharing',
          'Metal-metal bonding',
          'Complete electron transfer',
        ],
        correct_answer: 'Unequal electron sharing',
      },
      {
        question:
          'What is a diatomic molecule, and how is it related to chemical bonding?',
        options: [
          'Single atom molecule',
          'Double atom molecule',
          'Two-atom molecule',
          'Multi-atom molecule',
        ],
        correct_answer: 'Two-atom molecule',
      },
      {
        question:
          'How does a double bond differ from a single bond in molecular structures?',
        options: [
          'More electrons shared',
          'Fewer electrons shared',
          'Different atoms involved',
          'No difference',
        ],
        correct_answer: 'More electrons shared',
      },
      {
        question:
          'Name the bond formed between hydrogen and oxygen in a water molecule.',
        options: [
          'Covalent bond',
          'Ionic bond',
          'Metallic bond',
          'Hydrogen bond',
        ],
        correct_answer: 'Covalent bond',
      },
      {
        question: 'Explain the concept of resonance in chemical bonding.',
        options: [
          'Transfer of electrons',
          'Multiple valid structures',
          'Ionic bonding',
          'Metallic bonding',
        ],
        correct_answer: 'Multiple valid structures',
      },
      {
        question:
          'What role do valence electrons play in the formation of chemical bonds?',
        options: [
          'Determine chemical properties',
          'Stabilize atoms',
          'Form ionic bonds',
          'Exist in the nucleus',
        ],
        correct_answer: 'Determine chemical properties',
      },
      {
        question:
          "Define the term 'ionic radius' and its significance in ionic bonding.",
        options: ['Atomic size', 'Electron size', 'Ion size', 'Proton size'],
        correct_answer: 'Ion size',
      },
      {
        question:
          'How does the VSEPR theory explain molecular shapes in covalent compounds?',
        options: [
          'Predicts bond angles',
          'Determines bond strength',
          'Describes electron orbitals',
          'Indicates electron speed',
        ],
        correct_answer: 'Predicts bond angles',
      },
      {
        question:
          'Identify the bond angle in a molecule with a tetrahedral molecular geometry.',
        options: ['90 degrees', '109.5 degrees', '120 degrees', '180 degrees'],
        correct_answer: '109.5 degrees',
      },
      {
        question: 'What is the difference between a sigma bond and a pi bond?',
        options: [
          'Single bond type',
          'Double bond type',
          'Electron distribution',
          'Bond strength',
        ],
        correct_answer: 'Electron distribution',
      },
      {
        question:
          "Explain the term 'dipole moment' in the context of chemical bonding.",
        options: [
          'Charge separation',
          'Bond length',
          'Atomic mass',
          'Bond energy',
        ],
        correct_answer: 'Charge separation',
      },
      {
        question:
          'How do London dispersion forces contribute to intermolecular attractions?',
        options: [
          'Electron repulsion',
          'Temporary dipoles',
          'Metallic bonding',
          'Ionic interactions',
        ],
        correct_answer: 'Temporary dipoles',
      },
      {
        question:
          "Name the type of bond present in a protein's secondary structure, such as an alpha helix.",
        options: ['Peptide bond', 'Ionic bond', 'Covalent bond', 'Metallic bond'],
        correct_answer: 'Peptide bond',
      },
      {
        question:
          'Discuss the role of hybridization in the formation of chemical bonds.',
        options: [
          'Ion formation',
          'Atomic stability',
          'Electron sharing',
          'Orbital overlap',
        ],
        correct_answer: 'Orbital overlap',
      },
      {
        question:
          'What is the octet rule, and how does it relate to chemical bonding?',
        options: [
          'Electron sharing principle',
          'Atomic number principle',
          'Valence electron rule',
          'Stability guideline',
        ],
        correct_answer: 'Valence electron rule',
      },
      {
        question:
          'Describe the characteristics of metallic bonding and provide examples.',
        options: [
          'High electronegativity',
          'Malleability and conductivity',
          'Low melting points',
          'Covalent characteristics',
        ],
        correct_answer: 'Malleability and conductivity',
      },
      {
        question:
          'Explain the concept of ionic compounds being electrically neutral.',
        options: [
          'Equal number of protons and neutrons',
          'Equal number of electrons and protons',
          'Equal number of neutrons and electrons',
          'Equal number of positive and negative ions',
        ],
        correct_answer: 'Equal number of electrons and protons',
      },
      {
        question:
          'In a Lewis structure, how are lone pairs represented, and what is their significance in chemical bonding?',
        options: [
          'Dots around the nucleus',
          'Lines between atoms',
          'Cross symbols',
          'Surrounded by brackets',
        ],
        correct_answer: 'Dots around the nucleus',
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
      quizContainer.innerHTML = `<h2>Quiz Completed!</h2><br><h3>${correct}/25 correct!</h3>`;
    }
  }
  
  loadQuestion();