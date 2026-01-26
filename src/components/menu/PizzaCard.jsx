import React, { useState } from 'react';

const sizes = [
  { id: 'small', label_en: '30cm', label_gr: '30cm' },
  { id: 'medium', label_en: '40cm', label_gr: '40cm' },
  { id: 'large', label_en: '50cm', label_gr: '50cm' },
];

function PizzaCard({ item, language }) {
  const [selectedSize, setSelectedSize] = useState('medium');
  
  const name = language === 'en' ? item.name_en : item.name_gr;
  const desc = language === 'en' ? item.desc_en : item.desc_gr;
  const price = item.prices[selectedSize];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start gap-3 mb-3">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
        </div>
        
        {/* Price display */}
        <div className="text-right">
          <span className="text-xl font-bold text-red-700 tabular-nums transition-all duration-200">
            €{price.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Size selector */}
      <div className="flex gap-2 mt-4">
        {sizes.map((size) => {
          const isSelected = selectedSize === size.id;
          return (
            <button
              key={size.id}
              onClick={() => setSelectedSize(size.id)}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-all duration-200 ${
                isSelected
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {language === 'en' ? size.label_en : size.label_gr}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PizzaCard;