

todoField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addTodo();
        }
    });

function addTodo() {
    todoList.innerHTML += `<li><input type="checkbox"><span>${todoField.value}</span></li>`;

    

    todoField.value = '';
}