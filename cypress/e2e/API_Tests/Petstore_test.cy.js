import apiHelper from '../../support/pages/API_petstore'

describe('Operations about user', () => {

    it('Create user', () => {
        const requestBody = {
            id: apiHelper.numericInput(),
            username: apiHelper.alphabeticInput(),
            firstName: apiHelper.alphabeticInput(),
            lastName: apiHelper.alphabeticInput(),
            email: apiHelper.alphaNumericInput() + "@gmail.com",
            password: apiHelper.alphabeticInput() + "1234.",
            phone: apiHelper.numericInput(),
            userStatus: 0
        }
        cy.request(
            {
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/user',
                body: requestBody
            })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.include(requestBody.id);
            })
    });
    it('Create user - nagative test', () => {
        const requestBody = {
            id: '.,/+_)(**&^',
            username: apiHelper.alphabeticInput(),
            firstName: apiHelper.alphabeticInput(),
            lastName: apiHelper.alphabeticInput(),
            email: apiHelper.alphaNumericInput() + "@gmail.com",
            password: apiHelper.alphabeticInput() + "1234.",
            phone: apiHelper.numericInput(),
            userStatus: 90
        }
        cy.request(
            {
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/user',
                body: requestBody,
                failOnStatusCode: false
            })
            .then((response) => {
                expect(response.status).to.eq(500);
                expect(response.body.message).to.include("something bad happened");
            })
    });
    it('Find purchase order by ID', () => {
        const requestBody = {
            orderId: 12,
        }
        cy.request(
            {
                method: 'GET',
                url: 'https://petstore.swagger.io/v2/store/order/12',
                body: requestBody,
                failOnStatusCode: false
            })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.id).to.eq(requestBody.orderId);
                //expect(response.body.petId).to.eq(requestBody.orderId);
                //expect(response.body.quantity).to.eq(3);
                expect(response.body.status).to.eq('placed');
                expect(response.body.complete).to.eq(true);

            })
    });
    it('Find purchase order by ID - nagative test', () => {
        const requestBody = {
            orderId: 9,
        }
        cy.request(
            {
                method: 'GET',
                url: 'https://petstore.swagger.io/v2/store/order/9',
                body: requestBody,
                failOnStatusCode: false
            })
            .then((response) => {
                if (response.status === 200) {
                    expect(response.body.status).to.eq('placed')
                } else {
                expect(response.status).to.eq(404);
                expect(response.body.message).to.include("Order not found");
                }
            })
    });
    it('Place an order for a pet', () => {
        const requestBody = {
            id: apiHelper.numericInput(),
            petId: 1,
            quantity: 3,
            shipDate: "2024-06-19T22:10:56.002+0000",
            status: "placed",
            complete: true
        }
        cy.request(
            {
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/store/order',
                body: requestBody
            })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.id).to.eq(requestBody.id);
                expect(response.body.petId).to.eq(requestBody.petId);
                expect(response.body.quantity).to.eq(requestBody.quantity);
                expect(response.body.shipDate).to.eq("2024-06-19T22:10:56.002+0000");
                expect(response.body.status).to.eq(requestBody.status);
                expect(response.body.complete).to.eq(requestBody.complete);

            })
    });
    it('Place an order for a pet - negative test', () => {
        const requestBody = {
            id: apiHelper.numericInput(),
            petId: 'hj',
            quantity: 3,
            shipDate: "2024-06-19T22:10:56.002+0000",
            status: "placed",
            complete: true
        }
        cy.request(
            {
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/store/order',
                body: requestBody,
                failOnStatusCode: false
            })
            .then((response) => {
                expect(response.status).to.eq(500);
                expect(response.body.message).to.eq("something bad happened");
            })
    });

})