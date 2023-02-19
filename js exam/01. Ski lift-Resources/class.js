class WineSelection {
  constructor(space) {
    this.space = Number;
    this.wines = [];
    this.bill = 0;
    this.paid = false;
  }
  reserveABottle(wineName, wineType, price) {
    if (this.wines.length > this.space) {
      throw new Error("Not enough space in the cellar.")
    }
    const paid = false;
    this.wines.push({
      wineName,
      wineType,
      price,
      paid,
    })
    return `You reserved a bottle of ${wineName} ${wineType} wine.`
  }
  payWineBottle(wineName, price) {
    let index = this.wines.findIndex(w => w.wines == wineName)
    let match = this.wines[index];

    console.log(match);

    if (match == 'undefined') {
      throw new Error(`${wineName} is not in the cellar`)
    }
    if (match == true) {
      throw new Error(`${wineName} has already been paid`)
    }
    match.paid = true;
    match.price = price;
    return `You bought a ${wineName} for a ${price}$.`
  }
  openBottle(wineName) {
    const index = this.wines.findIndex(w => w.wineName == wineName)
    const match = this.wines[index];
    if (match == 'undefined') {
      throw new Error("The wine, you're looking for, is not found.")
    }
    if (match.paid == false) {
      throw new Error(`${wineName} need to be paid before open the bottle.`)
    }
    this.wines.splice(index, 1);
    return `You drank a bottle of ${wineName}.`
  }
  cellarRevision(wineType) {
    if (wineType == 'undefined') {

      const result = this.wines.map(w => `${w.wineName} > ${w.wineType} - ${w.paid == true ? `Has paid` : `Not paid`} `)
      result.sort((a, b) => a.wineName.localeCompare(b.wineName))

      result.unshift(`You paid ${this.bill}$ for the wine.`)
      result.unshift(`You have space for ${this.space - this.wines.length} bottles more.`)
      return result;

    }
    const match = this.wines.find(wineType)
    if (match == 'undefined') {
      return `There is no ${wineType} in the cellar.`
    } else {
      return `${match.wineName} > ${match.wineType} - ${match.paid == true ? `Has Paid` : `Not Paid`}.`;
    }
  }

}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));


const selection = new WineSelection(2)
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));
