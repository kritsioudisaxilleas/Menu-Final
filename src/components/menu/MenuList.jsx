import React from 'react';
import PizzaCard from './PizzaCard';
import MenuItemCard from './MenuItemCard';

function MenuList({ items, category, language }) {

  const categoryTitles = {
    pizzas: { en: 'Our Pizzas', gr: 'Οι Πίτσες μας' },
    pasta: { en: 'Fresh Pasta', gr: 'Φρέσκα Ζυμαρικά' },
    salads: { en: ' Fresh Salads', gr: 'Φρέσκες Σαλάτες' },
    appetizers: { en: 'Starters', gr: 'Ορεκτικά' },
    drinks: { en: 'Drinks & Beverages', gr: 'Ποτά & Αναψυκτικά' },
  };

  const categoryDescriptions = {
    pizzas: { 
      en: 'Hand-stretched dough, wood-fired at 450°C', 
      gr: 'Χειροποίητη ζύμη, ψημένη σε ξυλόφουρνο στους 450°C' 
    },
    pasta: { 
      en: 'Made fresh daily with traditional recipes', 
      gr: 'Φτιαγμένα φρέσκα καθημερινά με παραδοσιακές συνταγές' 
    },
    salads: { 
      en: 'Crisp, fresh, and seasonal', 
      gr: 'Τραγανές, φρέσκες και εποχιακές' 
    },
    appetizers: { 
      en: 'Begin your Italian journey', 
      gr: 'Ξεκινήστε το ιταλικό σας ταξίδι' 
    },
    drinks: { 
      en: 'Perfect pairings for your meal', 
      gr: 'Ιδανικοί συνδυασμοί για το γεύμα σας' 
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-8">
      {/* Section Header */}
      <div className="py-6 border-b border-gray-100 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {categoryTitles[category]?.[language] || category}
        </h2>
      </div>

      {/* Items Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          category === 'pizzas' ? (
            <PizzaCard key={item.id} item={item} language={language} />
          ) : (
            <MenuItemCard key={item.id} item={item} language={language} />
          )
        ))}
      </div>
    </div>
  );
}

export default MenuList;