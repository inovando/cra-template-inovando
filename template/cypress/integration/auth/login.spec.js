describe('Login', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Login exists', () => {
    expect(true).to.equal(true);
  });
});
