class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }
  reserveABottle(wineName, wineType, price) {
    if (this.wines.length > this.space) {
      throw new Error("Not enough space in the cellar.")
    }
    this.wines.push({
      wineName,
      wineType,
      price,
      paid: false
    })
    return `You reserved a bottle of ${wineName} ${wineType} wine.`
  }
  payWineBottle(wineName, price) {
    const index = this.wines.findIndex(w => w.wineName == wineName)
    const match = this.wines[index];

    if (match == 'undefined') {
      throw new Error(`${wineName} is not in the cellar`)
    }
    if (match.paid == true) {
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
      // return `You have space for ${emptySlots} bottles more. \n
      // You paid ${this.bill}$ for the wine.`

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