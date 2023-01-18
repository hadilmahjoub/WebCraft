const form = document.querySelector('#form')
const input = document.querySelector('#input')
const todosUL = document.querySelector('.todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => {
        addTodo(todo)
    });
}

form.addEventListener('submit', e => {
    e.preventDefault()
    addTodo()
})

function addTodo(todo) {
    let todoText = input.value.trim()

    if (todo) {
        todoText = todo.text
    }

    // if the input is not empty
    if (todoText) {
        // create todo element
        const todoEl = document.createElement('li')
        todoEl.classList.add('todo')
        todoEl.innerText = todoText

        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        // mark todo as complete with a left click
        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");

            // update local storage
            updateLS();
        });

        // delete todo with a right click
        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove();

            // update local storage
            updateLS();
        });
        
        // add todo element to the DOM
        todosUL.appendChild(todoEl)

        // clear input value
        input.value = ''

        // update local storage
        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll('.todo') 
    // a k a 'li' elements

    // define todos array
    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    });

    localStorage.setItem('todos', JSON.stringify(todos))
}



