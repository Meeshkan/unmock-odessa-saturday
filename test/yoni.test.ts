import add from "../src/yoni.add";

describe('Yoni Goldberg Test', () => {
    test('When 2 & 2 are given, 4 is the result', () => {
        //Arrange
        const firstArgument = 2;
        const secondArgument = 2;

        //Act
        const receivedResult = add(firstArgument, secondArgument);

        //Assert
        expect(receivedResult).toBe(4);
    });
});