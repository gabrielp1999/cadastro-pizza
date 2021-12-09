// é o nosso array onde vai ficar salvo as informações do input 
let listaDePedidos = []; 
// let listaDePedidos = [{
//     nomeDaPizza: 'calabresa',
//     ingrediente1: 'ovo',
//     ingrediente2: 'bacon',
//     ingrediente3: 'presunto',
//     ingrediente4: 'tomate',
//     urlImagem: 'sjhkjshjk'
// },
// {
//     nomeDaPizza: 'amoda',
//     ingrediente1: 'ovo',
//     ingrediente2: 'bacon',
//     ingrediente3: 'presunto',
//     ingrediente4: 'tomate',
//     urlImagem: 'sjhkjshjk'
// },
// {
//     nomeDaPizza: 'portuguesa',
//     ingrediente1: 'ovo',
//     ingrediente2: 'bacon',
//     ingrediente3: 'presunto',
//     ingrediente4: 'tomate',
//     urlImagem: 'sjhkjshjk'
// }
// ]

// demos alguns display none e block para aparecer e sumir a tela quando a gente precisar 
function cadastrarPizza() {
    let painel1 = document.getElementById('painel-1');
    painel1.style.display='block';  

    let painel2 = document.getElementById('painel-2');
    painel2.style.display='none';

    const salvarNovo = document.getElementById('salvar-novo');
    salvarNovo.style.display='block';  
}


// pegamos os id e passamos pra uma variavel
function salvar(mostrarPainel) {
    let nomePizza1 = document.getElementById('nome-pizza-1');
    let ingrediente1 = document.getElementById('ingrediente-1');
    let ingrediente2 = document.getElementById('ingrediente-2');
    let ingrediente3 = document.getElementById('ingrediente-3');
    let ingrediente4 = document.getElementById('ingrediente-4');
    let urlImagem = document.getElementById('urlImagem');
    let valorIndice = document.getElementById('indice');

    
    // criamos um objeto para separar direitinho a pizza dos ingredientes,
    // e demos um push dessa lista de objeto ao nosso array listaDePedidos la no else mais em baixo 
    const pizza = {
        nomeDaPizza: nomePizza1.value,
        ingrediente1: ingrediente1.value,
        ingrediente2: ingrediente2.value,
        ingrediente3: ingrediente3.value,
        ingrediente4: ingrediente4.value,
        urlImagem: urlImagem.value
    };
    
    // criamos o if para validar se tem valores nos input, se não o codigo para de executar no if
    // se tiver correto cai no else e cadastra a pizza normalmente
    if(nomePizza1.value.length < 2 || ingrediente1.value.length < 2 || ingrediente2.value.length < 2 || ingrediente3.value.length < 2 || ingrediente4.value.length < 2 || urlImagem.value.length < 2){
        return alert('precisa preencher todos campos!');
    }else{
        alert('Pizza cadastrada com sucesso!');
    };

    // o map sempre precisa de um return para retornar
    // se o input valorIndice tiver algum valor é porque é uma edição
    // criamos uma logica usando o map dentro do if, dentro do if colocamos que se o valor do 
    // input valorIndice for diferente do input vazio ai cai no map dentro do if,
    // o primeiro parametro do map vai pegar sempre o objeto ou elemento e o segundo pega
    // o indice, ai dentro do if colocamos o parseInt para pegar e converter em valor inteiro
    // ai colocamos se o valor do indice for diferente do indice retornamos o objeto pizza 
    // se não retornamos o elemento,
    // se nao cair no if da função damos um push no objeto pizza pro array
    if(valorIndice.value !== ''){
        listaDePedidos = listaDePedidos.map(function(elemento, indice){
            if(parseInt(valorIndice.value) === indice){
                return pizza;
            }else{
                return elemento;
            }
        })
    }else{
        listaDePedidos.push(pizza);
    }
    
    // aqui a gente limpou todos os inputs
    nomePizza1.value = '';
    ingrediente1.value = '';
    ingrediente2.value = '';
    ingrediente3.value = '';
    ingrediente4.value = '';
    urlImagem.value = "";    
    valorIndice.value = "";

    // pegamos o id e passamos pra variavel 
    let painel1 = document.getElementById('painel-1');
    
    // se o parametro morstrarPainel da função salvar for verdadeiro da um display 
    // block no painel1 se nao da um display none 
    if(mostrarPainel === true){
        painel1.style.display = 'block';
    }else{
        painel1.style.display = 'none';
    }
}   

// chamamos a função salvar e passamos como parametro o true para salvar e mostrar o formulario
function salvarNovo() {
    salvar(true);
} 

 // .length pode ser usado na string e no array
 // validamos para ver se tem algum item no array
function pizzasCadastrada() {
    if(listaDePedidos.length === 0 ){
    return alert('Não tem pizza cadastrada')
    }

    // se tiver algum item no array vai fechar o painel1 e abrir o painel2
    let painel2 = document.getElementById('painel-2');
    painel2.style.display='block';
    let painel1 = document.getElementById('painel-1');
    painel1.style.display='none';  
    criarTabela(listaDePedidos);
    mostrarTabela()

}

