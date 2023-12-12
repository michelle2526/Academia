<<<<<<< HEAD
var carrinho = [];

function adicionarCarrinho(nome, preco) {
    // Adiciona o produto ao carrinho
    carrinho.push({
        nome: nome,
        preco: preco
    });

    // Atualiza a exibição do carrinho
    exibirCarrinho();
}

function exibirCarrinho() {
    // Obtém o elemento da lista do carrinho
    var listaCarrinho = document.getElementById('lista-carrinho');

    // Limpa a lista do carrinho antes de atualizar
    listaCarrinho.innerHTML = '';

    // Itera sobre os itens no carrinho e os exibe
    for (var i = 0; i < carrinho.length; i++) {
        var produto = carrinho[i];

        // Cria uma nova linha na tabela para cada produto no carrinho
        var linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${produto.nome}</td>
            <td>1</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
        `;

        // Adiciona a linha à lista do carrinho
        listaCarrinho.appendChild(linha);
    }

    // Calcula o total
    var total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);

    // Atualiza o total na interface do usuário
    document.getElementById('total').innerText = `Total: R$ ${total.toFixed(2)}`;
}

function realizarCompra() {
    // Lógica para processar a compra (pode ser personalizada conforme necessário)
    alert('Compra realizada com sucesso!');
    limparCarrinho(); // Limpa o carrinho após a compra (ajuste conforme necessário)
}

function limparCarrinho() {
    carrinho = []; // Limpa a array do carrinho
    exibirCarrinho(); // Atualiza a exibição do carrinho
}
=======

function exibirCarrinho() {
  // Encontrar o elemento no HTML
  var carrinhoElement = document.getElementById("#carrinho");

  // Limpar o conteúdo atual
  carrinhoElement.innerHTML = "";

  // Criar uma lista e adicionar cada item do carrinho como um elemento de lista
  var lista = document.createElement("ul");

  carrinho.forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = item.nome + " - R$ " + item.preco;
      lista.appendChild(li);
  });

  // Adicionar a lista ao elemento do carrinho
  carrinhoElement.appendChild(lista);
}
function adicionarAoCarrinho(nome, preco) {
  // Adicionar produto ao carrinho
  carrinho.push({
      nome: nome,
      preco: preco
  });

  // Log para teste (remova em um ambiente de produção)
  console.log("Produto adicionado ao carrinho:", carrinho);

  // Atualizar a exibição do carrinho
  exibirCarrinho();
}




// var carrinho = [];

// function adicionarAoCarrinho(nome, preco) {
//     // Adicionar produto ao carrinho
//     carrinho.push({
//         nome: nome,
//         preco: preco
//     });

//     // Atualizar a exibição do carrinho (pode ser uma função separada)
//     exibirCarrinho();

//     // Redirecionar para a página do carrinho
//     window.location.href = "file:///C:/Users/User/OneDrive/Documentos/Academia/pages/Sacola/Sacola.html";

//     // Log para teste (remova em um ambiente de produção)
//     console.log("Produto adicionado ao carrinho:", carrinho);
// }

// function exibirCarrinho() {
//     // Exemplo simples: exibir no console
//     console.log("Carrinho atual:", carrinho);
// }








// function adicionarCarrinho(botao, nome, preco) {
//   // Assume you have a shopping cart array to store products
//   var carrinho = [];

//   // Add the product to the cart
//   carrinho.push({
//       nome: nome,
//       preco: preco
//   });

//   // Update the UI to display the cart
//   exibirCarrinho(carrinho);

//   // Log the updated cart for testing purposes (remove this in a production environment)
//   console.log("Produto adicionado ao carrinho:", carrinho);
//   console.log("Nome do Produto:", nome);
// }

// function exibirCarrinho(carrinho) {
//   // Obtém o elemento HTML onde você deseja exibir o carrinho
//   var carrinhoElement = document.getElementById("carrinho");

//   // Limpa o conteúdo atual do carrinho
//   carrinhoElement.innerHTML = "";

//   // Cria um novo elemento para cada produto no carrinho e adiciona ao carrinhoElement
//   carrinho.forEach(function (produto) {
//       var produtoElement = document.createElement("div");
//       produtoElement.textContent = produto.nome + " - R$" + produto.preco.toFixed(2);
//       carrinhoElement.appendChild(produtoElement);
//   });
// }




// function adicionarProduto(nome, preco) {
//     // Assume you have a shopping cart array to store products
//     var carrinho = [];

//     // Add the product to the cart
//     carrinho.push({
//       nome: nome,
//       preco: preco
//     });

//     // Optionally, you can update the UI or perform other actions

//     // Log the updated cart for testing purposes (remove this in a production environment)
//     console.log("Produto adicionado ao carrinho:", carrinho);
//   }
>>>>>>> 3c2fa234140ff3e369f33fc53ab0dbb179118896
