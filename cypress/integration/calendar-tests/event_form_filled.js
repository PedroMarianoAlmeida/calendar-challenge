describe('Create an Event on day 22', () => {
    it('should create an Event called My Unit Test on day 22', () => {
        cy.visit('http://localhost:3000');
        cy.get(':nth-child(4) > :nth-child(3)').click();
        cy.get(':nth-child(1) > .form-control').type('My Unit Test');
        cy.get(':nth-child(2) > .form-control').type('10:00');
        cy.get(':nth-child(3) > .form-control').type('12:00');
        cy.get(':nth-child(4) > .form-control').type('New York');
        cy.get('.btn-primary').click();
        cy.wait(10); //It is necessary this wait time to load the event div
        cy.get(':nth-child(4) > :nth-child(3) > div').click();
        cy.get('.popover-inner > .text-center').contains('My Unit Test');
    })
})