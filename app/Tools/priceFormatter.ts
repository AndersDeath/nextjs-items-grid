export const formatPriceToEUR = (price: number): string => {
  if (isNaN(price)) {
    return "Invalid Price";
  }

  const formattedPrice = new Intl.NumberFormat("sfb", {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "symbol",
    minimumFractionDigits: 0
  }).format(price);

  return formattedPrice;
};
