const formAddTodo = document.querySelector(".form-add-todo")
const todosContainer = document.querySelector(".todos-container")
const searchInput = document.querySelector(".form-search input")

const getTextOfANewtodo = () => {
  const inputValue = event.target.add.value.trim()
  return inputValue
}

const addingTodoElement = () => {
  const inputValue = getTextOfANewtodo()
  const newTodo = (todosContainer.innerHTML += `
  <li data-li="todo" class="list-group-item d-flex justify-content-between align-items-center text-light">
      <span>${inputValue}</span>
      <i class="far fa-trash-alt delete"></i>
  </li>`)

  return newTodo
}

const addingEmptyTodoElement = () => {
  const emptyTodo = (todosContainer.innerHTML += `
  <li data-li="todo" class="list-group-item d-flex justify-content-between align-items-center text-light">
      <span>(Todo vazia)</span>
      <i class="far fa-trash-alt delete"></i>
  </li>`)

  return emptyTodo
}

const verifyTheNewTodoTextContent = () => {
  const inputValue = getTextOfANewtodo()
  const theresAnyText = inputValue.length

  if (theresAnyText) {
    const newTodo = addingTodoElement()
  } else {
    const emptyTodo = addingEmptyTodoElement()
  }
}

const getANewTodo = event => {
  event.preventDefault()
  const insertTodoIntoList = verifyTheNewTodoTextContent()
  event.target.reset()
}

const selectNRemoveATodo = event => {
  const clickedElement = event.target
  const li = clickedElement.closest('[data-li="todo"]')
  if (Array.from(clickedElement.classList).includes("delete")) {
    li.remove()
  }
}

const todoText = todo => {
  const inputValue = event.target.value.trim().toLowerCase()
  const checkTodoValue = todo.textContent.toLowerCase().includes(inputValue)
  return checkTodoValue
}

const hideOrShowClass = () => {
  const todos = Array.from(todosContainer.children)
  todos
    .filter(todo => !todoText(todo))
    .forEach(todo => {
      todo.classList.remove("d-flex")
      todo.classList.add("hidden")
    })
  todos
    .filter(todo => todoText(todo))
    .forEach(todo => {
      todo.classList.add("d-flex")
      todo.classList.remove("hidden")
    })
}

const searchATodo = event => {
  hideOrShowClass()
}

formAddTodo.addEventListener("submit", getANewTodo)
todosContainer.addEventListener("click", selectNRemoveATodo)
searchInput.addEventListener("input", searchATodo)
