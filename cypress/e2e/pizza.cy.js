describe('Pizza Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/pizza');
    });
  
    it('can add text to the box', () => {
      cy.get('#name-input')
        .type('John Doe')
        .should('have.value', 'John Doe');
  
      cy.get('#address-input')
        .type('123 Main St')
        .should('have.value', '123 Main St');
  
      cy.get('#phone-number-input')
        .type('123-456-7890')
        .should('have.value', '123-456-7890');
  
      cy.get('#special-text')
        .type('Extra cheese please')
        .should('have.value', 'Extra cheese please');
    });
  
    it('can select multiple toppings', () => {
      cy.get('input[type="checkbox"]').check(['pepperoni', 'sausage', 'chicken']);
    });
  
    it('can submit the form', () => {
      cy.get('#name-input').type('John Doe');
      cy.get('#address-input').type('123 Main St');
      cy.get('#phone-number-input').type('123-456-7890');
      cy.get('#size-dropdown').select('large');
      cy.get('input[type="checkbox"]').check(['pepperoni', 'sausage', 'chicken']);
      cy.get('#special-text').type('Extra cheese please');
  
      cy.get('#order-button').click();
    });
  });
  