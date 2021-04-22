Cypress.Commands.add(
  "getByTestId",
  {
    prevSubject: ["optional", "window", "document", "element"],
  },
  (subject, testId, options) => {
    const selector = `[data-cy="${testId}"]`;

    if (subject) {
      cy.wrap(subject).find(selector, options);
    } else {
      cy.get(selector, options);
    }
  }
);
