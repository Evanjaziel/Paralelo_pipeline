/// <reference types="Cypress"/>
require('cypress-xpath')
require('cypress-plugin-tab')
import 'cypress-file-upload'

const tiempo = 1000

describe('Logeo de orange', () => {
  
  it('Test The Happy path', () => {
    cy.Visit_titulo('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login','OrangeHRM').wait(tiempo)
    cy.Type_visible(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input','Admin').wait(tiempo)
    cy.Type_visible(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input','admin123').wait(tiempo)
    cy.Click_selector('.oxd-button').wait(tiempo)
  })

})