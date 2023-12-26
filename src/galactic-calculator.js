export default class GalacticCalc {
    constructor(age, pastBirthday, futureBirthday) {
      this.age = this.calculatePlanetAges(age);
      this.pastBirthday = this.calculatePlanetAgesSinceTargetBirthday(age, pastBirthday);
      this.futureBirthday = futureBirthday;
    }
    calculatePlanetAges(age) {
        return {
          currentEarthYear: Math.floor(age / 1),
          currentMercuryYear: Math.floor(age / 0.24),
          currentVenusYear: Math.floor(age / 0.62),
          currentMarsYear: Math.floor(age / 1.88),
          currentJupiterYear: Math.floor(age / 11.86)
        };
  }
  calculatePlanetAgesSinceTargetBirthday(age, targetBirthday) {
    const planetAges = this.calculatePlanetAges(age);
    const targetAges = this.calculatePlanetAges(targetBirthday);
    
    return {
      earthYearsSinceTargetBirthday: Math.floor(planetAges.currentEarthYear - targetAges.currentEarthYear),
      mercuryYearsSinceTargetBirthday: Math.floor(planetAges.currentMercuryYear - targetAges.currentMercuryYear),
      venusYearsSinceTargetBirthday: Math.floor(planetAges.currentVenusYear - targetAges.currentVenusYear),
      marsYearsSinceTargetBirthday: Math.floor(planetAges.currentMarsYear - targetAges.currentMarsYear),
      jupiterYearsSinceTargetBirthday: Math.floor(planetAges.currentJupiterYear - targetAges.currentJupiterYear)
    };
  }
}