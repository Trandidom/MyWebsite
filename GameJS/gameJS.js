const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  //******Viet code o day*********************
  setNextQuestion()
  //****************************************
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
 //******Viet code o day*********************
 currentQuestionIndex = 0 
 questionContainerElement.classList.remove('hide')
 setNextQuestion() 
  //****************************************
  questionContainerElement.classList.remove('hide')
   //******Viet code o day*********************

  //****************************************
}

function setNextQuestion() {
   //******Viet code o day*********************

  //****************************************
  resetState() 
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
 //******HOAN THIEN CAC CAU HOI*********************
const questions = [
  {
    question: '2 + 2 = ?',
    answers: [
      { text: '4', correct:true  },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'paris la thu do nuoc nao?',
    answers: [
      { text: 'Nga', correct: false},
      { text: 'Phap', correct: true},
      { text: 'My', correct: false},
      { text: 'Italia', correct: false}
    ]
  },
  {
    question: 'Doi tuyen nao vo đich wordcup 2022?',
    answers: [
      { text: 'Nga', correct:  false},
      { text: 'Phap', correct:  false},
      { text: 'ThaiLan', correct:  false},
      { text: 'Argentina', correct:  true}
    ]
  },
  {
    question: 'Leonardo da Vinci la nguoi Italia?',
    answers: [
      { text: 'Sai', correct: false},
      { text: 'Dung', correct: true}
    ]
  }
]