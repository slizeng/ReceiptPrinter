import Formatter from "./formatter";
import Storage from "./storage";

const ReceiptPrinter = {
  printReceipt(barcodes) {
    const selectedItems = barcodes
      .map(barcode => Storage.selectItemByBarcodes(barcode))
      .filter(item => item !== undefined);

    if (barcodes.length !== selectedItems.length) {
      return Formatter.formatError('barcode does not exist');
    }

    const parsedItems = this.deduplicateAndTransform(selectedItems);

    return Formatter.formatReceipt(parsedItems, this.calculateTotalPrice(parsedItems));
  },

  deduplicateAndTransform(items) {
    let hash = {};

    items.forEach(({ id, count = 1, ...otherProps }) => {
      const nextCount = hash[id] ? count + 1 : count;
      hash = { ...hash, [id]: { id, count: nextCount, ...otherProps } }
    });

    return Object.values(hash);
  },

  calculateTotalPrice(itemsWithCount) {
    return itemsWithCount.reduce((total, { price, count = 1 }) => total + price * count, 0);
  }
};

export default ReceiptPrinter;
