
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

  $('#topazulMModal').modal('show');

  // Atualizar a exibição do carrinho
  exibirCarrinho();
}

// Exemplo de chamada da função
// adicionarAoCarrinho('Top Azul Marinho', 199);




// //Array para armazenar os produtos no carrinho
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
 

// function adicionarCarrinho(botao,nome, preco) {
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

//     console.log("Nome do Produto:", nome);

//   }