describe('Testes de Finalização de Compra', () => {
    it('login com credenciais válidas e realizar checkout', () => {
      // Passo 1: Fazer o login com credenciais válidas
      cy.visit('https://www.saucedemo.com/');  // Acessa a página de login
      cy.get('#user-name').type('standard_user');  // Digita o nome de usuário
      cy.get('#password').type('secret_sauce');   // Digita a senha
      cy.get('#login-button').click();  // Clica no botão de login
      cy.url().should('include', '/inventory');  // Verifica se a página de inventário é carregada
  
      // Passo 2: Adicionar o item ao carrinho
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();  // Adiciona o item ao carrinho
  
      // Passo 3: Verificar se o ícone do carrinho tem o número de itens correto
      cy.get('.shopping_cart_badge').should('have.text', '1');  // Verifica se há 1 item no carrinho
  
      // Passo 4: Clicar no ícone do carrinho para ir para a página do carrinho
      cy.get('[data-test="shopping-cart-link"]').click();  // Clica no ícone do carrinho
  
      // Passo 5: Verificar se a URL do carrinho está correta
      cy.url().should('include', '/cart.html');  // Verifica se estamos na página de carrinho
  
      // Passo 6: Verificar se o botão de checkout está visível
      cy.get('#checkout').should('be.visible');  // Verifica se o botão de checkout está visível
  
      // Passo 7: Clicar no botão de checkout
      cy.get('#checkout').click();  // Clica no botão de checkout
  
      // Passo 8: Verificar se a página de checkout foi carregada
      cy.url().should('include', '/checkout-step-one.html');  // Verifica se está na página de checkout
  
      // Passo 9: Preencher os dados do checkout
      cy.get('#first-name').type('Elenice');  // Preenche o primeiro nome
      cy.get('#last-name').type('Damitz');   // Preenche o sobrenome
      cy.get('#postal-code').type('90620250'); // Preenche o código postal
  
      // Passo 10: Clicar no botão Continue
      cy.get('#continue').click();  // Clica no botão de continuar para ir para a próxima etapa
  
      // Passo 11: Verificar se a URL foi alterada para a próxima etapa do checkout
      cy.url().should('include', '/checkout-step-two.html');  // Verifica se está na página de checkout-step-two
   
    // Passo 12: Clicar no botão Finish para finalizar a compra
    cy.get('#finish').click();  // Clica no botão de finalizar
   
    // Passo 13: Verificar se a URL é alterada para a página de confirmação de compra
    cy.url().should('include', '/checkout-complete.html');  // Verifica se está na página de confirmação de compra
   
    // Passo 14: Verificar se a mensagem de sucesso foi exibida
cy.get('.complete-header').should('contain.text', 'Thank you for your order!');  // Verifica se a mensagem de sucesso é exibida

 // Passo 15: Clicar no botão "Back Home" e verificar redirecionamento
 cy.get('[data-test="back-to-products"]').click();  // Clica no botão Back Home
   
 // Passo 16: Verificar se foi redirecionado para a página de inventário
 cy.url().should('include', '/inventory');  // Verifica se a URL contém /inventory, indicando que estamos na página inicial de produtos

    });
  });
  