describe('Users home page view', () => {

  it('Should contain a header', () => {
    cy.get['data-cy=header'].contains('Sick Trick Wish List')
  })
  it('Should list the current tricks', () => {
    cy.get['data-cy=trick-1'].contains('stance: regular, name: treflip, obstacle: flat ground, tutorial: https://www.youtube.com/watch?v=XGw3YkQmNig, id: 1')
    cy.get['data-cy=trick-2'].contains('stance: switch, name: heelflip, obstacle: stairs, tutorial: https://www.youtube.com/watch?v=9N9swrZU1HA, id: 2')
    cy.get['data-cy=trick-3'].contains('stance: regular, name: frontside 50-50, backside 180 out, obstacle: ledge, tutorial: https://www.youtube.com/watch?v=9N9swrZU1HA, id: 3')
  })
  it('Should have an input field allowing a user to enter a new name', () => {
    cy.get['data-cy=new-trick-name'].should.exist
  })
  it('Should have an input field allowing a user to select a trick stance', () => {
    cy.get['data-cy=new-trick-stance'].should.exist
  })
  it('Should have an input field allowing a user to select a trick obstacle', () => {
    cy.get['data-cy=new-trick-obstacle'].should.exist
  })
  it('Should have an input field allowing a user to enter a tutorial link', () => {
    cy.get['data-cy=new-trick-tutorial'].should.exist
  })
  it('Should have a submit button allowing the user to add a new trick', () => {
    cy.get['data-cy=new-trick-submit'].should.exist
  })
})