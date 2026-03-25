
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let listElement = document.querySelector("#app ul");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas"))  || [];

renderTarefas();

function renderTarefas(){
    listElement.innerHTML = '';
    tarefas.map((tarefa)=>{
        
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(tarefa);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        let excluirText = document.createTextNode("❌ ");


        let linkEditElement = document.createElement("a");
        linkEditElement.setAttribute("href", "#");
        let editText = document.createTextNode(" ✏️");

        let divLinks = document.createElement("div");
        divLinks.setAttribute("class", "acoes");

        let divTarefa = document.createElement("div");
        divTarefa.setAttribute("class", "tarefas");

        
        let posicaoTarefa = tarefas.indexOf(tarefa);

        linkElement.setAttribute("onclick",`excluirTarefa(${posicaoTarefa})`);
        linkEditElement.setAttribute("onclick", `editarTarefa(${posicaoTarefa})`);


        linkElement.appendChild(excluirText);
        linkEditElement.appendChild(editText);
        divLinks.appendChild(linkElement);
        divLinks.appendChild(linkEditElement);
        divTarefa.append(tarefaText);
        liElement.appendChild(divTarefa);
        liElement.appendChild(divLinks);
        listElement.appendChild(liElement);
    })
}

function adicionarTarefas(){
    
    if(inputElement.value === ''){
        alert("Digite uma tarefa");
        return false
    }else{
        let novaTarefa = inputElement.value;
        tarefas.push(novaTarefa);
        renderTarefas();
        salvarDados();
        inputElement.value = '';
    }
}

function excluirTarefa(posicaoTarefa){
    tarefas.splice(posicaoTarefa, 1);
    renderTarefas();
    salvarDados();
}

function editarTarefa(posicaoTarefa){
   let novoValor = prompt("Digite a atualização da tarefa");
   if(novoValor === '' || novoValor === null){
    alert("Tarefa não atualizada");
    return false;
   }else{
    tarefas[posicaoTarefa] = novoValor;
    renderTarefas();
    salvarDados();}
}

function salvarDados(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}

buttonElement.onclick = adicionarTarefas;

console.log(tarefas);