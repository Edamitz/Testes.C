describe('Login Tests', () => {
  
  // Teste para login com credenciais válidas
  it('login com credenciais válidas', () => {
    cy.visit('https://www.saucedemo.com/');
    
    // Passo 1: Fazer login com credenciais válidas
    cy.get('#user-name').type('standard_user'); // insere o nome do user
    cy.get('#password').type('secret_sauce'); // insere a senha 
    cy.get('#login-button').click();  // Clica no botão de login
    
    // Passo 2: Verificar se foi redirecionado para a página de inventário
    cy.url().should('include', '/inventory.html');  // A URL deve incluir /inventory.html
  });

  it('login com credenciais inválidas', () => {
    cy.visit('https://www.saucedemo.com/');
    
    // Passo 1: Digitar credenciais inválidas
    cy.get('#user-name').type('invalid_user'); // insere o nome do user
    cy.get('#password').type('wrong_password'); // insere a senha  incorreta
    cy.get('#login-button').click();  // Clica no botão de login
    
    // Passo 2: Esperar pela mensagem de erro aparecer
    cy.get('[data-test="error"]', { timeout: 10000 })  // incluído timeout para 10 segundos
      .should('be.visible')  // Verifica se o elemento está visível
      .and('contain', 'Epic sadface: Username and password do not match any user in this service');  // Verifica se a mensagem de erro fornecida está correta
  });
  

 // Teste para login com usuário bloqueado
it('login com usuário bloqueado', () => {
  cy.visit('https://www.saucedemo.com/'); // acessa a URL
  cy.get('#user-name').type('locked_out_user'); // insere o nome do user bloqueado
  cy.get('#password').type('secret_sauce'); // insere a senha 
  cy.get('#login-button').click();  // Clica no botão de login

  // Passo 2: Verificar se a mensagem de erro de "usuário bloqueado" aparece
  cy.get('[data-test="error"]', { timeout: 10000 })  // Aumenta o timeout para aparecer a mensagem de erro
    .should('be.visible')
    .and('contain', 'locked out');
});


  // Teste para login com usuário com problema
  it('login de usuário com problema', () => {
    cy.visit('https://www.saucedemo.com/'); // acessa a URL
    cy.get('#user-name').type('problem_user'); // insere o nome do user com algum problema
    cy.get('#password').type('secret_sauce');  // insere a senha 
    cy.get('#login-button').click();  // Clica no botão de login
    cy.url().should('include', '/inventory');  // Verifica se a URL inclui /inventory
    cy.get('.inventory_item').should('have.length', 6);  // Verifica o número de itens no inventário
  });

  // Teste para login com falha de performance
  it('login com falha de performance', () => {
    cy.visit('https://www.saucedemo.com/'); // acessa a URL
    cy.get('#user-name').type('performance_glitch_user'); // insere o nome do user 
    cy.get('#password').type('secret_sauce'); // insere a senha
    cy.get('#login-button').click();  // Clica no botão de login
    cy.url().should('include', '/inventory');  // Verifica se a URL inclui /inventory
    cy.get('.inventory_item').should('have.length', 6);  // Verifica o número de itens no inventário
  });

// Teste para login com usuário já fornecido e credenciais incorretas
it('login com usuário já fornecido', () => {
  cy.visit('https://www.saucedemo.com/'); // acessa a URL
  cy.get('#user-name').type('invalid_user'); // insere o nome do user inválido
  cy.get('#password').type('wrong_password'); // insere a senha inválida
  cy.get('#login-button').click();  // Clica no botão de login

  // Passo 2: Verificar se a mensagem de erro aparece
  cy.get('[data-test="error"]', { timeout: 10000 })  // incluído timeout para aparecer a mensagem de erro
    .should('be.visible');
});


});


