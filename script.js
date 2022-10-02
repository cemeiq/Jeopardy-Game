const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')
console.log(game)
const jepardyCategory = [{
  genre: 'who',
  questions: [{ question: 'bla', answer: 'bla', correct: 'bla', level: 'easy' },
  { question: 'bla', answer: 'bla', correct: 'bla', level: 'medium' },
  { question: 'bla', answer: 'bla', correct: 'bla', level: 'hard' }]
},
{
  genre: 'where',
  questions: [{ question: 'bla', answer: 'bla', correct: 'bla', level: 'easy' },
  { question: 'bla', answer: 'bla', correct: 'bla', level: 'medium' },
  { question: 'bla', answer: 'bla', correct: 'bla', level: 'hard' }]
},
{
  genre: 'why',
  questions: [{ question: 'bla', answer: 'bla', correct: 'bla', level: 'easy' },
  { question: 'bla', answer: 'bla', correct: 'bla', level: 'medium' },
  { question: 'bla', answer: 'bla', correct: 'bla', level: 'hard' }]
}

]

function addCategory(category) {
  const column = document.createElement('div')
  column.classList.add('genre-column')

  const genreTitle = document.createElement('div')
  genreTitle.classList.add('genre-title')
  genreTitle.innerText = category.genre
  column.appendChild(genreTitle)
  game.append(column)

  category.questions.forEach(question => {
    const card = document.createElement('div')
    card.classList.add('card')
    column.append(card)

    if (question.level === 'easy') {
      card.innerHTML = 100
    }

    if (question.level === 'medium') {
      card.innerHTML = 200
    }

    if (question.level === 'hard') {
      card.innerHTML = 300
    }

    card.setAttribute('data-question', question.question)
    card.setAttribute('data-answer-1', question.answer)

    card.setAttribute('data-question', question.correct)
    card.setAttribute('data-value', card.getInnerHTML())

    card.addEventListener('click', flipCard)

  })
}

jepardyCategory.forEach(category => addCategory(category))

function flipCard() {
  this.innerHTML = ""
  const textDisplay = document.createElement('div')
  this.style.fontSize = "15px"
  this.style.lineHeight = "30px"
  textDisplay.classList.add('text-display')
  textDisplay.innerHTML = this.getAttribute('data-question')
  const firstBtn = document.createElement('button')
  // const secondBtn = document.createElement('button')

  firstBtn.classList.add('first-button')
  // // secondBtn.classList.add('second-button')

  firstBtn.innerHTML = this.getAttribute('data-answer-1')
  this.append(textDisplay, firstBtn)
}