const withFilter = (products, filter) => {
  switch (filter) {
    case "XS":
      return products.filter((product) => product.size === "XS");
    case "S":
      return products.filter((product) => product.size === "S");
    case "M":
      return products.filter((product) => product.size === "M");
    case "L":
      return products.filter((product) => product.size === "L");
    case "XL":
      return products.filter((product) => product.size === "XL");
    case "XXL":
      return products.filter((product) => product.size === "XXL");
    default:
      return products;
  }
};

export default withFilter;