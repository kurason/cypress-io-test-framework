import BasePage from "../basePage";
import loginPageSelectors from "./loginPageSelectors";

class LoginPage extends BasePage {

    constructor() {
        super()
    }

    login(userEmail = 'administrator@testarena.pl', password = 'sumXQQ72$L') {
        cy.get(loginPageSelectors.email).type(userEmail);
		cy.get(loginPageSelectors.password).type(password);
		cy.get(loginPageSelectors.loginButton).contains('Zaloguj').click();

        return this;
    }
}

//ponizej wylacznie jak nie przekazujemy nic do konstruktora - tak to export przy deklaracji klasy
export const loginPage = new LoginPage()