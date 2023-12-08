$(document).ready(function() {
    // Array para armazenar produtos na sacola
    var sacolaProdutos = [];

    // Função para adicionar um produto à sacola
    function adicionarNaSacola(nomeProduto, precoProduto) {
      var produto = {
        nome: nomeProduto,
        preco: precoProduto
      };

      
      sacolaProdutos.push(produto);

      // Atualizar a exibição da sacola
      atualizarSacola();
    }

    // Função para atualizar a exibição da sacola
    function atualizarSacola() {
      // Limpar a exibição atual da sacola
      $("#sacola").empty();

      // Adicionar cada produto à exibição da sacola
      sacolaProdutos.forEach(function(produto, index) {
        $("#sacola").append("<li>" + produto.nome + " - R$" + produto.preco + " <button class='remover' data-index='" + index + "'>Remover</button></li>");
      });

      // Adicionar evento de clique para remover produtos
      $(".remover").click(function() {
        var index = $(this).data("index");
        sacolaProdutos.splice(index, 1);
        atualizarSacola();
      });
    }

    // Adicionar evento de clique para o botão "Comprar"
    $("#comprar").click(function() {
      // Obter o nome e preço do produto atual
      var nomeProduto = $("#topazulMModal .modal-title").text();
      var precoProduto = $("#topazulMModal .modal-body h3").text().replace("R$", "").trim();

      // Adicionar o produto à sacola
      adicionarNaSacola(nomeProduto, precoProduto);
    });
  });