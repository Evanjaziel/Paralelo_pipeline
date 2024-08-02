// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Visit_titulo', (url,titulo) => {
    cy.visit(url)
    cy.title().should('eq',titulo)
})

Cypress.Commands.add('Texto_selector', (selector, texto) => {
  cy.get(selector).should('be.visible').type(texto)
})

Cypress.Commands.add('Click_selector', (selector) => {
  cy.get(selector).should('be.visible').click({force:true})
})

Cypress.Commands.add('Type_visible', (selector,texto) => {
  cy.get(selector).should('be.visible').type(texto)
})



Cypress.Commands.add('Funcion_DEMOQA', (nombre,email,add1,tiempo) => {

  cy.get("#userName").type(nombre).wait(tiempo)
  cy.get("#userEmail").type(email).wait(tiempo)
  cy.get("#currentAddress").type(add1).wait(tiempo)
  cy.get("#permanentAddress").type(add1).wait(tiempo)
  cy.get('#submit').click().wait(tiempo)
     
})

Cypress.Commands.add('Funcion_DEMOQA2', (nom1, nom2, email, genero, cel, sub, hob, ruta, addr, state, city, tiempo) => {

  // Función para manejar campos vacíos y no vacíos
  const handleField = (selector, value) => {
    if (value === '') {
      cy.get(selector).clear(); // Limpia el campo si el valor es vacío
    } else {
      cy.get(selector).type(value); // Escribe el valor si no es vacío
    }
  };

  // Usa la función para manejar cada campo
  handleField('#firstName', nom1);
  cy.get('#firstName').tab();
  handleField('#lastName', nom2);
  cy.wait(tiempo);
  
  handleField('#userEmail', email);
  cy.wait(tiempo);
  
  cy.get('#genterWrapper > div.col-md-9.col-sm-12').contains(genero).click({ force: true }).wait(tiempo);
  
  handleField('#userNumber', cel);
  cy.wait(tiempo);
  
  handleField('#subjectsContainer', sub);
  cy.wait(tiempo);
  
  cy.get('#hobbiesWrapper > div.col-md-9.col-sm-12').contains(hob).click({ force: true }).wait(tiempo);
  
  cy.get('#uploadPicture').attachFile(ruta).wait(tiempo);
  
  handleField('#currentAddress', addr);
  cy.wait(tiempo);
  
  cy.get('#state > div > div.css-1hwfws3').should('be.visible').click();
  handleField('#state > div > div.css-1hwfws3', state);
  cy.wait(tiempo);
  
  cy.get('#city > div > div.css-1hwfws3').should('be.visible').click();
  handleField('#city > div > div.css-1hwfws3', city);
  cy.wait(tiempo);
  
  cy.get('#submit').should('exist').should('be.visible').click().wait(tiempo);
  
  
});


