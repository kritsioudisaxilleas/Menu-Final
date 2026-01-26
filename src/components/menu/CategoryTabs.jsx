import React from 'react';
import { Pizza, Soup, Salad, ChefHat, Wine } from 'lucide-react';

const categories = [
  { id: 'pizzas', icon: Pizza, label_en: 'Pizzas', label_gr: 'Πίτσες' },
  { id: 'pasta', icon: Soup, label_en: 'Pasta', label_gr: 'Ζυμαρικά' },
  { id: 'salads', icon: Salad, label_en: 'Salads', label_gr: 'Σαλάτες' },
  { id: 'appetizers', icon: ChefHat, label_en: 'Appetizers', label_gr: 'Ορεκτικά' },
  { id: 'drinks', icon: Wine, label_en: 'Drinks', label_gr: 'Ποτά' },
];

function CategoryTabs({ activeCategory, onCategoryChange, language }) {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-[73px] z-40 md:relative md:top-0">
      <div className="max-w-4xl mx-auto">
        <div className="flex overflow-x-auto scrollbar-hide">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`flex-1 min-w-[80px] flex flex-col items-center gap-1 py-3 px-2 transition-all duration-200 border-b-2 ${
                  isActive 
                    ? 'border-red-700 text-red-700' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-red-700' : 'text-gray-400'}`} />
                <span className="text-xs font-medium whitespace-nowrap">
                  {language === 'en' ? cat.label_en : cat.label_gr}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default CategoryTabs;