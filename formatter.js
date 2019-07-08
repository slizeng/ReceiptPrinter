const Formatter = {
  formatError(errorMessage) {
    return "[ERROR]: " + errorMessage;
  },

  formatReceipt(items, totalPrice) {
    const formatOneItem = ({ name, price, count }) => {
      return `${name}                       ${price}          ${count}\n`;
    };

    const formattedItems = items.reduce((result, item) => {
      return result + formatOneItem(item);
    }, '');

    return `Receipts\n` +
      `------------------------------------------------------------\n` +
      `${formattedItems}` +
      `------------------------------------------------------------\n` +
      `Price: ${totalPrice}`;
  }
};

export default Formatter;