const findNewApartment = require('./findApartment');
const assert = require('chai').assert;

describe('tests', function () {
  describe('isGoodLocation', () => {
    it('city is string', () => {
      assert.throw(() => findNewApartment.isGoodLocation(1, 'a'), 'Invalid input!')
    })
    it('cities validate', () => {
      assert.equal(findNewApartment.isGoodLocation('Montana', true), 'This location is not suitable for you.')
      assert.equal(findNewApartment.isGoodLocation('Vraca', true), 'This location is not suitable for you.')
      assert.equal(findNewApartment.isGoodLocation('Lom', false), 'This location is not suitable for you.')
    })
    it('public transport', () => {
      assert.equal(findNewApartment.isGoodLocation('Sofia', false), 'There is no public transport in area.')
      assert.equal(findNewApartment.isGoodLocation('Varna', false), 'There is no public transport in area.')
      assert.equal(findNewApartment.isGoodLocation('Plovdiv', false), 'There is no public transport in area.')
    })
    it('goHome', () => {
      assert.equal(findNewApartment.isGoodLocation('Sofia', true), 'You can go on home tour!')
    })

  })
  describe('isLargeEnough', () => {
    it('Valid Input', () => {
      assert.throw(() => findNewApartment.isLargeEnough('aaa', 'aa'), 'Invalid input!');
      assert.throw(() => findNewApartment.isLargeEnough(111, 'aa'), 'Invalid input!');
      assert.throw(() => findNewApartment.isLargeEnough(true, [1, 2]), 'Invalid input!');
      assert.throw(() => findNewApartment.isLargeEnough(111, 111), 'Invalid input!');
      assert.throw(() => findNewApartment.isLargeEnough([], 111), 'Invalid input!');
    })
    it('returning', () => {
      assert.equal(findNewApartment.isLargeEnough([10, 10, 10], 5), '10, 10, 10')
      assert.equal(findNewApartment.isLargeEnough([10, 10, 10], 10), '10, 10, 10')
      assert.equal(findNewApartment.isLargeEnough([1, 1, 1], 1), '1, 1, 1')
    })
  })
  describe('isItAffortable', () => {
    it('valid input', () => {
      assert.throw(() => findNewApartment.isItAffordable('aaa', 'aa'), 'Invalid input!');
      assert.throw(() => findNewApartment.isLargeEnough(0, 0), 'Invalid input!');
      assert.throw(() => findNewApartment.isLargeEnough(-1, 500), 'Invalid input!');
      assert.throw(() => findNewApartment.isLargeEnough(500, -1), 'Invalid input!');

    })
    it('returns not enough money', () => {
      assert.equal(findNewApartment.isItAffordable(11, 10), 'You don\'t have enough money for this house!')
      assert.equal(findNewApartment.isItAffordable(22, 21), 'You don\'t have enough money for this house!')
      assert.equal(findNewApartment.isItAffordable(2, 1), 'You don\'t have enough money for this house!')
    })
    it('retruns new home', () => {
      assert.equal(findNewApartment.isItAffordable(10, 11), 'You can afford this home!')
    })
  })
})