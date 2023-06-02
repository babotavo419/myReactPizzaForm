describe('Pizza Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza');
  });

  it('displays the name error message', () => {
    cy.contains((content) => {
      const regex = /name must be at least 2 characters/i;
      return regex.test(content);
    }).should('be.visible');
  });

  it('can fill out the form', () => {
    cy.get('#name-input').type('John Doe');
    cy.get('#address-input').type('123 Main St');
    cy.get('#phone-number-input').type('123-456-7890');
    cy.get('#size-dropdown').select('large');
    cy.get('input[type="checkbox"]').check(['pepperoni', 'sausage', 'chicken']);
    cy.get('#special-text').type('Extra cheese please');
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

  