
it.only('login com sucesso e adiciona itens ao carrinho', () => {
    // Passo 1: Fazer login com credenciais válidas
    cy.visit('https://www.saucedemo.com/'); // acessa a url
    cy.get('#user-name').type('standard_user'); // insere o nome do user
    cy.get('#password').type('secret_sauce'); // insere a senha 
    cy.get('#login-button').click();  // Clica no botão de login
  
    // Passo 2: Verificar se foi redirecionado para a página de inventário
    cy.url().should('include', '/inventory.html');  // A URL deve incluir /inventory.html
    
    // Passo 3: Garantir que o botão de adicionar ao carrinho esteja visível
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible');  // Espera até o botão estar visível
  
    // Passo 4: Adicionar o produto ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();  // Adiciona o item "Sauce Labs Backpack"
  
    // Passo 5: Adicionar o segundo produto ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();  // Adiciona o item "Sauce Labs Bike Light"
    
    // Passo 6: Adicionar o terceiro produto ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();  // Adiciona o item "Sauce Labs Fleece Jacket"
  
    // Passo 7: Verificar se o carrinho tem 3 itens
    cy.get('.shopping_cart_badge').should('have.text', '3');  // Verifica se há 3 itens no carrinho
  });
  