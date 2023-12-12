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
