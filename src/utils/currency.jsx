const USD_TO_INR = 83;

export const formatINR = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(price * USD_TO_INR);
};