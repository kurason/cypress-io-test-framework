// ***********************************************
// This example commands.js shows you how to
// create the custom commands: 'createDefaultTodos'
// and 'createTodo'.
//
// The commands.js file is a great place to
// modify existing commands and create custom
// commands for use throughout your tests.
//
// You can read more about custom commands here:
// https://on.cypress.io/commands
// ***********************************************

require('@4tw/cypress-drag-drop');
import 'cypress-file-upload';
import 'cypress-real-events/support';

Cypress.Commands.add('addBoard', (input) => {
	cy.get('[data-cy="create-board"]').click();

	cy.get('[data-cy=new-board-input]').type(input + '{enter}');
});
