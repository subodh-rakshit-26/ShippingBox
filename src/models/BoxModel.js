class BoxModel {
    static countries = {
      Sweden: 7.35,
      China: 11.53,
      Brazil: 15.63,
      Australia: 50.09,
    };
  
    constructor(receiverName, weight, boxColor, destinationCountry) {
      this.receiverName = receiverName;
      this.weight = weight;
      this.boxColor = boxColor;
      this.destinationCountry = destinationCountry;
      this.shippingCost = weight * BoxModel.countries[destinationCountry];
    }
  
    save() {
      const storedBoxes = BoxModel.getAll();
      localStorage.setItem('boxes', JSON.stringify([...storedBoxes, this]));
    }
  
    static getAll() {
      return JSON.parse(localStorage.getItem('boxes')) || [];
    }
  }
  
  export default BoxModel;