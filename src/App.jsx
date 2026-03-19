import { useState } from "react";
import { AppProvider, useApp } from "./context/AppContext";

// Layout
import Navbar  from "./components/layout/Navbar";
import Footer  from "./components/layout/Footer";

// UI
import LoadingScreen from "./components/ui/LoadingScreen";
import WAFloat       from "./components/ui/WAFloat";

// Pages
import HomePage    from "./pages/HomePage";
import MenuPage    from "./pages/MenuPage";
import GalleryPage from "./pages/GalleryPage";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

// Styles (imported here so they're available app-wide)
import "./styles/animations.css";
import "./styles/responsive.css";

const PAGE_MAP = {
  Home:    HomePage,
  Menu:    MenuPage,
  Gallery: GalleryPage,
  Booking: BookingPage,
  Contact: ContactPage,
};

function AppInner() {
  const { page } = useApp();
  const [loaded, setLoaded] = useState(false);

  const Page = PAGE_MAP[page] || NotFoundPage;

  return (
    <>
      {/* Loading splash */}
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}

      {/* Main chrome */}
      <Navbar />
      <main>
        <Page />
      </main>
      <Footer />

      {/* Global floating WhatsApp button */}
      <WAFloat />
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
