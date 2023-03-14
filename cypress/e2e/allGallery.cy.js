/// <reference types="Cypress" />
import { allGalleriesPage } from "../page_objects/allGalleries";
import { loginPage } from "../page_objects/loginPage";

describe("all gallery page test", () => {
    beaforEach.it("visit gallery app and log in", () => {
        cy.visit("/login");
        loginPage.login("nedovic.filip@gmail.com","Test12345");
        cy.url().should("not.include","/login");

    })
    it("all gallery successully loaded",() => {
        allGalleriesPage.allGalleriesHeading.should("be.visible")
        .add("have.text","All Galleries");

        allGalleriesPage.galleriesGrid.children().should("have.length",10);
        allGalleriesPage.galleriesGrid.children().each((el) => {
            expect(el).to.exist;
        })
    })
})
