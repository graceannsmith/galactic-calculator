import GalacticCalc from './../src/galactic-calculator.js';

describe('GalacticCalc', () => {
test('should create and empty object', () => {
const emptyObject = new GalacticCalc();
expect(emptyObject).toEqual({});
});

describe('GalacticCalc', () => {
test('should create object with age property in Earth years', () => {
    const testOne = new GalacticCalc(42);
    expect(testOne).toEqual({currentEarthYear: 42})
})
})
});