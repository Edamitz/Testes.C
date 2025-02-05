describe('Testes de Carrinho - Login e Remover Itens', () => {
    it('login com sucesso', () => {
        // Passo 1: Acessar o site
        cy.visit('https://www.saucedemo.com/');
        
        // Passo 2: Esperar os campos de login estarem visíveis
        cy.get('#user-name', { timeout: 10000 }).should('be.visible');
        cy.get('#password', { timeout: 10000 }).should('be.visible');
        cy.get('#login-button', { timeout: 10000 }).should('be.visible');
        
        // Passo 3: Preencher os campos de login e clicar no botão
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        
        // Passo 4: Verificar se o login foi bem-sucedido e se redirecionou corretamente
        cy.url().should('include', '/inventory.html'); // Verifica se a URL correta de inventário foi carregada
    });

    it('adicionar e remover item do carrinho', () => {
        // Passo 1: Fazer login primeiro, e aguardar o redirecionamento para a página do inventário
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        
        // Passo 2: Verificar se a URL da página de inventário está correta após o login
        cy.url().should('include', '/inventory.html');
        
        // Passo 3: Adicionar o item ao carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();  // Adiciona o item
        
        // Passo 4: Verificar se o ícone do carrinho tem o número de itens correto
        cy.get('.shopping_cart_badge').should('have.text', '1');  // Verifica se há 1 item no carrinho
        
        // Passo 5: Acessar a página do carrinho
        cy.get('[data-test="shopping-cart-link"]').click();  // Clica no link do carrinho
        
        // Passo 6: Verificar se o botão de remover está visível
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');  // Verifica se o botão de remover está visível
        
        // Passo 7: Clicar para remover o item
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();  // Remove o item
        
        // Passo 8: Espera para garantir que a remoção foi aplicada
        cy.wait(1000);  // Adicionado o timeout para aguardar 1 segundo e garantir que a remoção foi realizada
        
        // Passo 9: Verificar se o carrinho está vazio
        cy.get('.shopping_cart_badge').should('not.exist');  // Verifica se o ícone de carrinho foi removido
    });
});
