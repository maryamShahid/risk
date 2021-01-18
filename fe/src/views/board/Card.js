class Card {
  constructor(territoryName, infantaryType) {
    this.territoryName = territoryName;
    this.infantaryType = infantaryType;
  }

  getTerritoryName() {
    return this.territoryName;
  }

  getInfantaryType() {
    return this.infantaryType;
  }
}

export default Card;
