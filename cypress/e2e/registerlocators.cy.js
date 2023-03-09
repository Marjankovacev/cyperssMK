/// <reference types="Cypress" />
const locators = require("../fixtures/locators.json");
import { faker } from '@faker-js/faker';


describe("Registar test with locator",()=>{
    const userData = {
        randomFirstName: faker.name.firstName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(8, true)+ 1,
        shortPassword: faker.internet.password(2),
        randomPasswordwithoutnumber: faker.internet.password(8, true,"^[a-zA-Z0-9_]*$"),
    }
    beforeEach("Visit galery  app and click on registar link",() => {

        cy.visit("/");
        cy.get(locators.commonFormElements.navbarLink).eq(2).click();
    })

    it("registar with valid data using lokator",() => {

        cy.get(locators.registerPage.firstNameInput).type(userData.randomFirstName);
        cy.get(locators.registerPage.lastNameInput).type(userData.randomLastName);
        cy.get(locators.commonFormElements.emailInput).type(userData.randomEmail);
        cy.get(locators.commonFormElements.passwordInput).type(userData.randomPassword);
        cy.get(locators.registerPage.passwordConfirmationInput).type(userData.randomPassword);
        cy.get(locators.registerPage.tcCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("not.include","/register");
    })
    it("registar without first name",() => {
        
        cy.get(locators.registerPage.lastNameInput).type(userData.randomLastName);
        cy.get(locators.commonFormElements.emailInput).type(userData.randomEmail);
        cy.get(locators.commonFormElements.passwordInput).type(userData.randomPassword);
        cy.get(locators.registerPage.passwordConfirmationInput).type(userData.randomPassword);
        cy.get(locators.registerPage.tcCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("contain","/register");
    })
    it("registar without email",() => {
       
        cy.get(locators.registerPage.firstNameInput).type(userData.randomFirstName);
        cy.get(locators.registerPage.lastNameInput).type(userData.randomLastName);
        cy.get(locators.commonFormElements.emailInput).type(userData.randomEmail);
        cy.get(locators.commonFormElements.passwordInput).type(userData.randomPassword);
        cy.get(locators.registerPage.passwordConfirmationInput).type(userData.randomPassword);
        cy.get(locators.registerPage.tcCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("contain","/register");
    })

})