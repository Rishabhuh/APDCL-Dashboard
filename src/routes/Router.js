
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";

// import Dashboard from "../pages/Dashboard";
// import Bookings from "../pages/Bookings";
// import SellCar from "../pages/SellCar";
// import Settings from "../pages/Settings";
// import LandingPage from "../components/LandingPage";
// import Login from "../components/login";

// const Router = () => {
//   return (
//     <Routes>
//       {/* Redirect from / to /landingPage */}
//       <Route path="/" element={<Navigate to="/landingPage" />} />
      
//       {/* Other routes */}
//       <Route path="/landingPage" element={<LandingPage />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/bookings" element={<Bookings />} />
//       <Route path="/sell-car" element={<SellCar />} />
//       <Route path="/settings" element={<Settings />} />
//     </Routes>
//   );
// };

// export default Router;




import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import SellCar from "../pages/SellCar";
import Settings from "../pages/Settings";
import LandingPage from "../components/LandingPage";
import Login from "../components/login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/landingPage" />} />
      <Route path="/landingPage" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/sell-car" element={<SellCar />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default Router;
