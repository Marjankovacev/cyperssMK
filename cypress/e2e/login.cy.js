< reference types="Cypress" />
const locators = require("../fixtures/locators.json");

describe("login tests", () => {
    it("login with unregistred user",()=>{
        cy.visit("/");
        cy.get("a[href='/login']").click();
        cy.get(lokators.loginbutton).type("random@gmail.com");
        cy.get("#password").type("ddsdsdaf");
        cy.get("button").click();
        cy.url().should("contain","/login");
    })

    it("login with empty email",()=>{
        cy.visit("/");
        cy.get("a[href='/login']").click();
        cy.get("#password").type("ddsdsdaf");
        cy.get("button").click();
        cy.url().should("contain","/login");
       })

       it("login with empty password",()=>{
        cy.visit("/");
        cy.get("a[href='/login']").click();
        cy.get("#email").type("mirkokovacev@gmail.com");
        cy.get("button").click();
        cy.url().should("contain","/login");
    })



    it("visit gallery app", () => {
        cy.visit("/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("mirkokovacev@gmail.com");
        cy.get("#password").type("Mirkogalerija1");
        cy.get("button").click();
        cy.url().should("not.contain","/login");

    })
    it("Logout",()=>{
        cy.visit("/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("mirkokovacev@gmail.com");
        cy.get("#password").type("Mirkogalerija1");
        cy.get("button").click();
        cy.url().should("not.contain","/login");
        cy.get(".nav-link").eq(3).click();

    })


})