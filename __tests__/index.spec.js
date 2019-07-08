import ReceiptPrinter from "../index";

describe('print receipt', () => {
  it('should return receipt string including name, price, and count when print receipt given one existing barcode', () => {
    expect(ReceiptPrinter.printReceipt(['0001'])).toBe("Receipts\n" +
      "------------------------------------------------------------\n" +
      "Coca Cola                       3          1\n" +
      "------------------------------------------------------------\n" +
      "Price: 3");
  });

  it('should return receipt string with two items and total price when print receipt given two different existing' +
    ' barcodes', () => {
    expect(ReceiptPrinter.printReceipt(['0001', '0002'])).toBe("Receipts\n" +
      "------------------------------------------------------------\n" +
      "Coca Cola                       3          1\n" +
      "Diet Coke                       4          1\n" +
      "------------------------------------------------------------\n" +
      "Price: 7");
  });

  it('should return receipt string including name, price, count and keep the order when print receipt given two same' +
    ' existing barcodes', () => {
    expect(ReceiptPrinter.printReceipt(['0001', '0002', '0001'])).toBe("Receipts\n" +
      "------------------------------------------------------------\n" +
      "Coca Cola                       3          2\n" +
      "Diet Coke                       4          1\n" +
      "------------------------------------------------------------\n" +
      "Price: 10");
  });

  it('should return formatted error message when print receipt given nonexistent barcode', () => {
    expect(ReceiptPrinter.printReceipt(['0001', '9999'])).toBe("[ERROR]: barcode does not exist");
  });
});

