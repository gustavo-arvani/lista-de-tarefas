
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let listElement = document.querySelector("#app ul");

let tarefas = [];

function renderTarefas(){
    listElement.innerHTML = '';
    tarefas.map((tarefa)=>{
        
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(tarefa);
        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        let excluirText = document.createTextNode(" Excluir");
        
        let posicaoTarefa = tarefas.indexOf(tarefa)

        linkElement.setAttribute("onclick",`excluirTarefa(${posicaoTarefa})`)

        liElement.appendChild(tarefaText);
        linkElement.appendChild(excluirText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}

function adicionarTarefas(){
    
    if(inputElement.value === ''){
        alert("Digite uma tarefa")
        return false
    }else{
        let novaTarefa = inputElement.value;
        tarefas.push(novaTarefa);
        renderTarefas();
        inputElement.value = '';
    }
}

function excluirTarefa(posicaoTarefa){
    tarefas.splice(posicaoTarefa, 1);
    renderTarefas();
}

buttonElement.onclick = adicionarTarefas;

console.log(tarefas)