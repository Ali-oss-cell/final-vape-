# PNW Smoke Shop - React Website

A modern, responsive React website for PNW Smoke Shop with individual product category pages.

## Features

- 🏠 **Home Page** with hero section, product range, about us, testimonials, and contact
- 🛍️ **Product Pages**: Individual pages for Vapes, E-Liquids, Glassware, and Accessories
- 📍 **Stores Page** with interactive map (using free OpenStreetMap) showing all store locations
- 🎨 **Dark Theme** with bright teal accents
- 📱 **Fully Responsive** design
- ⚡ **React Router** for navigation
- ✨ **Interactive Elements** including 3D product rotation
- 🎭 **Smooth Animations** on scroll

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Navigation header
│   ├── Footer.jsx       # Footer component
│   ├── Hero.jsx         # Hero section with 3D product
│   ├── ProductRange.jsx # Product category cards
│   ├── About.jsx        # About section with timeline
│   ├── Testimonials.jsx # Customer testimonials
│   └── Contact.jsx      # Contact form
├── pages/
│   ├── Home.jsx         # Home page
│   ├── Vapes.jsx        # Vapes product page
│   ├── ELiquids.jsx     # E-Liquids product page
│   ├── Glassware.jsx    # Glassware product page
│   ├── Accessories.jsx  # Accessories product page
│   └── Stores.jsx       # Stores page with interactive map
├── App.jsx              # Main app with routing
├── App.css              # All styles
└── main.jsx             # Entry point
```

## Routes

- `/` - Home page
- `/vapes` - Vapes product page
- `/e-liquids` - E-Liquids product page
- `/glassware` - Glassware product page
- `/accessories` - Accessories product page
- `/stores` - Stores page with interactive map

## Technologies Used

- React 18
- React Router DOM 6
- Vite
- Leaflet & React-Leaflet - Free, open-source map integration (no API key required!)
- Font Awesome Icons

## Notes

- The original HTML/CSS/JS files are preserved in the root directory
- All styling maintains the same dark theme and teal accents
- Product pages follow the same design language as the home page
