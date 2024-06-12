function adicionar() {
    const produtoSelect = document.getElementById('produto');
    const quantidadeInput = document.getElementById('quantidade');
    const listaProdutos = document.getElementById('lista-produtos');
    const valorTotalElement = document.getElementById('valor-total');
  
    const produtoInfo = produtoSelect.value.split(' - ');
    const produtoNome = produtoInfo[0];
    const produtoPreco = parseFloat(produtoInfo[1].replace('R$', ''));
    const quantidade = parseInt(quantidadeInput.value);
  
    if (isNaN(quantidade) || quantidade <= 0) {
      alert('Por favor, insira uma quantidade válida.');
      return;
    }
  
    const produtoTotal = produtoPreco * quantidade;
  
    const novoProduto = document.createElement('section');
    novoProduto.classList.add('carrinho__produtos__produto');
    novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$${produtoTotal.toFixed(2)}</span>`;
  
    listaProdutos.appendChild(novoProduto);
  
    const valorTotalAtual = parseFloat(valorTotalElement.innerText.replace('R$', ''));
    const novoValorTotal = valorTotalAtual + produtoTotal;
  
    valorTotalElement.innerText = `R$${novoValorTotal.toFixed(2)}`;
  
    quantidadeInput.value = '';
  }
  
  function limpar() {
    const listaProdutos = document.getElementById('lista-produtos');
    const valorTotalElement = document.getElementById('valor-total');
  
    while (listaProdutos.firstChild) {
      listaProdutos.removeChild(listaProdutos.firstChild);
    }
  
    valorTotalElement.innerText = 'R$0.00';
  }
  