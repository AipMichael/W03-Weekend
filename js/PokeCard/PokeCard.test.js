describe("Given the class Component", () => {
  describe("When it receives a parent element ul, className and html Tag li", () => {
    test("Then it should render an element inside the ul.", () => {
      // Arrange
      const parentElement = document.createElement(".container");
      const className = "a-card";
      const pokeUrl = "https://pokeapi.co/api/v2/pokemon/6/";

      // Act
      // eslint-disable-next-line no-unused-vars
      const pokeCard = new Card(pokeUrl);
      const result = parentElement.querySelector("div.a-card");

      // Assert

      expect(result).not.toBeNull();
    });
  });
});
