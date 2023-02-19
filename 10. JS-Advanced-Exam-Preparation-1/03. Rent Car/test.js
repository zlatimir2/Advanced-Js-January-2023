const { expect } = require('chai');
const rentCar = require("./rentCar");


describe("", function () {
  it('finds one car'), () => {
    const shop = ["a", "b", "c"];
    const model = 'a';
    const result = rentCar.searchCar(shop, model);

    expect(result).to.equal('There is 1 car of model a in the catalog!')
  }
  it('finds two cars'), () => {
    const shop = ["a", "b", "a"];
    const model = 'a';
    const result = rentCar.searchCar(shop, model);

    expect(result).to.equal('There is 2 car of model a in the catalog!')

  }
  it('invalid shop'), () => {
    expect(() => {
      rentCar.searchCar(5, 'a')
    }).to.throw()
  }
  it('invalid model'), () => {
    expect(() => {
      rentCar.searchCar(["a", "b", "a"], 5)
    }).to.throw()
  }
  it('ivalid shop (string)'), () => {

  }
  it('car not found'), () => {

  }
});