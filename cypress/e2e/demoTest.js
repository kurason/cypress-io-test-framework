/// <reference types="cypress" />
import {loginPage} from '../pages/loginPage/loginPage'
import {mainPage} from '../pages/mainPage/mainPage'

describe('Demo TestArena Test', function () {
	
	// beforeEach(() => {

	//iterowanie przed kazdym kontekstem testu -> np. iterowanie po userach

	// })
	
	context('Proper login test', function () {
		
		// beforeEach(() => {
			
		// 	klasyczny beforeEach przed testem

		// })

		it('Demo login test', function () {
			loginPage.visitPage(Cypress.env('testarena')).login()
			// cy.contains('Zaloguj').click();
			mainPage.verifyLogInToApp();
		});
	});
});
