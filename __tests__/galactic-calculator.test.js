import GalacticCalc from './../src/galactic-calculator.js';
describe('Galactic Calculator' , () => {
    test('should accurately create object with three properties', () => {
    const test1 = new GalacticCalc (45, 35, 55)
    expect(test1.age).toEqual(45);
    expect(test1.pastBirthday).toEqual(35);
});
test('should create an object with that displays age in earth, mercury,venus mars and jupiter years', () => {
    const test2 = new GalacticCalc(42,35,55)
    expect(test2.age).toEqual({
        currentEarthYear: 42,
        currentMercuryYear: 175,
        currentVenusYear: 67,
        currentMarsYear: 22,
        currentJupiterYear: 3
      })
})

});