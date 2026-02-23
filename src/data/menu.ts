export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  category: 'Starters' | 'Main Course' | 'Biryani & Bowls' | 'Combos' | 'Desserts' | 'Beverages';
  image?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: '1',
    name: 'Truffle Mushroom Arancini',
    description: 'Crispy risotto balls infused with truffle oil, served with marinara dip.',
    price: 249,
    isVeg: true,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Spicy Honey Glazed Wings',
    description: 'Chicken wings tossed in our signature spicy honey garlic sauce.',
    price: 299,
    isVeg: false,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Hara Bhara Kebab',
    description: 'Spinach and green pea patties, shallow fried and served with mint chutney.',
    price: 229,
    isVeg: true,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Chicken 65',
    description: 'Spicy, deep-fried chicken chunks marinated in ginger, lemon, and red chilies.',
    price: 279,
    isVeg: false,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'Cheesy Garlic Bread',
    description: 'Toasted baguette slices topped with mozzarella, garlic butter, and herbs.',
    price: 199,
    isVeg: true,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1619531040576-f398d7407619?auto=format&fit=crop&w=800&q=80'
  },

  // Main Course
  {
    id: '6',
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese cubes cooked in a rich, creamy tomato and cashew gravy.',
    price: 329,
    isVeg: true,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    name: 'Butter Chicken',
    description: 'Tandoori chicken simmered in a smooth, buttery tomato sauce with fenugreek.',
    price: 379,
    isVeg: false,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    name: 'Dal Makhani',
    description: 'Whole black lentils slow-cooked overnight with butter and cream.',
    price: 299,
    isVeg: true,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1546833999-b9f5816029bd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '9',
    name: 'Kadai Chicken',
    description: 'Chicken cooked with bell peppers and onions in a spicy tomato-based gravy.',
    price: 369,
    isVeg: false,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '10',
    name: 'Malai Kofta',
    description: 'Fried potato and paneer dumplings in a rich, white cashew gravy.',
    price: 339,
    isVeg: true,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356f36?auto=format&fit=crop&w=800&q=80'
  },

  // Biryani & Bowls
  {
    id: '11',
    name: 'Paneer Tikka Masala Bowl',
    description: 'Char-grilled paneer cubes in rich tomato gravy served over jeera rice.',
    price: 349,
    isVeg: true,
    category: 'Biryani & Bowls',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '12',
    name: 'Hyderabadi Chicken Dum Biryani',
    description: 'Aromatic basmati rice cooked with tender chicken and authentic spices.',
    price: 399,
    isVeg: false,
    category: 'Biryani & Bowls',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '13',
    name: 'Veg Dum Biryani',
    description: 'Fragrant rice cooked with mixed vegetables, saffron, and caramelized onions.',
    price: 299,
    isVeg: true,
    category: 'Biryani & Bowls',
    image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '14',
    name: 'Butter Chicken Rice Bowl',
    description: 'Creamy butter chicken served on a bed of aromatic basmati rice.',
    price: 379,
    isVeg: false,
    category: 'Biryani & Bowls',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80'
  },

  // Combos
  {
    id: '15',
    name: 'Butter Chicken & Naan Combo',
    description: 'Classic creamy butter chicken served with 2 butter garlic naans.',
    price: 449,
    isVeg: false,
    category: 'Combos',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '16',
    name: 'Dal Makhani & Rice Box',
    description: 'Slow-cooked black lentils with cream and butter, served with steamed rice.',
    price: 299,
    isVeg: true,
    category: 'Combos',
    image: 'https://images.unsplash.com/photo-1546833999-b9f5816029bd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '17',
    name: 'Chinese Combo (Veg)',
    description: 'Veg Fried Rice served with Veg Manchurian gravy.',
    price: 289,
    isVeg: true,
    category: 'Combos',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '18',
    name: 'Chinese Combo (Non-Veg)',
    description: 'Chicken Fried Rice served with Chilli Chicken gravy.',
    price: 329,
    isVeg: false,
    category: 'Combos',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80'
  },

  // Desserts
  {
    id: '19',
    name: 'Gulab Jamun (2 pcs)',
    description: 'Soft milk solids dumplings soaked in rose-flavored sugar syrup.',
    price: 99,
    isVeg: true,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '20',
    name: 'Chocolate Brownie',
    description: 'Fudgy chocolate brownie served with a drizzle of chocolate sauce.',
    price: 149,
    isVeg: true,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&w=800&q=80'
  },

  // Beverages
  {
    id: '21',
    name: 'Mango Lassi',
    description: 'Thick, creamy yogurt drink blended with fresh mango pulp.',
    price: 129,
    isVeg: true,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1543362906-ac1b4f87e9c9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '22',
    name: 'Masala Coke',
    description: 'Coca-Cola spiced with chaat masala, lemon, and black salt.',
    price: 89,
    isVeg: true,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  }
];

export const WHATSAPP_NUMBER = "919876543210"; // Placeholder
export const PHONE_NUMBER = "+91 98765 43210";
