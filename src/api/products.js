// Sample product data
export const products = [
  {
    id: '1',
    name: 'Premium Rice',
    category: 'grains',
    price: 25000,
    unit: 'bag',
    image: '/images/products/rice.jpg',
    badge: 'Best Seller',
    features: [
      { icon: '🌾', text: 'Premium Quality' },
      { icon: '⚖️', text: '50kg per bag' },
      { icon: '🚛', text: 'Free Delivery' }
    ]
  },
  {
    id: '2',
    name: 'Fresh Tomatoes',
    category: 'vegetables',
    price: 1500,
    unit: 'basket',
    image: '/images/products/tomatoes.jpg',
    badge: 'New',
    features: [
      { icon: '🍅', text: 'Fresh Produce' },
      { icon: '⚖️', text: '10kg per basket' },
      { icon: '📦', text: 'Same Day Delivery' }
    ]
  },
  {
    id: '3',
    name: 'Broiler Chickens',
    category: 'poultry',
    price: 3500,
    unit: 'bird',
    image: '/images/products/chicken.jpg',
    features: [
      { icon: '🐔', text: 'Farm Raised' },
      { icon: '⚖️', text: '2.5kg average' },
      { icon: '✨', text: 'Organic Feed' }
    ]
  },
  {
    id: '4',
    name: 'Irrigation System',
    category: 'equipment',
    price: 75000,
    image: '/images/products/irrigation.jpg',
    badge: 'Sale',
    features: [
      { icon: '💧', text: 'Water Efficient' },
      { icon: '🔧', text: 'Easy Installation' },
      { icon: '⚡', text: 'Solar Powered' }
    ]
  },
  {
    id: '5',
    name: 'Sweet Corn',
    category: 'vegetables',
    price: 2000,
    unit: 'dozen',
    image: '/images/products/corn.jpg',
    features: [
      { icon: '🌽', text: 'Fresh & Sweet' },
      { icon: '📦', text: 'Bulk Available' },
      { icon: '🌱', text: 'Non-GMO' }
    ]
  },
  {
    id: '6',
    name: 'Layer Chickens',
    category: 'poultry',
    price: 2500,
    unit: 'bird',
    image: '/images/products/layers.jpg',
    features: [
      { icon: '🥚', text: 'High Yield' },
      { icon: '✨', text: 'Vaccinated' },
      { icon: '📦', text: 'Bulk Orders' }
    ]
  }
];

// Mock API endpoint
export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000); // Simulate network delay
  });
};

// Mock search function
export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Mock category filter
export const filterByCategory = (categoryId) => {
  if (categoryId === 'all') return products;
  return products.filter(product => product.category === categoryId);
};

// Mock price filter
export const filterByPrice = (range) => {
  switch (range) {
    case 'under-5000':
      return products.filter(product => product.price < 5000);
    case '5000-10000':
      return products.filter(product => product.price >= 5000 && product.price <= 10000);
    case '10000-50000':
      return products.filter(product => product.price > 10000 && product.price <= 50000);
    case 'over-50000':
      return products.filter(product => product.price > 50000);
    default:
      return products;
  }
}; 