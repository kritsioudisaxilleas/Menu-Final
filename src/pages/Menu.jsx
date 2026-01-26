import React, { useState } from 'react';
import MenuHeader from '@/components/menu/MenuHeader';
import CategoryTabs from '@/components/menu/CategoryTabs';
import MenuList from '@/components/menu/MenuList';
import { menuData } from '@/components/menu/menuData';

/**
 * LA PIZZERIA - Premium Restaurant Menu
 * 
 * Responsive mobile-first design with:
 * - Language toggle (EN/GR)
 * - Category navigation
 * - Pizza size selection with dynamic pricing
 * - Search functionality
 * - Allergen indicators
 * 
 * To customize:
 * - Edit menu items in components/menu/menuData.js
 * - Modify colors in individual components (red-700 is the primary)
 * - Add/remove categories as needed
 */

function Menu() {
  const [language, setLanguage] = useState('en');
  const [activeCategory, setActiveCategory] = useState('pizzas');

  const currentItems = menuData[activeCategory] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header with Logo & Language Toggle */}
      <MenuHeader language={language} onLanguageChange={setLanguage} />

      {/* Category Navigation - sticky on mobile */}
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        language={language}
      />

      {/* Menu Items */}
      <MenuList
        items={currentItems}
        category={activeCategory}
        language={language}
      />

      {/* Bottom spacing for mobile */}
      <div className="h-8" />
    </div>
  );
}

export default Menu;