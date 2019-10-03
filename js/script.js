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

let dragging = null

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

        //Atribuir o draggable para todos os elementos que serão arrastados.
        inserirTarefa.setAttribute('draggable', true)
        elementoLista.setAttribute('draggable', true)
        excluir.setAttribute('draggable', true)
        
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
            if (btnFeito) {
                elementoLista.classList.remove('descheck')
                elementoLista.classList.add('check')
            }
        })

        //criar evento no outro botão para limpar todas as tarefas
        btnLimpar.addEventListener('click', function() {
            elementoLista.classList.add('remover')
            excluir.classList.add('remover')
        })

         //Temos que adicionar o evento na caixa maior 
        inserirTarefa.addEventListener('dragstart', function(e) {
            dragging = e.target.closest('.borda')
            //CLOSEST pega o elemento mais próximo da caixa principal que adicionamos o evento. Ele aceita somente elementos do DOM/HTML
        })

        //dragover é para arrastar o elemento. Funciona como uma sombra que segura o elemento que estava no start para conseguirmos deslocar 
        inserirTarefa.addEventListener('dragover', function(e) {
            e.preventDefault()
            //esse preventDefault permite com que o elemento seja arrastado. Pois por padrão ele não permmite arrastar, somente agarrar e soltar 
            const node = e.target.closest('.borda')
            //CLOSEST pega o elemento mais próximo da caixa principal que adicionamos o evento. Ele aceita somente elementos do DOM/HTML
            this.insertBefore(dragging, node)
            //nesse passo dizemos onde o
        })

        inserirTarefa.addEventListener('dragend', function(e) {
            dragging = null
            //deixamos o valor null para conseguirmos pegar outro elemento que queremos arrastar
        })
    }
})









