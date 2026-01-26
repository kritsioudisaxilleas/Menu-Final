import React from 'react';

function MenuItemCard({ item, language }) {
  const name = language === 'en' ? item.name_en : item.name_gr;
  const desc = language === 'en' ? item.desc_en : item.desc_gr;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
        </div>
        
        {/* Price */}
        <div className="text-right">
          <span className="text-lg font-bold text-red-700 tabular-nums">
            €{item.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;