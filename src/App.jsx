// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import LandingPage from './components/LandingPage'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//   <LandingPage/>
//     </>
//   )
// }

// export default App

// App.jsx
import React, { useEffect } from 'react'
import { Navigate, useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import { ThemeProvider } from "./context/ThemeContext";
import { ContentProvider } from "./context/ContentContext";
// Static site: no auth/admin routes, no analytics tracking
// import { trackVisit } from "./services/api";
// import Login from './components/Login'
// import AdminLogin from './components/AdminLogin'
// import Signup from "./components/Signup";
// import ForgetPassword from "./components/ForgetPassword";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Disclosures from "./components/Disclosures";
import Disclaimer from "./components/Disclaimer";
import Refund from "./components/Refund";
import UpdatesManager from "./components/UpdatesManager";


export default function App() {
  const LocationTracker = () => {
    const loc = useLocation();
    useEffect(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      // Static: no analytics tracking
    }, [loc.pathname]);
    return null;
  };
  return (
    <ThemeProvider>
      <ContentProvider>
        <LocationTracker />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/*" element={<LandingPage />} />
          <Route path="/updates" element={<UpdatesManager />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclosures" element={<Disclosures />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ContentProvider>
    </ThemeProvider>
  );
}
