import Component from "./Component";

describe("Given the class Component", () => {
  describe("When it receives a parent element div, className and html Tag h1", () => {
    test("Then it should render an element inside the div.", () => {
      // Arrange
      const parentElement = document.createElement(".container");
      const className = "main-title";
      const tagName = "h1";

      // Act
      // eslint-disable-next-line no-unused-vars
      const title = new Component(parentElement, className, tagName);
      const result = parentElement.querySelector("h1.main-title");

      // Assert
      
      expect(result).not.toBeNull();
    });
  });
});
