describe("Given the class Component", () => {
  describe("When it receives a parent element div, className and html Tag div", () => {
    test("Then it should render an element inside the div.", () => {
      // Arrange
      const parentElement = document.createElement(".container");
      const className = "main-page";
      const pokeUrl = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`;

      // Act
      // eslint-disable-next-line no-unused-vars
      const pokePage = new Page(pokeUrl);
      const result = parentElement.querySelector("div.main-page");

      // Assert

      expect(result).not.toBeNull();
    });
  });
});
