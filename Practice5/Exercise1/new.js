console.log("Starting calculation…");

let productName = "Espresso Machine";
console.log("Product:", productName);

const prices = [120, 30, 15]; // base price, shipping, handling
const calculateSubtotal = () => prices[0] + prices[1] + prices[2];
console.log("Subtotal:", calculateSubtotal());
console.log("Subtotal after assignment:", calculateSubtotal());

const discountValue = 0.1;
const getDefaultDiscount = () => discountValue;

const discountRate = getDefaultDiscount();
console.log("Discount rate:", discountRate); // E
console.log("Discount rate after assignment:", getDefaultDiscount()); // F

const applyDiscount = (amount) => amount - amount * discountValue;
console.log("Total after discount:", applyDiscount(calculateSubtotal())); // G

const addTax = (() => {
  const rate = 0.08;
  return (amount) => amount + amount * rate;
})();

console.log(
  "Taxed total (incl. 8%):",
  addTax(applyDiscount(calculateSubtotal()))
); // H

productName = "Deluxe Espresso Machine";
console.log("Final product name:", productName);
