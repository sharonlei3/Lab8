describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el=>{
      expect($el).to.have.value(75);
    });
  });
  
  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    cy.get('#volume-number').then($el=>{
      expect($el).to.have.value(33);
    });
  });

  it('Volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    cy.get('#horn-sound').then($el=>{
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and sound sources change when you select the party horn radio button', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then($el=>{
      expect($el).to.have.attr('src','./assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then($el=>{
      expect($el).to.have.attr('src','./assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume changes when increasing volumes', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    cy.get('#volume-image').then($el=>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
    cy.get('#volume-slider').invoke('val',34).trigger('input');
    cy.get('#volume-image').then($el=>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-slider').invoke('val',0).trigger('input');
    cy.get('#volume-image').then($el=>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
    cy.get('#volume-slider').invoke('val',66).trigger('input');
    cy.get('#volume-image').then($el=>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-slider').invoke('val',67).trigger('input');
    cy.get('#volume-image').then($el=>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('honk button is disabled when the textbox input is a empty or a non-number', () => {
    cy.get('#volume-number').clear().type('  ');
    cy.get('#honk-btn').then($el=>{
      expect($el).to.have.attr('disabled');
    });

    cy.get('#volume-number').clear().type('cnjsdc');
    cy.get('#honk-btn').then($el=>{
      expect($el).to.have.attr('disabled');
    });
    
  });

  it('error is shown when you type a number outside of the given range for the volume textbox input', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('#volume-number').then($el => $el[0].checkValidity()).should('be.false');
    
    cy.get('#volume-number').clear().type('-1');
    cy.get('#volume-number').then($el => $el[0].checkValidity()).should('be.false');
  });

});
