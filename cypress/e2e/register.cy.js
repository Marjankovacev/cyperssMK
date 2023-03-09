describe("registration tasts", () => {
   
    it("empty firstname NEG ", ()=>{
        cy.visit("/register");
        cy.get("#last-name").type("kovacevic");
        cy.get("#email").type("Kovacevic@gmail.com");
        cy.get("#password").type("Kovacevic1");
        cy.get("#password-confirmation").type("Kovacevic1");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
        cy.url().should("contain","/register");
    })
    it("empty last name", () => {
        cy.visit("/register");
        cy.get("#first-name").type("Miroslav");
        cy.get("#email").type("miroslavnenadovic@gmail.com");
        cy.get("#password").type("Nekasifra123");
        cy.get("#password-confirmation").type("Nekasifra123");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
        cy.url().should("contain","/register");
    })
    it("empty email", () => {
        cy.visit("/register");
        cy.get("#first-name").type("Miroslav");
        cy.get("#last-name").type("Nenadovic");
        cy.get("#password").type("Nekasifra123");
        cy.get("#password-confirmation").type("Nekasifra123");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
        cy.url().should("contain","/register");
    })

    it("Registar with valid data", () => {
        cy.visit("/register");
        cy.get("#first-name").type("Miroslav");
        cy.get("#last-name").type("Nenadovic");
        cy.get("#email").type("miroslavnenadovic@gmail.com");
        cy.get("#password").type("Nekasifra123");
        cy.get("#password-confirmation").type("Nekasifra123");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
        cy.url().should("contain","/logout");
    })
    
})