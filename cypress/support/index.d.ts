declare namespace Cypress {
  interface Chainable<Subject> {
    getByTestId<E extends Node = HTMLElement>(
      testId: string,
      options?: Partial<Loggable & Timeoutable & Withinable>
    ): Chainable<JQuery<E>>;
    loginToAdminPage(): Chainable<any>;
    matchImageSnapshot(name: string): Chainable<Subject>; // https://github.com/nrwl/nx/issues/1609#issuecomment-580757171
  }
}
