var produtos = [
    { nome: "Top Azul Marinho", preco: 199 },
    // Adicione outros produtos conforme necessário
];


var carrinho = [];

// Função para adicionar produtos ao carrinho
function adicionarProduto(botao) {
    var produto = botao.parentElement;
    var nome = produto;
    var preco = parseFloat(produto);

    // Verifica se o produto já está no carrinho
    var produtoNoCarrinho = carrinho.find(item => item.nome === nome);

    if (produtoNoCarrinho) {
        produtoNoCarrinho.quantidade++;
    } else {
        carrinho.push({ nome: nome, preco: preco, quantidade: 1 });
    }

    // Atualiza a exibição do carrinho
    atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    var listaCarrinho = document.getElementById('lista-carrinho');
    var totalElement = document.getElementById('total');

    // Limpa a lista do carrinho
    listaCarrinho.innerHTML = '';

    var total = 0;

    // Itera sobre a lista de produtos no carrinho
    carrinho.forEach(function (produto) {
        var tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.quantidade}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
            <td>R$ ${(produto.quantidade * produto.preco).toFixed(2)}</td>
        `;
        listaCarrinho.appendChild(tr);

        // Calcula o total
        total += produto.quantidade * produto.preco;
    });

    // Atualiza o total na página
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}



    