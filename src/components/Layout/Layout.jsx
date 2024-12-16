
// import React from "react";
// import { useLocation } from "react-router-dom";  // Import useLocation to track the current route
// import Router from "../../routes/Router";
// import Sidebar from "../Sidebar/Sidebar";
// import TopNav from "../TopNav/TopNav";
// import LandingPage from "../LandingPage"; // Import LandingPage (if not already)

// const Layout = () => {
//   const location = useLocation(); // Track current route
  
//   // Conditionally render Sidebar and TopNav only on routes other than "/landingPage"
//   const showSidebarAndTopNav = location.pathname !== "/landingPage";

//   return (
//     <div className="layout">
//       {showSidebarAndTopNav && <Sidebar />}  {/* Render Sidebar only when not on landingPage */}
//       <div className="main__layout">
//         {showSidebarAndTopNav && <TopNav />}  {/* Render TopNav only when not on landingPage */}
        
//         <div className="content">
//           <Router />  {/* Router handles all the route-based component rendering */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;








import React from "react";
import { useLocation } from "react-router-dom"; // Import the hook to get the current location
import Router from "../../routes/Router";
import Sidebar from "../Sidebar/Sidebar";
import TopNav from "../TopNav/TopNav";
import LandingPage from "../LandingPage";

const Layout = () => {
  const location = useLocation(); // Get the current route/location

  // Check if the current route is login or landing page
  const isLoginPage = location.pathname === "/login";
  const isLandingPage = location.pathname === "/landingPage";

  return (
    <div className="layout">
      {/* Conditionally render sidebar and top nav based on the route */}
      {!isLoginPage && !isLandingPage && <Sidebar />}  {/* Only show Sidebar if not login or landing page */}
      <div className="main__layout">
        {!isLoginPage && !isLandingPage && <TopNav />}  {/* Only show TopNav if not login or landing page */}

        <div className="content">
          {/* Render the Router (this handles the page-specific content) */}
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;


