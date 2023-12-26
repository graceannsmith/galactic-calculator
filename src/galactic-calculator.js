export default class GalacticCalc {
    constructor(age, pastBirthday, futureBirthday) {
      this.age = this.calculatePlanetAges(age);
      this.pastBirthday = pastBirthday;
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
}