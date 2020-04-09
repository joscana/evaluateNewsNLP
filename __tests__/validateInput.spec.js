import { validateInput } from '../src/client/js/validateInput'

describe("Input Validator Function", () => {
    test("it should take user input and check if it is a url", () => {
        const test1 = "Hi, this is Dave."
        const test2 = "http://www.cnn.com"
        const test3 = "https://www.cnn.com/2020/04/08/politics/fact-check-trump-coronavirus-briefing-april-8/index.html"

        expect(validateInput(test1)).toBeFalsy()
        expect(validateInput(test2)).toBeTruthy()
        expect(validateInput(test3)).toBeTruthy()
    });
});