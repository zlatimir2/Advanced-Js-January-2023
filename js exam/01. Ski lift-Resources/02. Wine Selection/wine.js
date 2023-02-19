class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.wines.length >= this.space) {
      throw new Error("Not enough space in the cellar.");
    }
    this.wines.push({ wineName, wineType, price, paid: false });
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    const wine = this.wines.find((w) => w.wineName === wineName);
    if (!wine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }
    if (wine.paid) {
      throw new Error(`${wineName} has already been paid.`);
    }
    wine.paid = true;
    this.bill += price;
    return `You bought a ${wineName} for ${price}$.`;
  }

  openBottle(wineName) {
    const wineIndex = this.wines.findIndex((w) => w.wineName === wineName);
    if (wineIndex === -1) {
      throw new Error("The wine, you're looking for, is not found.");
    }
    const wine = this.wines[wineIndex];
    if (!wine.paid) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }
    this.wines.splice(wineIndex, 1);
    return `You drank a bottle of ${wineName}.`;
  }

  cellarRevision(wineType) {
    if (!wineType) {
      const emptySlots = this.space - this.wines.length;
      let cellarInfo = `You have space for ${emptySlots} bottles more.\n`;
      cellarInfo += `You paid ${this.bill}$ for the wine.\n`;
      this.wines
        .sort((a, b) => a.wineName.localeCompare(b.wineName))
        .forEach((wine) => {
          cellarInfo += `${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Paid" : "Not Paid"
            }.\n`;
        });
      return cellarInfo.trim();
    } else {
      const winesOfType = this.wines.filter((w) => w.wineType === wineType);
      if (winesOfType.length === 0) {
        throw new Error(`There is no ${wineType} in the cellar.`);
      }
      let cellarInfo = "";
      winesOfType
        .sort((a, b) => a.wineName.localeCompare(b.wineName))
        .forEach((wine) => {
          cellarInfo += `${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Paid" : "Not Paid"
            }.\n`;
        });
      return cellarInfo.trim();
    }
  }
}

const selection = new WineSelection(2)
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));
