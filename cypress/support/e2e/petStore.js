describe('Petstore API Inventory Testing', () => {
    it('Create a user - POST', () => {
    let body = {
        "id": 0,
        "username": Cypress.env('username'),
        "firstName": "gilang",
        "lastName": "prayuda",
        "email": "krisna@mailsac.com",
        "password": Cypress.env('password'),
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
    
    const loginUser = {
        method: 'GET',
        url: '/user/login',
        qs : {
            username : Cypress.env('username'),
            password : Cypress.env('password')
        }
    }
    it('Login registered user', () => {
        cy.request(loginUser).as('loginUser');
        cy.get('@loginUser').then(loginUser => {
            expect(loginUser.status).to.eq(200);
        })
    })
})