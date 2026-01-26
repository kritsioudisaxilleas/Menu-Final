/**
 * MENU DATA
 * 
 * To edit prices and translations, modify the objects below.
 * 
 * For PIZZAS: prices are defined as { small, medium, large }
 * For OTHER items: single price value
 * 
 * Allergen flags: vegetarian, vegan, spicy, alcoholic
 */

export const menuData = {
  // ============================================
  // PIZZAS - 6 items with size-based pricing
  // ============================================
  pizzas: [
    {
  id: 'pizza-1',
  name_en: 'Tapas Pizza',
  name_gr: 'Πίτσα του Τάπα',
  desc_en: 'Tomato sauce, mozzarella, rocket, beer salami, pepperoni',
  desc_gr: 'Σάλτσα ντομάτας, μοτσαρέλα, ρόκα, σαλάμι μπύρας, πεπερόνι',
  prices: { small: 13, medium: 16, large: 18 },
  vegetarian: false,
},

{
  id: 'pizza-2',
  name_en: 'Light Pizza',
  name_gr: 'Πίτσα Λάιτ',
  desc_en: 'Tomato sauce, low-fat cheese, turkey, chicken, mushrooms, peppers',
  desc_gr: 'Σάλτσα ντομάτας, κίτρινο τυρί χαμηλών λιπαρών, γαλοπούλα, κοτόπουλο, μανιτάρια, πιπεριά',
  prices: { small: 14, medium: 17, large: 19 },
  vegetarian: false,
},

{
  id: 'pizza-3',
  name_en: 'Special Pizza',
  name_gr: 'Σπέσιαλ',
  desc_en: 'Tomato sauce, gouda, ham, bacon, beer salami, pepperoni, mushrooms, peppers',
  desc_gr: 'Σάλτσα ντομάτας, γκούντα, ζαμπόν, μπέικον, σαλάμι μπύρας, πεπερόνι, μανιτάρια, πιπεριά',
  prices: { small: 13, medium: 16, large: 18 },
  vegetarian: false,
},

{
  id: 'pizza-4',
  name_en: 'Greek Pizza',
  name_gr: 'Χωριάτικη',
  desc_en: 'Tomato sauce, gouda, feta cheese, onion, peppers, olives, fresh tomato',
  desc_gr: 'Σάλτσα ντομάτας, γκούντα, φέτα, κρεμμύδι, πιπεριά, ελιές, φρέσκια ντομάτα',
  prices: { small: 13, medium: 16, large: 18 },
  vegetarian: true,
},

{
  id: 'pizza-5',
  name_en: 'Vegetarian Pizza',
  name_gr: 'Του Χορτοφάγου',
  desc_en: 'Tomato sauce, gouda, peppers, mushrooms, cherry tomatoes, zucchini, olives',
  desc_gr: 'Σάλτσα ντομάτας, γκούντα, πιπεριές, μανιτάρια, ντοματίνια, κολοκυθάκι, ελιές',
  prices: { small: 13, medium: 16, large: 18 },
  vegetarian: true,
},

{
  id: 'pizza-6',
  name_en: 'Tuna Pizza',
  name_gr: 'Με Τόνο',
  desc_en: 'Tomato sauce, gouda, tuna, onion, corn, peppers',
  desc_gr: 'Σάλτσα ντομάτας, γκούντα, τόνος, κρεμμύδι, καλαμπόκι, πιπεριά',
  prices: { small: 13, medium: 16, large: 18 },
  vegetarian: false,
},

{
  id: 'pizza-7',
  name_en: 'Margherita',
  name_gr: 'Μαργαρίτα',
  desc_en: 'Tomato sauce, gouda',
  desc_gr: 'Σάλτσα ντομάτας, γκούντα',
  prices: { small: 12, medium: 14, large: 16 },
  vegetarian: true,
},

{
  id: 'pizza-8',
  name_en: 'Four Cheeses',
  name_gr: '4 Τυριά',
  desc_en: 'Tomato sauce, gouda, emmental, blue cheese, parmesan',
  desc_gr: 'Σάλτσα ντομάτας, γκούντα, ένταμ, μπλε τυρί, παρμεζάνα',
  prices: { small: 14, medium: 17, large: 19 },
  vegetarian: true,
}

  ],

  // ============================================
  // PASTA - 4 items
  // ============================================
  pasta: [
   {
  id: 'pasta-1',
  name_en: 'Rigatoni a la Vodka',
  name_gr: 'Ριγκατόνι αλά Βότκα',
  desc_en: 'Pink sauce, bacon, mushrooms',
  desc_gr: 'Ροζ σάλτσα, μπέικον, μανιτάρια',
  price: 17.00,
},
{
  id: 'pasta-2',
  name_en: 'Tapas Spaghetti',
  name_gr: 'Μακαρόνια του Τάπα',
  desc_en: 'Chicken fillet, tri-colored peppers, cherry tomatoes',
  desc_gr: 'Φιλέτο κοτόπουλο, τρίχρωμες πιπεριές, τοματίνια',
  price: 8.00,
},
{
  id: 'pasta-3',
  name_en: 'Salmon Farfalle',
  name_gr: 'Φαρφάλες με Σολομό',
  desc_en: 'Pink sauce, salmon, parsley',
  desc_gr: 'Ροζ σάλτσα, σολομός, μαϊντανός',
  price: 10.00,
},
{
  id: 'pasta-4',
  name_en: 'Chicken in Pink Sauce',
  name_gr: 'Ροζέ Κοτόπουλο',
  desc_en: 'Pink sauce, chicken fillet',
  desc_gr: 'Ροζ σάλτσα, φιλέτο κοτόπουλο',
  price: 8.50,
},
{
  id: 'pasta-5',
  name_en: 'Puttanesca',
  name_gr: 'Πουτανέσκα',
  desc_en: 'Tomato sauce, bacon, mushrooms, peppers, olives, capers, anchovy fillets',
  desc_gr: 'Σάλτσα τομάτας, μπέικον, μανιτάρια, πιπεριές, ελιές, κάπαρη, φιλέτα αντζούγιας',
  price: 8.50,
},
{
  id: 'pasta-6',
  name_en: 'Amatriciana',
  name_gr: 'Αματριτσιάνα',
  desc_en: 'Tomato sauce, onion, bacon',
  desc_gr: 'Σάλτσα τομάτας, κρεμμύδι, μπέικον',
  price: 7.50,
},
{
  id: 'pasta-7',
  name_en: 'Tuna Spaghetti',
  name_gr: 'Τοννοσπαγγέτι',
  desc_en: 'Tomato sauce, onion, tuna, peppers, capers, olives',
  desc_gr: 'Σάλτσα τομάτας, κρεμμύδι, τόνος, πιπεριές, κάπαρη, ελιές',
  price: 8.00,
},
{
  id: 'pasta-8',
  name_en: 'Arrabbiata',
  name_gr: 'Αραμπιάτα',
  desc_en: 'Tomato sauce, garlic, parsley',
  desc_gr: 'Σάλτσα τομάτας, σκόρδο, μαϊντανός',
  price: 7.00,
},
{
  id: 'pasta-9',
  name_en: 'Napolitana',
  name_gr: 'Ναπολιτέν',
  desc_en: 'Tomato sauce, kefalotyri cheese',
  desc_gr: 'Σάλτσα τομάτας, κεφαλοτύρι',
  price: 6.50,
},
{
  id: 'pasta-10',
  name_en: 'Four Cheeses',
  name_gr: 'Τέσσερα Τυριά',
  desc_en: 'Fresh cream, gouda, emmental, blue cheese, parmesan',
  desc_gr: 'Κρέμα γάλακτος, γκούντα, έμενταλ, μπλε τυρί, παρμεζάνα',
  price: 9.50,
},
{
  id: 'pasta-11',
  name_en: 'Carbonara',
  name_gr: 'Καρμπονάρα',
  desc_en: 'Fresh cream, egg yolk, bacon',
  desc_gr: 'Κρέμα γάλακτος, κρόκος αυγού, μπέικον',
  price: 9.50,
},
{
  id: 'pasta-12',
  name_en: 'Pesto Basil',
  name_gr: 'Πέστο Βασιλικού',
  desc_en: 'Basil sauce, garlic',
  desc_gr: 'Σάλτσα βασιλικού, σκόρδο',
  price: 9.00,
},
{
  id: 'pasta-13',
  name_en: 'A la Creme',
  name_gr: 'Α λα Κρεμ',
  desc_en: 'Fresh cream, mushrooms',
  desc_gr: 'Κρέμα γάλακτος, μανιτάρια',
  price: 9.50,
},
{
  id: 'pasta-14',
  name_en: 'Aglio e Olio',
  name_gr: 'Άλιο ε Όλιο',
  desc_en: 'Garlic, extra virgin olive oil, chili, parsley',
  desc_gr: 'Σκόρδο, έξτρα παρθένο ελαιόλαδο, πεπεροντσίνο, μαϊντανός',
  price: 8.50,
},

  ],

  // ============================================
  // SALADS - 4 items
  // ============================================
  salads: [
    {
  id: 'salad-1',
  name_en: 'Tapas Salad',
  name_gr: 'Σαλάτα του Τάπα',
  desc_en: 'Arugula, lettuce, mushrooms, grilled halloumi, mustard sauce',
  desc_gr: 'Ρόκα, μαρούλι, μανιτάρια, ψητό χαλούμι, σως μουστάρδας',
  price: 8.50,
  vegetarian: true,
},
{
  id: 'salad-2',
  name_en: 'Caesar Salad',
  name_gr: 'Σαλάτα Σίζαρ',
  desc_en: 'Iceberg lettuce, chicken fillet, bacon, parmesan, croutons',
  desc_gr: 'Μαρούλι iceberg, φιλέτο κοτόπουλο, μπέικον, παρμεζάνα, κρουτόν',
  price: 8.00,
},
{
  id: 'salad-3',
  name_en: 'Chef’s Salad',
  name_gr: 'Σαλάτα του Σεφ',
  desc_en: 'Lettuce, tomato, cucumber, gouda, egg, sauce',
  desc_gr: 'Μαρούλι, ντομάτα, αγγούρι, γκούντα, αυγό, σως',
  price: 8.00,
  vegetarian: true,
},
{
  id: 'salad-4',
  name_en: 'Caesar Salad (Classic)',
  name_gr: 'Σίζαρ',
  desc_en: 'Lettuce, chicken fillet, sauce, parmesan, croutons',
  desc_gr: 'Μαρούλι, φιλέτο κοτόπουλο, σως, παρμεζάνα, κρουτόν',
  price: 8.50,
},
{
  id: 'salad-5',
  name_en: 'Tuna Salad',
  name_gr: 'Τονοσαλάτα',
  desc_en: 'Lettuce, tomato, cucumber, onion, tuna, lemon dressing',
  desc_gr: 'Μαρούλι, ντομάτα, αγγούρι, κρεμμύδι, τόνος, λεμόνι',
  price: 8.00,
},
{
  id: 'salad-6',
  name_en: 'Greek Salad',
  name_gr: 'Χωριάτικη',
  desc_en: 'Tomato, cucumber, onion, olives, feta cheese, oregano',
  desc_gr: 'Ντομάτα, αγγούρι, κρεμμύδι, ελιές, φέτα, ρίγανη',
  price: 8.50,
  vegetarian: true,
},

  ],

  // ============================================
  // APPETIZERS - 5 items
  // ============================================
  appetizers: [
    {
      id: 'app-1',
      name_en: 'Bruschetta',
      name_gr: 'Μπρουσκέτα',
      desc_en: 'Toasted bread, fresh tomatoes, garlic, basil, olive oil',
      desc_gr: 'Ψημένο ψωμί, φρέσκιες ντομάτες, σκόρδο, βασιλικός, ελαιόλαδο',
      price: 7.50,
      vegetarian: true,
      vegan: true,
    },
    {
      id: 'app-2',
      name_en: 'Arancini',
      name_gr: 'Αραντσίνι',
      desc_en: 'Crispy rice balls stuffed with mozzarella & ragù',
      desc_gr: 'Τραγανές μπάλες ρυζιού γεμιστές με μοτσαρέλα & ραγού',
      price: 9.00,
    },
    {
      id: 'app-3',
      name_en: 'Calamari Fritti',
      name_gr: 'Καλαμαράκια Τηγανητά',
      desc_en: 'Lightly fried squid rings, lemon aioli',
      desc_gr: 'Ελαφρώς τηγανισμένα καλαμαράκια, αϊόλι λεμονιού',
      price: 11.50,
    },
    {
      id: 'app-4',
      name_en: 'Antipasto Board',
      name_gr: 'Πιατέλα Αντιπάστο',
      desc_en: 'Cured meats, cheeses, olives, grilled vegetables',
      desc_gr: 'Αλλαντικά, τυριά, ελιές, ψητά λαχανικά',
      price: 16.00,
    },
    {
      id: 'app-5',
      name_en: 'Garlic Bread',
      name_gr: 'Σκορδόψωμο',
      desc_en: 'Toasted ciabatta with garlic butter, optional mozzarella',
      desc_gr: 'Ψημένη τσιαπάτα με βούτυρο σκόρδου, προαιρετικά μοτσαρέλα',
      price: 5.50,
      vegetarian: true,
    },
  ],

  // ============================================
  // DRINKS - 6 items
  // ============================================
  drinks: [
    {
      id: 'drink-1',
      name_en: 'Italian Lemonade',
      name_gr: 'Ιταλική Λεμονάδα',
      desc_en: 'Fresh lemon juice, sparkling water, mint',
      desc_gr: 'Φρέσκος χυμός λεμονιού, ανθρακούχο νερό, δυόσμος',
      price: 4.50,
      vegan: true,
    },
    {
      id: 'drink-2',
      name_en: 'Aperol Spritz',
      name_gr: 'Απερόλ Σπριτζ',
      desc_en: 'Aperol, prosecco, soda, orange slice',
      desc_gr: 'Απερόλ, προσέκο, σόδα, φέτα πορτοκαλιού',
      price: 9.00,
      alcoholic: true,
    },
    {
      id: 'drink-3',
      name_en: 'House Red Wine',
      name_gr: 'Κόκκινο Κρασί Σπιτιού',
      desc_en: 'Montepulciano d\'Abruzzo, glass',
      desc_gr: 'Montepulciano d\'Abruzzo, ποτήρι',
      price: 6.50,
      alcoholic: true,
    },
    {
      id: 'drink-4',
      name_en: 'House White Wine',
      name_gr: 'Λευκό Κρασί Σπιτιού',
      desc_en: 'Pinot Grigio, glass',
      desc_gr: 'Πίνο Γκρίτζιο, ποτήρι',
      price: 6.50,
      alcoholic: true,
    },
    {
      id: 'drink-5',
      name_en: 'Espresso',
      name_gr: 'Εσπρέσο',
      desc_en: 'Double shot, Italian roast',
      desc_gr: 'Διπλή δόση, ιταλικό καβούρδισμα',
      price: 3.00,
      vegan: true,
    },
    {
      id: 'drink-6',
      name_en: 'San Pellegrino',
      name_gr: 'Σαν Πελεγκρίνο',
      desc_en: 'Sparkling mineral water, 500ml',
      desc_gr: 'Ανθρακούχο μεταλλικό νερό, 500ml',
      price: 3.50,
      vegan: true,
    },
  ],
};