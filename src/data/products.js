export const categories = [
  {
    id: 'grains',
    name: 'Grains & Cereals',
    icon: '🌾',
    description: 'High-quality grains and cereals from local farmers'
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    icon: '🥬',
    description: 'Fresh, organic vegetables'
  },
  {
    id: 'fruits',
    name: 'Fruits',
    icon: '🍎',
    description: 'Seasonal and exotic fruits'
  },
  {
    id: 'livestock',
    name: 'Livestock',
    icon: '🐄',
    description: 'Healthy livestock and cattle'
  },
  {
    id: 'poultry',
    name: 'Poultry',
    icon: '🐔',
    description: 'Farm-fresh poultry products'
  },
  {
    id: 'equipment',
    name: 'Farm Equipment',
    icon: '🚜',
    description: 'Modern farming tools and machinery'
  },
  {
    id: 'seeds',
    name: 'Seeds & Seedlings',
    icon: '🌱',
    description: 'Quality seeds and young plants'
  },
  {
    id: 'fertilizers',
    name: 'Fertilizers',
    icon: '💊',
    description: 'Organic and chemical fertilizers'
  }
];

export const products = [
  // Grains & Cereals
  {
    id: 'grain-001',
    name: 'Premium Rice',
    category: 'grains',
    price: 25000,
    unit: 'bag',
    image: '/images/products/rice.jpg',
    badge: 'Best Seller',
    stock: 150,
    features: [
      { icon: '🌾', text: 'Premium Quality' },
      { icon: '⚖️', text: '50kg per bag' },
      { icon: '🚛', text: 'Free Delivery' }
    ],
    description: 'High-quality local rice, perfect for both domestic and commercial use.'
  },
  {
    id: 'grain-002',
    name: 'Yellow Corn',
    category: 'grains',
    price: 15000,
    unit: 'bag',
    image: '/images/products/corn.jpg',
    stock: 200,
    features: [
      { icon: '🌽', text: 'Fresh Harvest' },
      { icon: '⚖️', text: '25kg per bag' },
      { icon: '✨', text: 'Grade A Quality' }
    ],
    description: 'Fresh yellow corn suitable for both human consumption and animal feed.'
  },
  {
    id: 'grain-003',
    name: 'Millet',
    category: 'grains',
    price: 18000,
    unit: 'bag',
    image: '/images/products/millet.jpg',
    badge: 'New',
    stock: 75,
    features: [
      { icon: '🌾', text: 'Organic' },
      { icon: '⚖️', text: '25kg per bag' },
      { icon: '🌱', text: 'Non-GMO' }
    ],
    description: 'Organic millet grains, rich in nutrients and perfect for healthy diets.'
  },

  // Vegetables
  {
    id: 'veg-001',
    name: 'Fresh Tomatoes',
    category: 'vegetables',
    price: 1500,
    unit: 'basket',
    image: '/images/products/tomatoes.jpg',
    badge: 'Fresh',
    stock: 100,
    features: [
      { icon: '🍅', text: 'Fresh Produce' },
      { icon: '⚖️', text: '10kg per basket' },
      { icon: '📦', text: 'Same Day Delivery' }
    ],
    description: 'Fresh, ripe tomatoes perfect for daily cooking needs.'
  },
  {
    id: 'veg-002',
    name: 'Green Peppers',
    category: 'vegetables',
    price: 1200,
    unit: 'basket',
    image: '/images/products/peppers.jpg',
    stock: 80,
    features: [
      { icon: '🫑', text: 'Fresh Daily' },
      { icon: '⚖️', text: '5kg per basket' },
      { icon: '🌱', text: 'Organic' }
    ],
    description: 'Crisp, fresh green peppers from organic farms.'
  },

  // Livestock
  {
    id: 'lvst-001',
    name: 'Dairy Cow',
    category: 'livestock',
    price: 350000,
    unit: 'cow',
    image: '/images/products/dairy-cow.jpg',
    badge: 'Premium',
    stock: 10,
    features: [
      { icon: '🥛', text: 'High Milk Yield' },
      { icon: '✨', text: 'Vaccinated' },
      { icon: '🏥', text: 'Health Certificate' }
    ],
    description: 'Healthy dairy cows with high milk production capacity.'
  },
  {
    id: 'lvst-002',
    name: 'Goat',
    category: 'livestock',
    price: 45000,
    unit: 'goat',
    image: '/images/products/goat.jpg',
    stock: 25,
    features: [
      { icon: '🐐', text: 'Healthy' },
      { icon: '✨', text: 'Vaccinated' },
      { icon: '📦', text: 'Transport Available' }
    ],
    description: 'Healthy goats suitable for meat and breeding.'
  },

  // Poultry
  {
    id: 'poul-001',
    name: 'Layer Chickens',
    category: 'poultry',
    price: 2500,
    unit: 'bird',
    image: '/images/products/layers.jpg',
    badge: 'Best Value',
    stock: 500,
    features: [
      { icon: '🥚', text: 'High Yield' },
      { icon: '✨', text: 'Vaccinated' },
      { icon: '📦', text: 'Bulk Orders' }
    ],
    description: 'Productive layer chickens with excellent egg-laying capacity.'
  },

  // Equipment
  {
    id: 'equip-001',
    name: 'Irrigation System',
    category: 'equipment',
    price: 75000,
    unit: 'set',
    image: '/images/products/irrigation.jpg',
    badge: 'Sale',
    stock: 15,
    features: [
      { icon: '💧', text: 'Water Efficient' },
      { icon: '🔧', text: 'Easy Installation' },
      { icon: '⚡', text: 'Solar Powered' }
    ],
    description: 'Modern irrigation system with smart water management features.'
  },

  // Seeds
  {
    id: 'seed-001',
    name: 'Tomato Seeds',
    category: 'seeds',
    price: 500,
    unit: 'pack',
    image: '/images/products/tomato-seeds.jpg',
    badge: 'New',
    stock: 1000,
    features: [
      { icon: '🌱', text: 'High Germination' },
      { icon: '✨', text: 'Disease Resistant' },
      { icon: '📦', text: 'Bulk Available' }
    ],
    description: 'High-quality tomato seeds with excellent germination rate.'
  },

  // Fertilizers
  {
    id: 'fert-001',
    name: 'Organic Compost',
    category: 'fertilizers',
    price: 3000,
    unit: 'bag',
    image: '/images/products/compost.jpg',
    badge: 'Organic',
    stock: 200,
    features: [
      { icon: '🌱', text: '100% Organic' },
      { icon: '⚖️', text: '25kg per bag' },
      { icon: '🌿', text: 'Multi-purpose' }
    ],
    description: 'Natural organic compost perfect for all types of plants.'
  }
];

export const getProductsByCategory = (categoryId) => {
  if (categoryId === 'all') return products;
  return products.filter(product => product.category === categoryId);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterByPrice = (min, max) => {
  return products.filter(product => 
    product.price >= min && (max ? product.price <= max : true)
  );
}; 