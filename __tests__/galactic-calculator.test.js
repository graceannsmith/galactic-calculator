import GalacticCalc from './../src/galactic-calculator.js';
describe('Galactic Calculator' , () => {
    test('should accurately create object with three properties', () => {
    const test1 = new GalacticCalc (45, 35, 55)
    expect(test1.age).toEqual(45);
    expect(test1.pastBirthday).toEqual(35);
    
});

});