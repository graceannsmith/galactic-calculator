import GalacticCalc from './../src/galactic-calculator.js';
describe('GalacticCalc', () => {
test('should create and empty object', () => {
const emptyObject = new GalacticCalc();
expect(emptyObject).toEqual({});
});
});