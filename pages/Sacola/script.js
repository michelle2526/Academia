$(document).ready(function() {
    $(".adicionar-ao-carrinho").on("click", function() {
        // Obtém os detalhes do produto
        var produto = $(this).closest(".card");
        var nome = produto.find(".card-title").text();
        var preco = parseFloat(produto.find(".card-title").next().text().replace('R$', '').trim());

        // Adiciona o produto ao carrinho
        var itemCarrinho = $("<li class='list-group-item'>" + nome + " - R$ " + preco.toFixed(2) + "</li>");
        $("#lista-carrinho").append(itemCarrinho);

        // Atualiza o total do carrinho
        var totalAtual = parseFloat($("#total-carrinho").text());
        var novoTotal = totalAtual + preco;
        $("#total-carrinho").text(novoTotal.toFixed(2));
    });
});