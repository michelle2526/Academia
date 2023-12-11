function adicionarProduto(nome, preco) {
    // Assume you have a shopping cart array to store products
    var carrinho = [];

    // Add the product to the cart
    carrinho.push({
      nome: nome,
      preco: preco
    });

    // Optionally, you can update the UI or perform other actions

    // Log the updated cart for testing purposes (remove this in a production environment)
    console.log("Produto adicionado ao carrinho:", carrinho);
  }