Cypress.Commands.add('BUG_NOMBRE', (selector, campo, tiempo) => {
  cy.get(selector).invoke('val').then(value => {
    let isValid = true; // Asume que el campo es válido hasta que se demuestre lo contrario

    // 1. Verifica que el campo no esté vacío
    if (value === '') {
      cy.log('#################################################');
      cy.log(`EL ${campo} TIENE CAMPOS VACIOS FORMATO INVALIDO`);
      cy.log('#################################################');
      isValid = false; // Marca el campo como no válido
      cy.get(selector).then(($elemento) => {
    // Verifica el estilo del borde
    const borde = $elemento.css('border');
    if (borde === '1px solid rgb(220, 53, 69)') {
      // Si el borde es el esperado, muestra este mensaje
      cy.log('###################################');
      cy.log(`SIN BUGS DETECTADOS PRUEBA CORRECTA`);
      cy.log('###################################');
    } else {
      // Si el borde no es el esperado, muestra este mensaje
      cy.log('######################################################################');
      cy.log('BUG DETECTADO EL FORMATO ES INCORRECTO PERO NO SE OBSERVA EN LA PAGINA');
      cy.log('######################################################################');
    }
  }).wait(tiempo)
    }

    // 2. Verifica que el campo no contenga números
    if (/\d/.test(value)) {
      cy.log('##############################################');
      cy.log(`EL ${campo} CONTIENE NUMEROS FORMATO INVALIDO`);
      cy.log('##############################################');
      isValid = false; // Marca el campo como no válido
      cy.get(selector).then(($elemento) => {
        // Verifica el estilo del borde
        const borde = $elemento.css('border');
        if (borde === '1px solid rgb(220, 53, 69)') {
          // Si el borde es el esperado, muestra este mensaje
          cy.log('###################################');
          cy.log(`SIN BUGS DETECTADOS PRUEBA CORRECTA`);
          cy.log('###################################');
        } else {
          // Si el borde no es el esperado, muestra este mensaje
          cy.log('######################################################################');
          cy.log('BUG DETECTADO EL FORMATO ES INCORRECTO PERO NO SE OBSERVA EN LA PAGINA');
          cy.log('######################################################################');
        }
      }).wait(tiempo)
    }

    // 3. Verifica que el campo no contenga caracteres especiales (solo letras)
    if (/[^a-zA-Z0-9\s]/.test(value)) {
      cy.log('#########################################################');
      cy.log(`EL ${campo} TIENE CARACTERES ESPECIALES FORMATO INVALIDO`);
      cy.log('#########################################################');
      isValid = false; // Marca el campo como no válido
      cy.get(selector).then(($elemento) => {
        // Verifica el estilo del borde
        const borde = $elemento.css('border');
        if (borde === '1px solid rgb(220, 53, 69)') {
          // Si el borde es el esperado, muestra este mensaje
          cy.log('###################################');
          cy.log(`SIN BUGS DETECTADOS PRUEBA CORRECTA`);
          cy.log('###################################');
        } else {
          // Si el borde no es el esperado, muestra este mensaje
          cy.log('######################################################################');
          cy.log('BUG DETECTADO EL FORMATO ES INCORRECTO PERO NO SE OBSERVA EN LA PAGINA');
          cy.log('######################################################################');
        }
      }).wait(tiempo)
    }

    // 4. Verifica que el campo tenga entre 3 y 30 letras
    if (value.length < 3 || value.length > 30) {
      cy.log('#################################################################');
      cy.log(`EL ${campo} TIENE MAS DE 30 LETRAS O MENOS DE 3 FORMATO INVALIDO`);
      cy.log('#################################################################');
      isValid = false; // Marca el campo como no válido
      cy.get(selector).then(($elemento) => {
        // Verifica el estilo del borde
        const borde = $elemento.css('border');
        if (borde === '1px solid rgb(220, 53, 69)') {
          // Si el borde es el esperado, muestra este mensaje
          cy.log('###################################');
          cy.log(`SIN BUGS DETECTADOS PRUEBA CORRECTA`);
          cy.log('###################################');
        } else {
          // Si el borde no es el esperado, muestra este mensaje
          cy.log('######################################################################');
          cy.log('BUG DETECTADO EL FORMATO ES INCORRECTO PERO NO SE OBSERVA EN LA PAGINA');
          cy.log('######################################################################');
        }
      }).wait(tiempo)
    }

    // Mensaje de éxito si todas las validaciones pasan
    if (isValid) {
      cy.log('#################################');
      cy.log(`EL ${campo} TIENE FORMATO VALIDO`);
      cy.log('#################################');
    }
  }).wait(tiempo);
});

Cypress.Commands.add('BUG_EMAIL', (selector,tiempo) => { 

  cy.get(selector).invoke('val').then((value)=>{
    let isValid = true
    const formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === '') {
      cy.log('#################################################');
      cy.log(`EL MAIL TIENE CAMPOS VACIOS FORMATO INVALIDO`);
      cy.log('#################################################');
      isValid = false; // Marca el campo como no válido
      cy.get(selector).then(($elemento) => {
    // Verifica el estilo del borde
    const borde = $elemento.css('border');
    if (borde === '1px solid rgb(220, 53, 69)') {
      // Si el borde es el esperado, muestra este mensaje
      cy.log('###################################');
      cy.log(`SIN BUGS DETECTADOS PRUEBA CORRECTA`);
      cy.log('###################################');
    } else {
      // Si el borde no es el esperado, muestra este mensaje
      cy.log('######################################################################');
      cy.log('BUG DETECTADO EL FORMATO ES INCORRECTO PERO NO SE OBSERVA EN LA PAGINA');
      cy.log('######################################################################');
    }
  }).wait(tiempo)
    }

    // 2. Verifica que el campo no contenga números
    if (!formato.test(value)) {
      cy.log('################################################');
      cy.log(`EL MAIL NO TIENE FORMATO DE EMAIL CAMPO INVALIDO`);
      cy.log('################################################');
      isValid = false; // Marca el campo como no válido
      cy.get(selector).then(($elemento) => {
        // Verifica el estilo del borde
        const borde = $elemento.css('border');
        if (borde === '1px solid rgb(220, 53, 69)') {
          // Si el borde es el esperado, muestra este mensaje
          cy.log('###################################');
          cy.log(`SIN BUGS DETECTADOS PRUEBA CORRECTA`);
          cy.log('###################################');
        } else {
          // Si el borde no es el esperado, muestra este mensaje
          cy.log('######################################################################');
          cy.log('BUG DETECTADO EL FORMATO ES INCORRECTO PERO NO SE OBSERVA EN LA PAGINA');
          cy.log('######################################################################');
        }
      }).wait(tiempo)
    }
       
    // Mensaje de éxito si todas las validaciones pasan
    if (isValid) {
      cy.log('############################');
      cy.log(`EL MAIL TIENE FORMATO VALIDO`);
      cy.log('############################');
    }

  }).wait(tiempo)
  
       
})

