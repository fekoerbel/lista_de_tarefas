function excluir(li) {
    let span = document.createElement("SPAN");
    let txt = document.createElement('Button');
    txt.id ='del'
    txt.textContent ='Excluir'
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = function () {

        var r = confirm('Tem certeza que deseja excluir?')
        if (r == true) { 
           ultima = (span.parentElement.textContent)
           ultima = ultima.replace('ExcluirFinalizar', '')
           span.parentElement.style.display = "none";
            
         }
    }
}


/*function excluir(li) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("  Excluir  ");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = function () {

        var r = confirm('Tem certeza que deseja excluir?')
        if (r == true) { 
           ultima = (span.parentElement.textContent)
           ultima = ultima.replace('Excluir  Finalizar', '')
           span.parentElement.style.display = "none";
            
         }
    }
}
*/
function finalizar(li) {
    let span = document.createElement('SPAN')
    let txt = document.createElement("button")
    txt.textContent ='Finalizar'
    txt.id = 'fin'

    span.className = "finalizar";
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = function () {

        let r = confirm('Tem certeza que finalizou esta tarefa?')
        if (r == true) {

            let novoLI = document.createElement('LI')
            novoLI.className ='listaFim'
            novoLI.append(li.children[0])
            document.querySelector('ul#finalizada').appendChild(novoLI);
            span.parentElement.style.display = "none";
        }
    }
}

function add() {
    let li = document.createElement('LI');
    let span = document.createElement('SPAN');
    let input_value = document.formulario.tarefas.value;
    if (input_value.length > 0) {
        span.append(input_value);
        li.append(span);
        document.querySelector('ul#fazer').appendChild(li);
        document.formulario.tarefas.value = "";
        document.formulario.tarefas.focus()    
    }
    else {
        window.alert('Tarefa em branco!')
    }
    excluir(li);
    finalizar(li);
}

function desfazer() {
    if(this.ultima == undefined || this.ultima == '') {
        window.alert('Impossível desfazer')
    }
    else {
        let li = document.createElement('LI');
        let span = document.createElement('SPAN');
        span.append(this.ultima)
        li.append(span);
        document.querySelector('ul#fazer').appendChild(li);
        excluir(li);
        finalizar(li);
        this.ultima = ''
    }
} 
function onSubmit(e) {
    e.stopPropagation()
    e.preventDefault()
    
    alert(e)
}
