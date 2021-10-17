describe("Given a Button class constructor", () => {
  describe("When it receives a div container, a className and a text", () => {
    test("Then it should render a button element with text inside the button", () => {
      const container = document.createElement("div");
      const text = "meow";
      const className = "main-button"

      const button = new PaginationButton(container, className, text);

      expect(button.element.textContent).toBe(text);
    });
  });

    describe("When it receives a div container, a className, a text and a function", () => {
    test("Then when the user clicks the button, the function should be invoked", () => {
      const container = document.createElement("div");
      const text = "meow";
      const className = "main-button"
      const action = jest.fn();

      const button = new PaginationButton(container, className, text, action);
      button.dispatchEvent(new Event("click"));

      expect(action).toHaveBeenCalled();
    });
  });
});