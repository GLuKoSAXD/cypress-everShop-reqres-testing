class ApiReqres {
    
    getUsers(pageNumber) {
        return cy.request('GET', `${Cypress.env('UrlReqres')}/users?page=${pageNumber}`);
    }

    getSingleUser(id) {
        return cy.request('GET', `${Cypress.env('UrlReqres')}/users/${id}`);
    }

    getUserNotFound(id) {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('UrlReqres')}/users/${id}`, // diambil dari cypress.config.js
            failOnStatusCode: false // ini buat mencegah Cypress menggagalkan tes saat menerima 404
        });
    }

    createUser(payload) {
        return cy.request('POST', `${Cypress.env('UrlReqres')}/users`, payload);
    }

    updateUserPut(id, payload) {
        return cy.request('PUT', `${Cypress.env('UrlReqres')}/users/${id}`, payload);
    }

    updateUserPatch(id, payload) {
        return cy.request('PATCH', `${Cypress.env('UrlReqres')}/users/${id}`, payload);
    }

    deleteUser(id) {
        return cy.request('DELETE', `${Cypress.env('UrlReqres')}/users/${id}`);
    }

    getDelayedResponse(delaySeconds) {
        return cy.request('GET', `${Cypress.env('UrlReqres')}/users?delay=${delaySeconds}`);
    }

    //RESOURCES ENDPOINTS
    getListResource() {
        return cy.request('GET', `${Cypress.env('UrlReqres')}/unknown`);
    }

    getSingleResource(id) {
        return cy.request('GET', `${Cypress.env('UrlReqres')}/unknown/${id}`);
    }

    getResourceNotFound(id) {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('UrlReqres')}/unknown/${id}`,
            failOnStatusCode: false
        });
    }


    registerUser(payload) {
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('UrlReqres')}/register`,
            body: payload,
            failOnStatusCode: false
        });
    }
    loginUser(payload) {
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('UrlReqres')}/login`,
            body: payload,
            failOnStatusCode: false
        });
    }
}


export default new ApiReqres();