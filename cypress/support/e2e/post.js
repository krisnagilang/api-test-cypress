it('Create a user - POST', () => {
    let body = {
        "id": 0,
        "username": Cypress.env('username'),
        "firstName": "gilang",
        "lastName": "prayuda",
        "email": "krisna@mailsac.com",
        "password": "krisna123",
        "phone": "082237237273",
        "userStatus": 0
    }
    console.log(body)
    cy.request('POST', '/user', body).as('createUser');
    // Create user
    cy.get('@createUser').then(createUser => {
        expect(createUser.status).to.eq(200);
    });
});