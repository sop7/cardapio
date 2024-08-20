// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões com a classe 'adicionar'
    const buttons = document.querySelectorAll('.cardapio button');
    
    // Seleciona a lista onde os itens serão adicionados
    const listaSelecionados = document.getElementById('lista-selecionados');
    
    // Adiciona um listener de evento para cada botão
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Obtém o nome e o preço do item a partir dos atributos data
            const itemName = button.getAttribute('data-name');
            const itemPrice = button.getAttribute('data-price');
            
            // Cria um novo item de lista
            const listItem = document.createElement('li');
            listItem.textContent = `${itemName} ${itemPrice}`;
            
            // Adiciona o novo item à lista
            listaSelecionados.appendChild(listItem);
            
            // Opcional: Desativa o botão após o clique para evitar adições repetidas
            button.disabled = true;
            button.textContent = 'Adicionado';
        });
    });
});
