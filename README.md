<div align="center">

# 🍽️ MealHub

### Delicious Meal Discovery & Smart Ordering Experience

**A modern, intuitive web application for exploring meals, managing your cart, and placing orders effortlessly.**

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![React Toastify](https://img.shields.io/badge/React_Toastify-FF6B6B?style=flat&logoColor=white)

</div>

---

## Overview

**MealHub** is a smart meal discovery and ordering platform designed to make food browsing and ordering simple, fast, and enjoyable. Users can explore a wide variety of meals, add items to their cart, and place orders with instant feedback and a clean user experience.

---

## ✨ Key Features

- 🍽️ **Meal Discovery** — Browse a wide collection of meals with images and detailed information  
- 🛒 **Cart Management** — Add or remove meals dynamically with real-time updates  
- ✅ **Order System** — Place orders instantly with confirmation notifications  
- 🔔 **Smart Notifications** — Get instant feedback using toast alerts  


---

## Tech Stack

| Category | Technology |
|---|---|
| **Frontend Framework** | React 19 |
| **Build Tool** | Vite |
| **Styling** | CSS3 |
| **Notifications** | React Toastify |
| **Data Fetching** | Fetch API |
| **State Management** | React Hooks (useState) |
| **Async Handling** | React `use()` Hook |

---

## ⚛️ React Concepts Used

- 🔄 **State Management (useState)** — Manage cart dynamically  
- 🔗 **Props Drilling** — Pass data & functions between components  
- ⬆️ **State Lifting** — Centralized cart state in parent component  
- 🧩 **Component Rendering** — Render UI dynamically using `map()`  
- 🎯 **Event Handling** — Handle user actions with `onClick`  
- 🔁 **Conditional Logic** — Toggle add/remove functionality  
- 🌐 **API Data Loading** — Fetch meals asynchronously  
- 🔔 **External Library Integration** — React Toastify for notifications  

---

## 🏗️ Project Structure

```
meal-hub/
├── src/
│   ├── Components/
│   │   ├── FoodSection/
│   │   ├── SingleFood/
│   │   ├── Cart/
│   │   └── SelectedCart/
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/meal-hub.git

# Go to project folder
cd meal-hub

# Install dependencies
npm install

# Run the app
npm run dev
```

👉 Open: `http://localhost:5173`

---

## ⚙️ Build for Production

```bash
npm run build
```

---

## 📊 App Flow

```
User Visits App
      ↓
Meals Loaded from API
      ↓
User Adds Item to Cart
      ↓
Cart State Updates
      ↓
UI Re-renders Automatically
      ↓
User Places Order
      ↓
Cart Clears + Notification Shows
```

---

## 🔧 Example Logic (Cart Toggle)

```javascript
const AddToCart = (item) => {
    const exists = cart.find(food => food.idMeal === item.idMeal);

    if (exists) {
        setCart(cart.filter(food => food.idMeal !== item.idMeal));
    } else {
        setCart([...cart, item]);
    }
};
```

---

## 🚀 Future Improvements

- 🔄 Replace Props Drilling with **Context API**
- ⚡ Optimize performance with **useMemo & useCallback**
- 💾 Add **localStorage persistence**
- 🛡️ Implement **Error Boundaries**
- 🎯 Use **useReducer** for complex state logic  

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo  
2. Create a branch (`feature/your-feature`)  
3. Co
