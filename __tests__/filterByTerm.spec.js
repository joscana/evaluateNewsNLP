const filterByTerm = require("../src/client/js/filterByTerm");

//For each element of the input array, we check the "url" property, matching it against a regular expression with the match method.
describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const input = [
          { id: 1, url: "https://www.url1.dev" },
          { id: 2, url: "https://www.url2.dev" },
          { id: 3, url: "https://www.link3.dev" }
      ];

      const output = [{ id: 3, url: "https://www.link3.dev" }];

      expect(filterByTerm(input, "link")).toEqual(output);
      expect(filterByTerm(input, "LINK")).toEqual(output);
    });
  });