function filtrar() {
    // pegamos os valores do input e passamos pra uma variavel
    const inputPizza = document.getElementById('nome-pizza-2').value;       
    const inputIngrediente = document.getElementById('ingredienteP2').value;       

    // fizemos um filtro na listaDePedidos pegando o obj.nomeDaPizza(Variavel do valor do input)
    // o indexOf serve para fazer uma busca
    const buscarPizza  = listaDePedidos.filter(function(obj){
        const resultado = obj.nomeDaPizza.indexOf(inputPizza);
      
        const resposta = resultado < 0 ?  false : true;
        return resposta;
    });

    // o filter sempre precisa retornar um boolean
    // fizemos um filtro na listaDePedidos para pesquisar pelos ingredientes
    // pegando o obj.nomeDoIngrediente(Variavel do valor do input)
    // o indexOf serve para fazer uma busca e retorna o indice, se achar algo retorna o indice >= 0
    // se não retorna -1
    const buscarIngrediente = buscarPizza.filter(function(obj){
        const resultadoIngrediente1 = obj.ingrediente1.indexOf(inputIngrediente);
        const resultadoIngrediente2 = obj.ingrediente2.indexOf(inputIngrediente);
        const resultadoIngrediente3 = obj.ingrediente3.indexOf(inputIngrediente);
        const resultadoIngrediente4 = obj.ingrediente4.indexOf(inputIngrediente);

        // se for menor que 0 retorne false se não retorne true
        if(resultadoIngrediente1 < 0 && resultadoIngrediente2 < 0 && resultadoIngrediente3 < 0 && resultadoIngrediente4 < 0){
            return false;
        }else{
           return true;
        }
    });
    // pegando os ids e passando pra variavel
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

// criamos uma função para criar tabela 
function criarTabela(dados) {
    const tabela = document.getElementById('tabela');

    let conteudoTabela = `
    <tr id="itens">
        <td>Pizza</td>
        <td>Ingrediente 1</td>
        <td>Ingrediente 2</td>
        <td>Ingrediente 3</td>
        <td>Ingrediente 4</td>
        <td>Imagem</td>
        <td>Editar</td>
        <td>excluir</td>
    </tr>`;   
    
    for(let indice in dados) {
        const pedido = dados[indice];
         conteudoTabela += `
        <tr>
        <td>${pedido.nomeDaPizza}</td>
        <td>${pedido.ingrediente1}</td>
        <td>${pedido.ingrediente2}</td>
        <td>${pedido.ingrediente3}</td>
        <td>${pedido.ingrediente4}</td>
        <td><img src="${pedido.urlImagem}" alt=""></td>
        <td><button onclick="editarPizza(${indice})">Editar</button></td>
        <td><button onclick="excluirPizza(${indice})">Excluir</button></td>
        </tr>`;
        console.log(dados)
    }
       
   tabela.innerHTML = conteudoTabela;   
}

//limpamos os inputs
function limparFiltro() {
    document.getElementById('nome-pizza-2').value = "";       
    document.getElementById('ingredienteP2').value = "";
    //chamamos a função criarTabela e passamos o parametro do nosso array
    criarTabela(listaDePedidos);         
    mostrarTabela();
};

// criamos uma função para mostrar tabela
function mostrarTabela() {
    const tabela = document.getElementById('tabela');
    tabela.style.display='block';    
    const nenhumResultado = document.getElementById('nenhumResultado')
    nenhumResultado.style.display="none";        
}

function excluirPizza(indice) {
    // confirm serve para mandar uma notificação com resultado positivo ou negativo
    // retorna false ou true
    const confirmar = window.confirm('Deseja mesmo excluir a pizza cadastrada?')

    // se for igual a true vamos apagar um cadastro de uma pizza pelo indice
    if(confirmar === true){
        listaDePedidos.splice(indice, 1);
       alert('Pizza exluida');
       //chamamos criarTabela com a lista de pizza no parametro() para atualizar
       criarTabela(listaDePedidos);
    }

}
// criamos uma função para editar 
function editarPizza(indiceBuscado) {
    //usamos o find sempre quando queremos buscar apenas um elemento
    // o find assim como filter precisa de um retorno em bolean
    const pizzaEncontrada = listaDePedidos.find(function(elemento, indice){
        if(indiceBuscado === indice){
            return true;
        }else{
            return false;
        }
    });

    // pegamos os valores dos input e demos os valores diferente 
    document.getElementById('nome-pizza-1').value = pizzaEncontrada.nomeDaPizza;
    document.getElementById('ingrediente-1').value = pizzaEncontrada.ingrediente1;
    document.getElementById('ingrediente-2').value = pizzaEncontrada.ingrediente2;
    document.getElementById('ingrediente-3').value = pizzaEncontrada.ingrediente3;
    document.getElementById('ingrediente-4').value = pizzaEncontrada.ingrediente4;
    document.getElementById('urlImagem').value = pizzaEncontrada.urlImagem;
    document.getElementById('indice').value = indiceBuscado;

    // demos alguns display block e display none
    const painel2 = document.getElementById('painel-2');
    painel2.style.display='none';    
    const salvarNovo = document.getElementById('salvar-novo');
    salvarNovo.style.display='none';    
    const painel1 = document.getElementById('painel-1')
    painel1.style.display="block";        

}