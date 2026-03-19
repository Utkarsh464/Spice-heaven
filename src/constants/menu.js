import { IMAGES as I } from "./images";

/**
 * Menu Data
 * Organized by category. Each item has: n (name), d (description), p (price), img.
 */
export const MENU_CATEGORIES = ["Starters", "Main Course", "Desserts", "Drinks"];

export const MENU_DATA = {
  Starters: [
    {
      n: "Gilafi Seekh Kebab",
      d: "Minced lamb with herbs, wrapped in pepper, chargrilled in tandoor",
      p: 680,
      img: I.d4,
    },
    {
      n: "Burrata Chaat",
      d: "Italian burrata on spiced chickpeas, tamarind drizzle, pomegranate",
      p: 620,
      img: I.d5,
    },
    {
      n: "Papdi Aloo Chaat",
      d: "Crisp papdi, spiced potatoes, yogurt foam, chutneys & micro herbs",
      p: 480,
      img: I.d6,
    },
    {
      n: "Tandoori Broccoli",
      d: "Char-kissed florets in creamy spiced yogurt with signature chutney",
      p: 520,
      img: I.d2,
    },
  ],
  "Main Course": [
    {
      n: "Saffron Lamb Rogan Josh",
      d: "Slow-braised Kashmiri lamb in saffron gravy with 14 whole spices",
      p: 1250,
      img: I.d1,
      tag: "Chef's Signature",
    },
    {
      n: "Butter Chicken Royale",
      d: "Tandoor-fired chicken in velvety tomato-cashew fenugreek sauce",
      p: 1050,
      img: I.d3,
      tag: "Fan Favourite",
    },
    {
      n: "Dal Makhani Noir",
      d: "24-hour slow-cooked lentils, truffle butter, smoked cream finish",
      p: 850,
      img: I.d2,
      tag: "House Special",
    },
    {
      n: "Prawn Malabari Curry",
      d: "Wild-caught prawns in coconut-kokum curry, mustard & curry leaf",
      p: 1350,
      img: I.d4,
    },
  ],
  Desserts: [
    {
      n: "Saffron Kheer Brûlée",
      d: "Rice pudding, saffron & cardamom, with a torched sugar crust",
      p: 420,
      img: I.des1,
    },
    {
      n: "Gulab Jamun Fondant",
      d: "Dark chocolate fondant with rose-syrup jamun & pistachio cream",
      p: 480,
      img: I.des2,
    },
    {
      n: "Mango Cardamom Panna Cotta",
      d: "Silky panna cotta, Alphonso mango gel, black cardamom caramel",
      p: 440,
      img: I.des1,
    },
  ],
  Drinks: [
    {
      n: "Masala Chai Old Fashioned",
      d: "Bourbon infused with whole masala spices, dark sugar, orange peel",
      p: 680,
      img: I.drk1,
    },
    {
      n: "Rose Lassi Fizz",
      d: "House-cultured lassi, rose water, saffron & ginger-lime soda top",
      p: 480,
      img: I.drk2,
    },
    {
      n: "Turmeric Tonic (NA)",
      d: "Golden tonic — turmeric, ginger, honey, lemon, sparkling water",
      p: 380,
      img: I.drk1,
    },
  ],
};

/** Featured dishes shown on homepage */
export const FEATURED_DISHES = [
  {
    name: "Saffron Lamb Rogan Josh",
    sub: "Slow-braised Kashmiri lamb with 14 whole spices & saffron",
    price: "₹1,250",
    tag: "Chef's Signature",
    img: I.d1,
  },
  {
    name: "Butter Chicken Royale",
    sub: "Tandoor-fired chicken in velvety tomato-cashew sauce",
    price: "₹1,050",
    tag: "Fan Favourite",
    img: I.d3,
  },
  {
    name: "Dal Makhani Noir",
    sub: "24-hour lentils with truffle butter & smoked cream",
    price: "₹850",
    tag: "House Special",
    img: I.d2,
  },
];
