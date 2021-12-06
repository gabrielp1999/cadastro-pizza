let listaDePedidos = []

function cadastrarPizza() {
    let painel1 = document.getElementById('painel-1');
    painel1.style.display='block';  

    let painel2 = document.getElementById('painel-2');
    painel2.style.display='none';
}

function salvar(mostrarPainel) {
    let nomePizza1 = document.getElementById('nome-pizza-1');
    let ingrediente1 = document.getElementById('ingrediente-1');
    let ingrediente2 = document.getElementById('ingrediente-2');
    let ingrediente3 = document.getElementById('ingrediente-3');
    let ingrediente4 = document.getElementById('ingrediente-4');

    const pizza = {
        nomeDaPizza: nomePizza1.value,
        ingrediente1: ingrediente1.value,
        ingrediente2: ingrediente2.value,
        ingrediente3: ingrediente3.value,
        ingrediente4: ingrediente4.value,
    };


    if(nomePizza1.value.length < 2 || ingrediente1.value.length < 2 || ingrediente2.value.length < 2 || ingrediente3.value.length < 2 || ingrediente4.value.length < 2){
        return alert('precisa preencher todos campos!');
    }else{
        alert('Pizza cadastrada com sucesso!');
    };
    
    listaDePedidos.push(pizza);

    nomePizza1.value = '';
    ingrediente1.value = '';
    ingrediente2.value = '';
    ingrediente3.value = '';
    ingrediente4.value = '';
    
    let painel1 = document.getElementById('painel-1');

    if(mostrarPainel === true){
        painel1.style.display = 'block';
    }else{
        painel1.style.display = 'none';
    }
}

function salvarNovo() {
    salvar(true);
}

function pizzasCadastrada() {
    if(listaDePedidos.length === 0 ){
    return alert('Não tem pizza cadastrada')
    }

    let painel2 = document.getElementById('painel-2');
    painel2.style.display='block';
    let painel1 = document.getElementById('painel-1');
    painel1.style.display='none';  
    criarTabela(listaDePedidos);
    mostrarTabela()
}

function filtrar() {
    const inputPizza = document.getElementById('nome-pizza-2').value;       
    const inputIngrediente = document.getElementById('ingredienteP2').value;       

    
    const buscarPizza  = listaDePedidos.filter(function(obj){
        const resultado = obj.nomeDaPizza.indexOf(inputPizza);
      
        const resposta = resultado < 0 ?  false : true;
        return resposta;
    });

    const buscarIngrediente = buscarPizza.filter(function(obj){
        const resultadoIngrediente1 = obj.ingrediente1.indexOf(inputIngrediente);
        const resultadoIngrediente2 = obj.ingrediente2.indexOf(inputIngrediente);
        const resultadoIngrediente3 = obj.ingrediente3.indexOf(inputIngrediente);
        const resultadoIngrediente4 = obj.ingrediente4.indexOf(inputIngrediente);

        if(resultadoIngrediente1 < 0 && resultadoIngrediente2 < 0 && resultadoIngrediente3 < 0 && resultadoIngrediente4 < 0){
            return false;
        }else{
           return true;
        }
    });
    const tabela = document.getElementById('tabela');
    const nenhumResultado = document.getElementById('nenhumResultado');

    if(buscarIngrediente.length > 0){
        criarTabela(buscarIngrediente);
        mostrarTabela()
    }else{
        tabela.style.display="none";

        nenhumResultado.style.display="block";        
    }

   
}

function criarTabela(dados) {
    const tabela = document.getElementById('tabela');

    let conteudoTabela = `
    <tr id="itens">
        <td>Pizza</td>
        <td>Ingrediente 1</td>
        <td>Ingrediente 2</td>
        <td>Ingrediente 3</td>
        <td>Ingrediente 4</td>
    </tr>`;
    
    
    for(let pedido of dados) {
         conteudoTabela += `
        <tr>
        <td>${pedido.nomeDaPizza}</td>
        <td>${pedido.ingrediente1}</td>
        <td>${pedido.ingrediente2}</td>
        <td>${pedido.ingrediente3}</td>
        <td>${pedido.ingrediente4}</td>
        </tr>`;
    }
   
   tabela.innerHTML = conteudoTabela;   
}


function limparFiltro() {
    document.getElementById('nome-pizza-2').value = "";       
    document.getElementById('ingredienteP2').value = "";
    criarTabela(listaDePedidos);         
    mostrarTabela();
};

function mostrarTabela() {
    const tabela = document.getElementById('tabela');
    tabela.style.display='block';    
    const nenhumResultado = document.getElementById('nenhumResultado')
    nenhumResultado.style.display="none";        
}
