import { createContext, useContext, useState, useCallback } from "react";

/**
 * AppContext
 * Provides global state: current page, navigation, and cart.
 */
const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [page, setPage] = useState("Home");
  const [cart, setCart] = useState([]);

  const navigate = useCallback((p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const addToCart = useCallback((itemName) => {
    setCart((prev) => [...prev, itemName]);
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  return (
    <AppContext.Provider value={{ page, navigate, cart, addToCart, clearCart }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
