var task = document.getElementById('task')
var tasks = document.getElementById('tasks')
var listTasks = []
var i = 0
function add(){
    var taskForAdd = task.value
    listTasks.push(taskForAdd)
    tasks.innerHTML += `<div class='card'>
    <input type="checkbox" class="tarefa">
    <label for="checkbox" id="tarefa">${listTasks[i]}</label>
    <button class="delete" onclick="del(this)">&#128465;</button>
    </div>`
    i++
}

function del (e){
    e.parentNode.parentNode.removeChild(e.parentNode)
}