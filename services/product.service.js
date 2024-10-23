// Products Listing.
const products = [
  {
    id: 1,
    name: 'Smartphone',
    description: '6.3 inch display with excellent performance.',
    price: 699,
    inStock: true
  },
  {
    id: 2,
    name: 'Laptop',
    description: '12 inch display with best performance.',
    price: 999,
    inStock: false
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    description: 'Connects with up to 20 meters distance, best performance.',
    price: 199,
    inStock: true
  },
  {
    id: 4,
    name: 'Knife',
    description: 'Vegetable and fruit knife, with great sharpness.',
    price: 99,
    inStock: true
  },
  {
    id: 5,
    name: 'Pen',
    description: 'Great pen with extra bright color.',
    price: 9,
    inStock: false
  },
];

// Find the product using productName and send response accordingly.
const getProductInfo = (productName) => {
  const product = products.find(
    (p) => {
      return p.name.toLowerCase() === productName.toLowerCase();
    }
  );

  if (product) {
    return {
      Product: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
      },
    };
  } else {
    return {
      Message: `Sorry, we couldn't find any product named '${productName}'.`,
    };
  }
}

// Check for the availability of the product using productName.
const checkStock = (productName) => {
  const product = products.find(
    (p) => {
      return p.name.toLowerCase() === productName.toLowerCase();
    }
  );

  if (product) {
    return product.inStock
      ? `Product ${product.name} is available.`
      : `Product ${product.name} is not available.`;
  } else {
    return {
      Message: `Sorry, we couldn't find any product named '${productName}'.`,
    };
  }
};

module.exports = {
  getProductInfo,
  checkStock,
};
