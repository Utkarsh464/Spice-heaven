import { useState } from "react";
import { AppProvider, useApp } from "./context/AppContext";

// Layout
import Navbar  from "./components/layout/Navbar";
import Footer  from "./components/layout/Footer";

// Cart
import CartDrawer from "./components/cart/CartDrawer";

// UI
import LoadingScreen from "./components/ui/LoadingScreen";
import IGFloat       from "./components/ui/IGFloat";
import IGLeadStrip   from "./components/ui/IGLeadStrip";

// Public pages
import HomePage     from "./pages/HomePage";
import MenuPage     from "./pages/MenuPage";
import GalleryPage  from "./pages/GalleryPage";
import BookingPage  from "./pages/BookingPage";
import ContactPage  from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

// Admin pages
import AdminLogin     from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

// Styles
import "./styles/animations.css";
import "./styles/responsive.css";

const PUBLIC_PAGES = {
  Home:    HomePage,
  Menu:    MenuPage,
  Gallery: GalleryPage,
  Booking: BookingPage,
  Contact: ContactPage,
};

const ADMIN_PAGES = {
  AdminLogin:     AdminLogin,
  AdminDashboard: AdminDashboard,
};

// Pages that don't get the standard Navbar/Footer chrome
const BARE_PAGES = new Set(["AdminLogin", "AdminDashboard"]);

function AppInner() {
  const { page } = useApp();
  const [loaded, setLoaded] = useState(false);

  const isAdminPage = BARE_PAGES.has(page);

  const Page =
    PUBLIC_PAGES[page] ||
    ADMIN_PAGES[page]  ||
    NotFoundPage;

  if (isAdminPage) {
    return (
      <>
        {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
        <Page />
      </>
    );
  }

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <IGLeadStrip />
      <Navbar />
      <CartDrawer />
      <main><Page /></main>
      <Footer />
      <IGFloat />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  );
}
