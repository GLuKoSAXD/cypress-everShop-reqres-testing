import apiReqres from "../../POM/apiReqresTest";
import { faker } from "@faker-js/faker";
import reqresData from "../../fixtures/reqresPayload.json";
import '@shelex/cypress-allure-plugin';

describe('API Reqres Tests - All Endpoints', () => {

    it('should create a new user (POST 201)', () => {
        const payload = {
            name: faker.person.fullName(), // faker full name
            job: faker.person.jobTitle() // faker job title
        };
        apiReqres.createUser(payload).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('name', payload.name);
            expect(response.body).to.have.property('id');
        });
    });

    it('should update all user data (PUT 200)', () => {
        apiReqres.updateUserPut(2, reqresData.updatePut).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('updatedAt');
        });
    });

    it('should update user data (PATCH 200)', () => {
        apiReqres.updateUserPatch(2, reqresData.updatePatch).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('job', reqresData.updatePatch.job);
        });
    });


    //AUTH 
    it('should successfully register a user (POST 200)', () => {
        apiReqres.registerUser(reqresData.validAuth).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
        });
    });

    it('should fail to register if password is empty (POST 400)', () => {
        apiReqres.registerUser(reqresData.invalidRegister).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Missing password');
        });
    });

    it('should successfully login a user (POST 200)', () => {
        apiReqres.loginUser(reqresData.validAuth).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
        });
    }); 

    it('should fail to login if password is empty (POST 400)', () => {
        apiReqres.loginUser(reqresData.invalidLogin).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Missing password');
        });    
    });
});