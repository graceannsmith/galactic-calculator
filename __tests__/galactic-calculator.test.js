import GalacticCalc from './../src/galactic-calculator.js';
describe('Galactic Calculator' , () => {
    let test1;
    beforeEach(() => {
        test1 = new GalacticCalc (42, 35, 55);
    });
//     test('should accurately create object with three properties', () => {
//     expect(test1.age).toEqual(42);
//     expect(test1.pastBirthday).toEqual(35);
//     expect(test1.futureBirthday).toEqual(55);
// });
//     test('should create an object with that displays age in earth, mercury,venus mars and jupiter years', () => {
//     expect(test1.age).toEqual({
//             currentEarthYear: 42,
//             currentMercuryYear: 175,
//             currentVenusYear: 67,
//             currentMarsYear: 22,
//             currentJupiterYear: 3
//           });
//         });

//     test('should create an object with that displays time since past target bday in other planet years and current age', () => {
//     expect(test1.pastBirthday).toEqual({
//         earthYearsSinceTargetBirthday: 7,
//         mercuryYearsSinceTargetBirthday: 30,
//         venusYearsSinceTargetBirthday: 11,
//         marsYearsSinceTargetBirthday: 4,
//         jupiterYearsSinceTargetBirthday: 1
//     });
// });
    test('should create an object with that displays time until future target bday in other planet years and current age', () => {
    expect(test1.futureBirthday).toEqual({
        earthYearsUntilTargetBirthday: 13,
        mercuryYearsUntilTargetBirthday: 54,
        venusYearsUntilTargetBirthday: 21,
        marsYearsUntilTargetBirthday: 7,
        jupiterYearsUntilTargetBirthday: 1    
    });
    
        console.log(test1);
    });
   
  });



