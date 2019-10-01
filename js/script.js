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

const btnLimpar = document.querySelector('.btnLimpar')

const btnFeito = document.querySelector('.btnFeito')

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
        elementoLista.classList.add('borda')

        // 2. criar uma const pra criar um novo elemento 
        // // colocar conteudo x 
        const excluir = document.createElement('span')
        excluir.textContent = 'x'
        elementoLista.appendChild(excluir)
        excluir.classList.add('delete')
        
        form.reset()
        
        // 1. no css criar uma class pro javascript x
        // criar o evento de tarefa 
        // dentro desse evento colocar um if else, 
        // se a pessoa clicar ele dá um check. 
        // se clicar ele descheck. 
        elementoLista.addEventListener('click', function(evento){
            if (elementoLista.classList.contains('check')) {
                elementoLista.classList.remove('check')
            } else {
                elementoLista.classList.add('check')
            }
        })

        // // evento click 
        // // remover o x 
        excluir.addEventListener('click', function() {
            elementoLista.classList.add('remover')
            excluir.classList.add('remover')
        })

        //criar evento no botão para dar check em todas as tarefas

        btnFeito.addEventListener('click', function() {
            elementoLista.classList.add('check')
        })

        //criar evento no outro botão para limpar todas as tarefas

        btnLimpar.addEventListener('click', function() {

            elementoLista.classList.add('remover')
            excluir.classList.add('remover')
        })

    }
})









