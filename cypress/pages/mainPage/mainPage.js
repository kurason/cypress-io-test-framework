import BasePage from "../basePage";
import mainPageSelectors from "./mainPageSelectors"

class MainPage extends BasePage {

    verifyLogInToApp() {
        const expectedUrl = Cypress.env('testarena');

        cy.url().should('include', expectedUrl);
        cy.get(mainPageSelectors.myTasks).should('exist');
    }
}

export const mainPage = new MainPage();
