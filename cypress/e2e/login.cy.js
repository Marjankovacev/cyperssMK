describe("login tests", () => {
    it("login with unregistred user",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get("a[href='/login']").click();
        cy.get("#email").type("random@gmail.com");
        cy.get("#password").type("ddsdsdaf");
        cy.get("button").click();
        cy.url().should("contain","/login");
    })

    it("login with empty email",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get("a[href='/login']").click();
        cy.get("#password").type("ddsdsdaf");
        cy.get("button").click();
        cy.url().should("contain","/login");
       })

       it("login with empty password",()=>{
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get("a[href='/login']").click();
        cy.get("#email").type("mirkokovacev@gmail.com");
        cy.get("button").click();
        cy.url().should("contain","/login");
    })



    it("visit gallery app", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("mirkokovacev@gmail.com");
        cy.get("#password").type("Mirkogalerija1");
        cy.get("button").click();

    })
})