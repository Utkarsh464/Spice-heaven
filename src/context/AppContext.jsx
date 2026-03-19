import { createContext, useContext, useState, useCallback, useEffect } from "react";

const AppContext = createContext(null);

const persist = (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch (_) {} };
const hydrate  = (key, fb)  => { try { const r = localStorage.getItem(key); return r ? JSON.parse(r) : fb; } catch (_) { return fb; } };

const SEED_BOOKINGS = [
  { id:"BK001", name:"Priya Sharma",   guests:4, date:"2025-03-22", time:"7:30 PM", occasion:"Anniversary",     status:"confirmed", createdAt:"2025-03-18" },
  { id:"BK002", name:"Rahul Mehta",    guests:2, date:"2025-03-22", time:"8:00 PM", occasion:"Birthday",         status:"confirmed", createdAt:"2025-03-18" },
  { id:"BK003", name:"Sneha Verma",    guests:6, date:"2025-03-23", time:"7:00 PM", occasion:"Business Dinner",  status:"pending",   createdAt:"2025-03-19" },
  { id:"BK004", name:"James Mitchell", guests:3, date:"2025-03-24", time:"9:00 PM", occasion:"None",             status:"confirmed", createdAt:"2025-03-19" },
  { id:"BK005", name:"Ananya Patel",   guests:5, date:"2025-03-25", time:"8:30 PM", occasion:"Family Gathering", status:"cancelled", createdAt:"2025-03-19" },
];

const SEED_ORDERS = [
  { id:"OR001", customer:"Table 7",  items:[{n:"Rogan Josh",qty:2,p:1250},{n:"Dal Makhani",qty:1,p:850}],            total:3350, status:"served",    createdAt:"2025-03-19 19:45" },
  { id:"OR002", customer:"Table 12", items:[{n:"Butter Chicken",qty:3,p:1050}],                                       total:3150, status:"preparing", createdAt:"2025-03-19 20:10" },
  { id:"OR003", customer:"Delivery", items:[{n:"Seekh Kebab",qty:2,p:680},{n:"Burrata Chaat",qty:2,p:620}],           total:2600, status:"pending",   createdAt:"2025-03-19 20:30" },
  { id:"OR004", customer:"Table 3",  items:[{n:"Prawn Malabari",qty:2,p:1350},{n:"Lassi Fizz",qty:2,p:480}],          total:3660, status:"served",    createdAt:"2025-03-19 18:55" },
  { id:"OR005", customer:"Table 5",  items:[{n:"Tandoori Broccoli",qty:1,p:520},{n:"Rose Lassi",qty:2,p:480}],        total:1480, status:"preparing", createdAt:"2025-03-19 21:00" },
];

export function AppProvider({ children }) {
  const [page,      setPage]      = useState("Home");
  const [cart,      setCart]      = useState(() => hydrate("sh_cart", {}));
  const [cartOpen,  setCartOpen]  = useState(false);
  const [bookings,  setBookings]  = useState(() => hydrate("sh_bookings", SEED_BOOKINGS));
  const [orders,    setOrders]    = useState(() => hydrate("sh_orders",   SEED_ORDERS));
  const [adminUser, setAdminUser] = useState(() => hydrate("sh_admin", null));

  useEffect(() => persist("sh_cart",     cart),      [cart]);
  useEffect(() => persist("sh_bookings", bookings),  [bookings]);
  useEffect(() => persist("sh_orders",   orders),    [orders]);
  useEffect(() => persist("sh_admin",    adminUser), [adminUser]);

  const navigate = useCallback((p) => {
    setPage(p); setCartOpen(false);
    window.scrollTo({ top:0, behavior:"smooth" });
  }, []);

  const addToCart = useCallback((item) => {
    const key = item.n;
    setCart((prev) => ({ ...prev, [key]: { item, qty: (prev[key]?.qty || 0) + 1 } }));
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((name) => {
    setCart((prev) => { const n = { ...prev }; delete n[name]; return n; });
  }, []);

  const updateQty = useCallback((name, delta) => {
    setCart((prev) => {
      const e = prev[name]; if (!e) return prev;
      const q = e.qty + delta;
      if (q <= 0) { const n = { ...prev }; delete n[name]; return n; }
      return { ...prev, [name]: { ...e, qty: q } };
    });
  }, []);

  const clearCart = useCallback(() => setCart({}), []);

  const cartItems = Object.values(cart);
  const cartCount = cartItems.reduce((s, c) => s + c.qty, 0);
  const cartTotal = cartItems.reduce((s, c) => s + c.item.p * c.qty, 0);

  const addBooking = useCallback((b) => {
    const nb = { ...b, id:`BK${String(Date.now()).slice(-4)}`, status:"confirmed", createdAt:new Date().toISOString().slice(0,10) };
    setBookings((prev) => [nb, ...prev]);
    return nb;
  }, []);

  const updateBookingStatus = useCallback((id, status) => {
    setBookings((prev) => prev.map((b) => b.id === id ? { ...b, status } : b));
  }, []);

  const addOrder = useCallback((items, total, customer = "Online") => {
    const no = { id:`OR${String(Date.now()).slice(-4)}`, customer, items, total, status:"pending", createdAt:new Date().toLocaleTimeString("en-IN") };
    setOrders((prev) => [no, ...prev]);
    return no;
  }, []);

  const updateOrderStatus = useCallback((id, status) => {
    setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status } : o));
  }, []);

  const adminLogin  = useCallback((u) => setAdminUser(u), []);
  const adminLogout = useCallback(() => setAdminUser(null), []);

  return (
    <AppContext.Provider value={{
      page, navigate,
      cart, cartItems, cartCount, cartTotal,
      cartOpen, setCartOpen,
      addToCart, removeFromCart, updateQty, clearCart,
      bookings, addBooking, updateBookingStatus,
      orders, addOrder, updateOrderStatus,
      adminUser, adminLogin, adminLogout,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
