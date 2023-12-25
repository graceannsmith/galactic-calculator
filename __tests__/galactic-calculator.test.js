import GalacticCalc from './../src/galactic-calculator.js';
describe('GalacticCalc', () => {
test('should create and empty object', () => {
const emptyObject = GalacticCalc();
expect(emptyObject).toEqual({});
});
})