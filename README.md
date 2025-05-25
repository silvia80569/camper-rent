# 🚌 Camper Rental Romania - React Application

This is a web application built with React for a fictional company that offers camper rental services in Romania. Users can explore a camper catalog, apply filters, view details in a modal, and add listings to their favorites.

## 🌐 Live Demo

🔗 _(Optional – Add link here if deployed via Netlify or Vercel)_

---

## 🧩 Features

- ✅ **3 main pages**: Home, Catalog, Favorites
- 🔍 **Advanced filtering**:
  - By location (text input)
  - By equipment (checkboxes)
  - By camper type (radio buttons)
- ❤️ **Favorites system**:
  - Add/remove campers to/from favorites using a heart button
  - Favorites are stored in `localStorage` and persist after refresh
- 📦 **Detailed modal view**:
  - Tabs: Features (vehicle specs), Reviews (user feedback)
  - Image gallery included
  - Booking form with input validation
- 📱 **Responsive design** for mobile, tablet, and desktop
- ⚙️ **Mock backend** created with [MockAPI.io](https://mockapi.io/)

---

## 🚀 Tech Stack

- React
- Redux Toolkit (for favorites and filters)
- React Router DOM
- MockAPI (for simulated backend data)
- CSS Modules
- localStorage API

---

## 📁 Project Structure

src/
├── api/ # Funcții pentru interacțiunea cu MockAPI
│ └── adverts.js
├── assets/ # Imagini și resurse statice
├── components/ # Componente reutilizabile
│ ├── catalog/
│ │ ├── AdvertCard/
│ │ └── Filters/
│ ├── modal/
│ │ ├── AdvertModal/
│ │ └── AdvertModalContent/
│ └── Button/
├── pages/ # Pagini: Home, Catalog, Favorites
│ ├── Home.jsx
│ ├── Catalog.jsx
│ └── Favorites.jsx
├── redux/ # Store Redux + slices pentru filters și advert
│ ├── store.js
│ ├── filtersSlice.js
│ └── advertSlice.js
├── App.jsx # Layout principal și routing
├── main.jsx # Punct de intrare în aplicație
└── index.css # Stil global

---

## 📦 Installation & Start

```bash
# Clone the repository
git clone https://github.com/your-username/camper-rental-app.git
cd camper-rental-app

# Install dependencies
npm install

# Run in development mode
npm run dev
```
