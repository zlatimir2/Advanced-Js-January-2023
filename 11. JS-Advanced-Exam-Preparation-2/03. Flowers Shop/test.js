const { AssertionError } = require('chai');
const flowerShop = require('./flowerShop')
const assert = require('chai').assert;

describe('flowerShop', function () {
  it('calc price', () => {
    assert.equal(flowerShop.calcPriceOfFlowers('pp', 1, 1), "You need $1.00 to buy pp!")
    assert.equal(flowerShop.calcPriceOfFlowers('pp', 2, 1), "You need $2.00 to buy pp!")
    assert.equal(flowerShop.calcPriceOfFlowers('pp', 2, 2), "You need $4.00 to buy pp!")
  })
  it('calc price throws an error', () => {
    assert.throw(() => flowerShop.calcPriceOfFlowers('pp', 'p', 1), "Invalid input!")
    assert.throw(() => flowerShop.calcPriceOfFlowers('pp', 'p', '1'), "Invalid input!")
    assert.throw(() => flowerShop.calcPriceOfFlowers('pp', 1, '1'), "Invalid input!")
    assert.throw(() => flowerShop.calcPriceOfFlowers(1, 1, 1), "Invalid input!")
  })
  it('flowers availability', () => {
    assert.equal(flowerShop.checkFlowersAvailable('a', ['a', 'b', 'c']), 'The a are available!')
    assert.equal(flowerShop.checkFlowersAvailable('pp', ['a', 'b', 'c']), 'The pp are sold! You need to purchase more!')
  })
  it('sell flower', () => {
    assert.equal(flowerShop.sellFlowers(['a', 'b', 'c'], 0), 'b / c')

    assert.equal(flowerShop.sellFlowers(['a', 'b', 'c'], 1), 'a / c')
    assert.equal(flowerShop.sellFlowers(['a', 'b', 'c'], 2), 'a / b')
  })
  it('sell throws an error', () => {
    assert.throw(() => flowerShop.sellFlowers(['a', 'b', 'c']), 'Invalid input')
    assert.throw(() => flowerShop.sellFlowers(['a', 'b', 'c'], '1'), 'Invalid input')
    assert.throw(() => flowerShop.sellFlowers(['a', 'b', 'c'], 10), 'Invalid input')
    assert.throw(() => flowerShop.sellFlowers('abc', 1), 'Invalid input')
    assert.throw(() => flowerShop.sellFlowers(1, 1), 'Invalid input')
  })
})