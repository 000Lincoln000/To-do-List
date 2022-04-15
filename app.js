const formAddTodo = document.querySelector(".form-add-todo")
const todosContainer = document.querySelector(".todos-container")
const searchInput = document.querySelector(".form-search input")

formAddTodo.addEventListener("submit", event => {
  event.preventDefault()
  const inputValue = event.target.add.value.trim()
  const theresAnyText = inputValue.length
  if (theresAnyText) {
    todosContainer.innerHTML += `
  <li class="list-group-item d-flex justify-content-between align-items-center text-light">
      <span>${inputValue}</span>
      <i class="far fa-trash-alt delete"></i>
  </li>`
  } else {
    alert("você não digitou nenhum valor no item a fazer")
  }
  event.target.reset()
})

todosContainer.addEventListener("click", event => {
  const clickedElement = event.target
  if (Array.from(clickedElement.classList).includes("delete")) {
    clickedElement.parentElement.remove()
  }
})

searchInput.addEventListener("input", event => {
  const inputValue = event.target.value.trim().toLowerCase()
  Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove("d-flex")
      todo.classList.add("hidden")
    })
  Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.add("d-flex")
      todo.classList.remove("hidden")
    })
})