Cypress.Commands.add('BUG_CEL', (selector,tiempo) => { 

  cy.get(selector).invoke('val').then((value)=>{
    let isValid = true
 

    if (value === '') {
      cy.log('###########################################');
      cy.log(`EL CEL TIENE CAMPOS VACIOS FORMATO INVALIDO`);
      cy.log('###########################################');
      isValid = false; // Marca el campo como no válido
      cy.get(selector).then(($elemento) => {
    // Verifica el estilo del borde
    const borde = $elemento.css('border');
    if (borde === '1px solid rgb(220, 53, 69)') {
      // Si el borde es el esperado, muestra este mensaje
      cy.log('###################################');
      cy.log(`SIN BUGS DETECTADOS PRUEBA CORRECTA`);
      cy.log('###################################');
    } else {
      // Si el borde no es el esperado, muestra este mensaje
      cy.log('######################################################################');
      cy.log('BUG DETECTADO EL FORMATO ES INCORRECTO PERO NO SE OBSERVA EN LA PAGINA');
      cy.log('######################################################################');
    }
  }).wait(tiempo)
    }

    // 2. Verifica que el campo no contenga letras
    if (/[a-zA-Z]/.test(value)) {
      cy.log('################################################');
      cy.log(`EL CAMPO DE CEL CONTIENE LETRAS FORMATO INVALIDO`);
      cy.log('################################################');
      isValid = false; // Marca el campo como no válido
      cy.get(selector).then(($elemento) => {
        // Verifica el estilo del borde
        const borde = $elemento.css('border');
        if (borde === '1px solid rgb(220, 53, 69)') {
          // Si el borde es el esperado, muestra este mensaje
          cy.log('###################################');
          cy.log(`SIN BUGS DETECTADOS PRUEBA CORRECTA`);
          cy.log('###################################');
        } else {
          // Si el borde no es el esperado, muestra este mensaje
          cy.log('######################################################################');
          cy.log('BUG DETECTADO EL FORMATO ES INCORRECTO PERO NO SE OBSERVA EN LA PAGINA');
          cy.log('######################################################################');
        }
      }).wait(tiempo)
    }

    if (value.length !== 10) {
      cy.log('##################################');
      cy.log(`EL CEL NO TIENE FORMATO 10 DIGITOS`);
      cy.log('##################################');
      isValid = false; // Marca el campo como no válido
      cy.get(selector).then(($elemento) => {
        // Verifica el estilo del borde
        const borde = $elemento.css('border');
        if (borde === '1px solid rgb(220, 53, 69)') {
          // Si el borde es el esperado, muestra este mensaje
          cy.log('###################################');
          cy.log(`SIN BUGS DETECTADOS PRUEBA CORRECTA`);
          cy.log('###################################');
        } else {
          // Si el borde no es el esperado, muestra este mensaje
          cy.log('######################################################################');
          cy.log('BUG DETECTADO EL FORMATO ES INCORRECTO PERO NO SE OBSERVA EN LA PAGINA');
          cy.log('######################################################################');
        }
      }).wait(tiempo)
    }
       
    // Mensaje de éxito si todas las validaciones pasan
    if (isValid) {
      cy.log('###########################');
      cy.log(`EL CEL TIENE FORMATO VALIDO`);
      cy.log('###########################');
    }

  }).wait(tiempo)
  
       
})




