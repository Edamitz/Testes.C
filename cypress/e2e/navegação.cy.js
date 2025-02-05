
//teste com navegação no site
it('login com credenciais válidas e clicar em About', () => {
    // Passo 1: Visitar o site de login
    cy.visit('https://www.saucedemo.com/');
    
    // Passo 2: Fazer login com credenciais válidas
    cy.get('#user-name').type('standard_user'); // insere user
    cy.get('#password').type('secret_sauce'); // isere senha válida
    cy.get('#login-button').click();
    
    // Passo 3: Verificar se foi redirecionado para a página de inventário
    cy.url().should('include', '/inventory.html');
    
    // Passo 4: Clicar no botão do menu (ID react-burger-menu-btn)
    cy.get('#react-burger-menu-btn').click();
    
    // Passo 5: Clicar no link "About" no menu lateral
    cy.get('[data-test="about-sidebar-link"]').click();
  
    // redirecionamento para o domínio 'https://saucelabs.com'
       cy.origin('https://saucelabs.com', () => {
          cy.url().should('include', '/');  // Acessa a página 'about'
    });
  });
  
  