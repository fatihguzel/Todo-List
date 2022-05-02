// Tüm elementleri seçme
const form = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo")
const todoList = document.querySelector(".list-group")
const firstCardBody = document.querySelectorAll(".card-body")[0]
const secondCardBody = document.querySelectorAll(".card-body")[1]
const filter = document.querySelector("#filter")
const clearButton = document.querySelector("#clear-todos")


eventListeners()

function eventListeners(){ // Tüm event listenerlar
    form.addEventListener("submit",addTodo)
}

function addTodo(e) {
    const newTodo = todoInput.value.trim()
    if(newTodo === ""){
        showAlert("danger","Lütfen bir todo girin")
    }
    else{
        addTodoToUI(newTodo)
        showAlert("success","Todo başarıyla eklendi")
    }


    e.preventDefault()
}
function showAlert(type,message) {
    const alert = document.createElement("div")

    alert.className = `alert alert-${type}`

    alert.textContent = message

    firstCardBody.appendChild(alert)

    setTimeout(function(){
        alert.remove()
    },1000)
}
function addTodoToUI(newTodo) { // String değerini list item olarak UI'ya ekleyecek
    // List Item Oluşturma
    const listItem = document.createElement("li")
    // Link oluşturma
    const link = document.createElement("a")
    link.href = "#"
    link.className = "delete-item"
    link.innerHTML = "<i class = 'fa fa-remove'></i>"

    listItem.className = "list-group-item d-flex justify-content-between"

    // Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo))
    listItem.appendChild(link)

    // Todo List'e List Item'ı Ekleme
    todoList.appendChild(listItem)
    todoInput.value = ""
    
}
