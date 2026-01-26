import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import logo from "../../assets/logo.png";
import gbFlag from '../../assets/flags/gb.svg';
import grFlag from '../../assets/flags/gr.svg';


function MenuHeader({ language, onLanguageChange }) {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Brand */}
<div className="flex items-center gap-3 -mt-1">
          <img
  src={logo}
  alt="PizzaTapas logo"
  className="w-16 h-16 object-contain"
/>
          <div className="leading-tight">
<h1 className="text-[22px] font-bold tracking-tight text-gray-900">
  PizzaTapas
</h1>
  <p className="text-[11px] text-gray-500 tracking-[0.2em] uppercase">
    {language === "en" ? "Authentic Italian" : "Αυθεντική Ιταλική"}
  </p>
</div>
        </div>

        {/* Language Toggle */}
       <div className="flex items-center gap-2">
  <span
  className={`flex items-center gap-1 text-sm font-medium ${
    language === 'en' ? 'text-red-700' : 'text-gray-400'
  }`}
>
  <img src={gbFlag} alt="English" className="w-5 h-5" />
  EN
</span>

  <Switch
    checked={language === 'gr'}
    onCheckedChange={(checked) =>
      onLanguageChange(checked ? 'gr' : 'en')
    }
    className="data-[state=checked]:bg-red-700 data-[state=unchecked]:bg-red-700"
  />

  <span
  className={`flex items-center gap-1 text-sm font-medium ${
    language === 'gr' ? 'text-red-700' : 'text-gray-400'
  }`}
>
  <img src={grFlag} alt="Greek" className="w-5 h-5" />
  GR
</span>
</div>
      </div>
    </header>
  );
}

export default MenuHeader;