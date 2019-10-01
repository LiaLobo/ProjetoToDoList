// Capturar o form 
// Capturar tarefasLista
// Colocar um evento no botão form 
// capturar o input tarefa(container) 
// Capturar o valor do input 

// Criar um elemento p h1 
// dar o conteudo value e posicionar  


// criar um if else (caso a usuario insira uma string vazia)  

const form = document.getElementById("form")

const inserirTarefa = document.getElementById("tarefasLista")

const erro = document.querySelector('.error')
form.addEventListener("submit", function(evento){
    evento.preventDefault()
    let mensagemUsuario = document.querySelector(".inputContainer")
    let valorMensagem = mensagemUsuario.value 
    if (valorMensagem.trim() ==="" ) {
        erro.textContent = 'Digite uma tarefa'
    } else {
        erro.textContent = "" 
        let elementoLista = document.createElement("p")
        elementoLista.textContent = valorMensagem
        inserirTarefa.appendChild(elementoLista)
        form.reset()
    }

})



