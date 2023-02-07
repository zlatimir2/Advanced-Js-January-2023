const { assert } = require('chai');
const lookupChar = require('../02.js');

describe('LookUpCharr', () => {
  it('Should return undefined if first arg is not a string', () => {
    assert.equal(lookupChar(1, 1), undefined);
  })
  it('Should return undefined if second arg is not a integer', () => {
    assert.equal(lookupChar('string', 1.5), undefined);
  })
  it('Should return undefined if second arg is not correct', () => {
    assert.equal(lookupChar('string', 'string'), undefined);
  })
  it('Should return "Incorrect index" if index is lower than zero', () => {
    assert.equal(lookupChar('string', -1), 'Incorrect index');
  })

  it('Should return "Incorrect index" if index is outside of the boundry of the array', () => {
    assert.equal(lookupChar('test', 10), 'Incorrect index');
  })
  it('Should return the correct character at index 0', () => {
    assert.equal(lookupChar('test', 0), 't');
  })
  it('Should return the correct character if the index is the last of the length', () => {
    assert.equal(lookupChar('test', 3), 't');
  })
  it('Should return the correct character ', () => {
    assert.equal(lookupChar('string', 0), 's');
  })
  it('Should return the correct character ', () => {
    assert.equal(lookupChar('Pesho', 4), 'o');
  })
});