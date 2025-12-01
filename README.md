# React Shopping Cart (Redux Toolkit + TailwindCSS)

A small, fully functional shopping cart demo built with React, Redux Toolkit, TailwindCSS, and Lucide Icons. It demonstrates real-world state management patterns: adding items, removing items, updating quantity, calculating totals, and a responsive cart sidebar UI.


---


## Features
- Add products to cart
- Increase / decrease quantity
- Auto-remove product when quantity reaches 0
- Remove item manually
- Clear entire cart
- Dynamic cart totals (price × quantity)
- Animated sliding cart sidebar
- Responsive layout with TailwindCSS
- Lucide icons for UI polish
- Empty-cart message and smooth hover/scale animations

---

## Tech stack
- React (v18+)
- Redux Toolkit (slice-based state management)
- React-Redux hooks (useDispatch, useSelector)
- TailwindCSS (utility-first styling)
- Lucide-React (icons)
- Vite (recommended dev server; or your preferred bundler)

---


## Getting started

1. Clone the repo
```bash
git clone https://github.com/PinkPanther21/eCommerceRedux.git
cd eCommerceRedux
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start development server
```bash
npm run dev
# or
yarn dev
```

4. Build for production
```bash
npm run build
# or
yarn build
```

---

## Available scripts
- npm run dev — Start dev server (hot reload)

Adjust scripts to your package manager if necessary.

---

## Project structure
Structure for this project:

src/
  ├─ components/
  │   ├─ CartSidebar.jsx
  │   ├─ CartItem.jsx
  │   ├─ ProductCard.jsx
  │   └─ ProductGrid.jsx
      └─ Header.jsx
  ├─ store/
  │   └─ cartSlice.js
      |_ store.js
  ├─ App.jsx
  ├─ main.jsx
  └─ index.css (Tailwind entry)

Add or adapt to your actual project layout.

---

## Redux slice (example)
Here is a clearer, consistent example of the cart slice used in this project.

```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // [{ id, title, price, image, quantity }]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const payload = action.payload; // { id, title, price, image }
      const existing = state.items.find(item => item.id === payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // action.payload = id
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      // action.payload = { id, quantity }
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        const item = state.items.find(i => i.id === id);
        if (item) item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
```

Notes:
- Use selector(s) to compute totals and total items for the UI:
  - totalItems = sum(item.quantity)
  - totalPrice = sum(item.quantity * item.price)

Consider using memoized selectors (reselect) if the app grows.

---

## Components overview
- CartSidebar — Slide-in sidebar that displays cart items, totals, and action buttons (Clear Cart, Checkout).
- CartItem — Individual item row with image, title, price, quantity controls (−/+) and a delete button.
- ProductList / ProductCard — Displays products with Add to Cart CTA.
- App / main — App-level layout and Redux Provider setup.


---



## Contributing
Contributions are welcome! Suggested workflow:
1. Fork the repo
2. Create a feature branch: git checkout -b feat/my-feature
3. Make changes, add tests
4. Open a Pull Request describing your changes

Add issues for larger changes so we can discuss design before implementation.

---

## License
This project is open source.

---

