let totalGeral = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = '';
function adicionar() {
    let produtoSelect = document.getElementById('produto');
    let quantidadeInput = document.getElementById('quantidade');
    let listaProdutos = document.getElementById('lista-produtos');
    let valorTotalElement = document.getElementById('valor-total');
  
    let produtoInfo = produtoSelect.value.split(' - ');
    let produtoNome = produtoInfo[0];
    let produtoPreco = parseFloat(produtoInfo[1].replace('R$', ''));
    let quantidade = parseInt(quantidadeInput.value);
  
    if (isNaN(quantidade) || quantidade <= 0) {
      alert('Por favor, insira uma quantidade válida.');
      return;
    }
  
    let produtoTotal = produtoPreco * quantidade;
  
    let novoProduto = document.createElement('section');
    novoProduto.classList.add('carrinho__produtos__produto');
    novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$${produtoTotal.toFixed(2)}</span>`;
  
    listaProdutos.appendChild(novoProduto);
  
    let valorTotalAtual = parseFloat(valorTotalElement.innerText.replace('R$', ''));
    let novoValorTotal = valorTotalAtual + produtoTotal;
  
    valorTotalElement.innerText = `R$${novoValorTotal.toFixed(2)}`;
  
    quantidadeInput.value = '';
  }
  
  function limpar() {
    let listaProdutos = document.getElementById('lista-produtos');
    let valorTotalElement = document.getElementById('valor-total');
  
    while (listaProdutos.firstChild) {
      listaProdutos.removeChild(listaProdutos.firstChild);
    }
  
    valorTotalElement.innerText = 'R$0.00';
  }
  