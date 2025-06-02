class pokemon {
  constructor(naam, type, level){
    this.naam = naam;
    this.type = type;
    this.level = level;
  }

  info() {
    console.log(`${this.naam} is een ${this.type}-type pokemon op level ${this.level}.`)
  }
  aanval() {
    console.log("De pokemon valt aan!");
  }
 
}
 export default pokemon;